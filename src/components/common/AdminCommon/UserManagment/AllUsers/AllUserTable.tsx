// import React, from "react";
// import AllUserTableRow from "./AllUserTableRow";
// import Button from "../../../../ui/button/Button";
// import { Modal } from "../../../../ui/Modal/index"; // Adjust import path as needed
// import { ButtonForm } from "../../../../form/ButtonForm";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth, db } from "../../../../../firebase/firebaseConfig";
// import { doc, setDoc } from "firebase/firestore";

const users = [
 {
    name: "Ummar",
    phone: "+91 0987654321",
    email: "Ummar@gmail.com",
    bloodGroup: "B+",
    aadhar: "1234 5678 9123",
    pan: "ABCDE1234F",
    joinDate: "2024-05-20",
    payment: "₹25,000",
    address: "Malappuram, Kerala",
  },{
    name: "Ummar",
    phone: "+91 0987654321",
    email: "Ummar@gmail.com",
    bloodGroup: "B+",
    aadhar: "1234 5678 9123",
    pan: "ABCDE1234F",
    joinDate: "2024-05-20",
    payment: "₹25,000",
    address: "Malappuram, Kerala",
  },{
    name: "Ummar",
    phone: "+91 0987654321",
    email: "Ummar@gmail.com",
    bloodGroup: "B+",
    aadhar: "1234 5678 9123",
    pan: "ABCDE1234F",
    joinDate: "2024-05-20",
    payment: "₹25,000",
    address: "Malappuram, Kerala",
  },{
    name: "Ummar",
    phone: "+91 0987654321",
    email: "Ummar@gmail.com",
    bloodGroup: "B+",
    aadhar: "1234 5678 9123",
    pan: "ABCDE1234F",
    joinDate: "2024-05-20",
    payment: "₹25,000",
    address: "Malappuram, Kerala",
  },{
    name: "Ummar",
    phone: "+91 0987654321",
    email: "Ummar@gmail.com",
    bloodGroup: "B+",
    aadhar: "1234 5678 9123",
    pan: "ABCDE1234F",
    joinDate: "2024-05-20",
    payment: "₹25,000",
    address: "Malappuram, Kerala",
  },{
    name: "Ummar",
    phone: "+91 0987654321",
    email: "Ummar@gmail.com",
    bloodGroup: "B+",
    aadhar: "1234 5678 9123",
    pan: "ABCDE1234F",
    joinDate: "2024-05-20",
    payment: "₹25,000",
    address: "Malappuram, Kerala",
  },
  {
    name: "Ummar",
    phone: "+91 0987654321",
    email: "Ummar@gmail.com",
  },
  {
    name: "Ummar",
    phone: "+91 0987654321",
    email: "Ummar@gmail.com",
  },
   {
    name: "Ummar",
    phone: "+91 0987654321",
    email: "Ummar@gmail.com",
  },
  {
    name: "Ummar",
    phone: "+91 0987654321",
    email: "Ummar@gmail.com",
  },
  {
    name: "Ummar",
    phone: "+91 0987654321",
    email: "Ummar@gmail.com",
  },
  {
    name: "Ummar",
    phone: "+91 0987654321",
    email: "Ummar@gmail.com",
  },
   {
    name: "Ummar",
    phone: "+91 0987654321",
    email: "Ummar@gmail.com",
  },
  {
    name: "Ummar",
    phone: "+91 0987654321",
    email: "Ummar@gmail.com",
  },
  {
    name: "Ummar",
    phone: "+91 0987654321",
    email: "Ummar@gmail.com",
  },
  {
    name: "Ummar",
    phone: "+91 0987654321",
    email: "Ummar@gmail.com",
  },
];

const UserTable: React.FC = () => {
//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     password: "",
//     role: "user", // default role
//   });

//   const handleOpen = () => setIsModalOpen(true);
//   const handleClose = () => setIsModalOpen(false);

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value, type, checked } = e.target;
  //   setForm((prev) => ({
  //     ...prev,
  //     [name]: type === "checkbox" ? checked : value,
  //   }));
  // };

  // const handleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setForm((prev) => ({
  //     ...prev,
  //     role: e.target.value,
  //   }));
  // };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //  try {

  //   const userCred = await createUserWithEmailAndPassword(auth, form.email, form.password);
  //   const uid = userCred.user.uid;

  //   await setDoc(doc(db, "users", uid), {
  //     name:form.name,
  //     email:form.email,
  //     phone:form.phone,
  //     role:form.role,
  //     createdAt:Date.now(),
  //   });
  //   handleClose();

    
  //  } catch (error) {
  //    console.error("Registration error:", error);
  //    console.log(error);
     
    
  //  }
   
  // };

  return (
    <div>
      <Button variant="bg_lener"  className="my-4">
        Add User
      </Button>
      {/* <Modal isOpen={isModalOpen} onClose={handleClose} className="max-w-md">
        <form className="p-6" onSubmit={handleSubmit}>
          <h2 className="text-xl font-bold mb-4">Register New User</h2>
          <div className="mb-2">
            <label className="block mb-1">Name</label>
            <input
              className="w-full border rounded px-2 py-1"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-2">
            <label className="block mb-1">Phone</label>
            <input
              className="w-full border rounded px-2 py-1"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-2">
            <label className="block mb-1">Email</label>
            <input
              className="w-full border rounded px-2 py-1"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-2">
            <label className="block mb-1">Password</label>
            <input
              className="w-full border rounded px-2 py-1"
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-1">Role</label>
            <label className="mr-4">
              <input
                type="radio"
                name="role"
                value="user"
                checked={form.role === "user"}
                onChange={handleRoleChange}
              />{" "}
              User
            </label>
            <label>
              <input
                type="radio"
                name="role"
                value="admin"
                checked={form.role === "admin"}
                onChange={handleRoleChange}
              />{" "}
              Admin
            </label>
          </div>
          <div className="flex gap-2">
            <ButtonForm type="submit" variant="default">
              Register
            </ButtonForm>
            <ButtonForm type="submit" variant="outline" onClick={handleClose}>
              Cancel
            </ButtonForm>
          </div>
        </form>
      </Modal> */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-0 overflow-x-auto transition-colors duration-300">
        <table className="min-w-full text-left">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-700">
              <th className="py-2 px-4 font-medium text-gray-800 dark:text-white">Name</th>
              <th className="py-2 px-4 font-medium text-gray-800 dark:text-white">Phone no</th>
              <th className="py-2 px-4 font-medium text-gray-800 dark:text-white">Email</th>
              <th className="py-2 px-4 font-medium text-gray-800 dark:text-white">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <AllUserTableRow key={idx} {...user} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;