import { auth, db } from "../../firebase/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  type User,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";

type AuthContextData = {
  user: User | null;
  role: "user" | "admin" | null;
  logIn: typeof logIn;
  signUp: typeof signUp;
  logOut: typeof logOut;
    loading: boolean;
};

interface IUserAuthProviderProps {
  children: React.ReactNode;
}

const logIn = (eamil: string, password: string) => {
  return signInWithEmailAndPassword(auth, eamil, password);
};

const signUp = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
const logOut = () => {
  signOut(auth);
};

export const userAuthContext = createContext<AuthContextData>({
  user: null,
  role: null,
loading: true,
  logIn,
  signUp,
  logOut,
});

export const UserAuthProvider: React.FC<IUserAuthProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<"user" | "admin" | null>(null);
    const [loading, setLoading] = useState(true); // 👈 loading state
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        try {
          const docRef = doc(db, "users", firebaseUser.uid);
          const snap = await getDoc(docRef);
          if (snap.exists()) {
            const data = snap.data();
            console.log(data);
            
            if (data.role === "admin") setRole("admin");
            else setRole("user");
          } else {
            setRole("user");
          }
        } catch (err) {
          console.error("Failed to fetch user role:", err);
          setRole(null);
        }
      } else {
        setUser(null);
        setRole(null);
      }
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  const value: AuthContextData = {
    user,
    role,
    loading,
    logIn,
    signUp,
    logOut,

  };
  return (
    <userAuthContext.Provider value={value}>
      {children}
    </userAuthContext.Provider>
  );
};

export const useUserAuth = () => {
  return useContext(userAuthContext);
};
