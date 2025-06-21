// src/pages/Admin/CreateFamily.tsx
import React, { useState } from "react";
import { initSecondaryAuth, firestore } from "../../firebase/firebaseConfig";
import {
  createUserWithEmailAndPassword,
 type Auth as FirebaseAuth,
} from "firebase/auth";
import {
  collection,
  doc,
  setDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { useUserAuth } from "../../context/user/userAuthContext";

const EMAIL_DOMAIN = "mahallu-app.local";

interface Member {
  name: string;
  relation: string;
}

const CreateFamily: React.FC = () => {
  const { user: adminUser, role } = useUserAuth();
  const [houseNumber, setHouseNumber] = useState("");
  const [password, setPassword] = useState("");
  const [members, setMembers] = useState<Member[]>([
    { name: "", relation: "" },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const handleMemberChange = (idx: number, field: keyof Member, value: string) => {
    setMembers((prev) => {
      const copy = [...prev];
      copy[idx] = { ...copy[idx], [field]: value };
      return copy;
    });
  };

  const addMemberField = () => {
    setMembers((prev) => [...prev, { name: "", relation: "" }]);
  };
  const removeMemberField = (idx: number) => {
    setMembers((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMsg(null);

    if (!adminUser || role !== "admin") {
      setError("Unauthorized");
      return;
    }
    if (!houseNumber.trim() || !password) {
      setError("House number and password are required");
      return;
    }
    // Optional: check uniqueness of houseNumber in Firestore
    setLoading(true);
    try {
      // 1. Check if a family with this houseNumber already exists
      const familiesCol = collection(firestore, "families");
      const familyDocRef = doc(firestore, "families", houseNumber);
      const snap = await getDoc(familyDocRef);
      if (snap.exists()) {
        throw new Error("House number already exists");
      }

      // 2. Create Auth user via secondary auth
      const { auth: secondaryAuth, delete: deleteSecondary } = initSecondaryAuth();
      const email = `${houseNumber}@${EMAIL_DOMAIN}`;
      let userCredential;
      try {
        userCredential = await createUserWithEmailAndPassword(
          secondaryAuth,
          email,
          password
        );
      } catch (err: any) {
        throw new Error(`Failed to create auth user: ${err.message}`);
      } finally {
        // Clean up secondary auth so admin session remains
        await deleteSecondary();
      }
      const familyUid = userCredential.user.uid;

      // 3. Create Firestore family doc
      const familyData = {
        houseNumber,
        createdBy: adminUser.uid,
        createdAt: serverTimestamp(),
      };
      await setDoc(familyDocRef, familyData);

      // 4. Create subcollection "members"
      const membersColRef = collection(familyDocRef, "members");
      for (const member of members) {
        if (member.name.trim()) {
          const memberDocRef = doc(membersColRef); // auto id
          await setDoc(memberDocRef, {
            name: member.name.trim(),
            relation: member.relation.trim(),
            createdAt: serverTimestamp(),
          });
        }
      }

      // 5. Create users/{uid} doc
      const userDocRef = doc(firestore, "users", familyUid);
      await setDoc(userDocRef, {
        role: "family",
        familyId: houseNumber,
        createdAt: serverTimestamp(),
      });

      setSuccessMsg("Family created successfully");
      // Reset form
      setHouseNumber("");
      setPassword("");
      setMembers([{ name: "", relation: "" }]);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Failed to create family");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 border rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Create New Family</h2>
      {error && <p className="text-red-600 mb-2">{error}</p>}
      {successMsg && <p className="text-green-600 mb-2">{successMsg}</p>}
      <form onSubmit={handleSubmit}>
        <label className="block mb-1">House Number</label>
        <input
          type="text"
          value={houseNumber}
          onChange={(e) => setHouseNumber(e.target.value)}
          className="w-full mb-3 p-2 border rounded"
          required
        />
        <label className="block mb-1">Password for Family Login</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-3 p-2 border rounded"
          required
        />

        <div className="mb-4">
          <h3 className="font-medium">Family Members</h3>
          {members.map((m, idx) => (
            <div key={idx} className="flex space-x-2 items-center mb-2">
              <input
                type="text"
                placeholder="Name"
                value={m.name}
                onChange={(e) => handleMemberChange(idx, "name", e.target.value)}
                className="flex-1 p-2 border rounded"
                required
              />
              <input
                type="text"
                placeholder="Relation"
                value={m.relation}
                onChange={(e) => handleMemberChange(idx, "relation", e.target.value)}
                className="flex-1 p-2 border rounded"
                required
              />
              {members.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeMemberField(idx)}
                  className="text-red-600"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addMemberField}
            className="mt-2 text-blue-500"
          >
            + Add Member
          </button>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          {loading ? "Creating..." : "Create Family"}
        </button>
      </form>
    </div>
  );
};

export default CreateFamily;
