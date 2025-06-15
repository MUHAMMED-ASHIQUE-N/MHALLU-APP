import { FC } from "react";
import FamilyPhoto from "../../../assets/icons/family-pic-placeholder.png";
import { AppNavbar } from "../../../Layout/user/AppNavbar";
import { useNavigate } from "react-router-dom";

// Back navigation button

// Info icons for address, members, phone
const InfoIcon: FC<{ type: "location" | "members" | "phone" }> = ({ type }) => {
  switch (type) {
    case "location":
      return (
        <svg className="w-5 h-5 text-teal-700" fill="none" viewBox="0 0 24 24">
          <path d="M12 21s-6-5.686-6-10A6 6 0 1112 21z" stroke="currentColor" strokeWidth={1.7}/>
          <circle cx="12" cy="11" r="2.5" stroke="currentColor" strokeWidth={1.7}/>
        </svg>
      );
    case "members":
      return (
        <svg className="w-5 h-5 text-teal-700" fill="none" viewBox="0 0 24 24">
          <path d="M16 19v-2a4 4 0 00-8 0v2" stroke="currentColor" strokeWidth={1.7}/>
          <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth={1.7}/>
        </svg>
      );
    case "phone":
      return (
        <svg className="w-5 h-5 text-teal-700" fill="none" viewBox="0 0 24 24">
          <path d="M22 16.92V21a1 1 0 01-1.1 1A19.72 19.72 0 013 5.1 1 1 0 014 4h4.09a1 1 0 011 .75l1.09 4.36a1 1 0 01-.29 1L8.21 11.79a16 16 0 006 6l1.7-1.7a1 1 0 011-.29l4.36 1.09a1 1 0 01.75 1V16.92z" stroke="currentColor" strokeWidth={1.7}/>
        </svg>
      );
    default:
      return null;
  }
};

// Edit icon for card
const EditIcon: FC = () => (
  <svg className="w-5 h-5 text-teal-700" fill="none" viewBox="0 0 24 24">
    <path d="M16.862 3.487a2.13 2.13 0 113.015 3.015l-11.27 11.27-3.42.38.38-3.42 11.295-11.245z" stroke="currentColor" strokeWidth={1.7} strokeLinejoin="round"/>
  </svg>
);

type FamilyMember = {
  name: string;
  age: number;
  gender: string;
  relation: string;
    onClick?: () => void; // Optional click handler for card
};

const familyMembers: FamilyMember[] = [
  { name: "Muhammed Ali", age: 52, gender: "Male", relation: "Guardian" },
  { name: "Zainaba Ali", age: 46, gender: "Female", relation: "Wife" },
  { name: "Abraham Ali", age: 22, gender: "Male", relation: "Son" },
  { name: "Aysha Ali", age: 12, gender: "Female", relation: "Daughter" },
];

// Family member card
const FamilyMemberCard: FC<FamilyMember> = ({ name, age, gender, relation, onClick }) => (
  <div onClick={onClick} className="border-l-6  border-primary bg-white rounded-xl shadow px-4 py-5 mb-4 mx-2">
    <div className="pl-4">
      <div className="font-semibold text-lg text-gray-900">{name}</div>
      <div className="text-sm text-gray-600">{`Age: ${age} - ${gender} - ${relation}`}</div>
    </div>
  </div>
);

const FamilyInformation: FC = () => {
    const navigate = useNavigate();
    return(
  <div className="min-h-dvh bg-gray-100 pb-20 relative">
    {/* Header */}
    <div className="bg-teal-700 px-4 py-5 text-center">
      <h2 className="text-white text-2xl font-extrabold">Family Information</h2>
    </div>

    <main className="px-4 pt-5 max-w-md mx-auto">
      {/* Family Photo */}
      <div className="w-full rounded-2xl overflow-hidden shadow mb-4">
        <img
          src={FamilyPhoto}
          alt="Family"
          className="w-full h-44 object-cover"
          draggable={false}
        />
      </div>

      {/* Family Info Card */}
      <div className="relative bg-white rounded-2xl shadow px-5 py-6 mb-6">
        <div className="flex justify-between items-start">
          <div>
            <div className="font-bold text-lg text-gray-900 mb-1">Naiketty House</div>
            <div className="flex items-center text-sm text-gray-600 mb-1">
              <InfoIcon type="location" />
              <span className="ml-2">123 house, at place</span>
            </div>
            <div className="flex items-center text-sm text-gray-600 mb-1">
              <InfoIcon type="members" />
            
              <span className="ml-2">4 Members</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <InfoIcon type="phone" />
              <span className="ml-2">+91 11223 34455</span>
            </div>
          </div>
          <button
            className="rounded-full p-1.5 bg-teal-50 hover:bg-teal-100 shadow"
            aria-label="Edit"
            type="button"
          >
            <EditIcon />
          </button>
        </div>
      </div>

      {/* Family Members */}
      <div className="flex items-center gap-2 mb-3 mt-2 px-2">
        <svg className="w-6 h-6 text-teal-700" fill="none" viewBox="0 0 24 24">
          <path d="M16 19v-2a4 4 0 00-8 0v2" stroke="currentColor" strokeWidth={1.7}/>
          <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth={1.7}/>
          <circle cx="6" cy="17" r="4" stroke="currentColor" strokeWidth={1.7}/>
          <circle cx="18" cy="17" r="4" stroke="currentColor" strokeWidth={1.7}/>
        </svg>
        <span className="font-bold text-lg text-teal-800">Family members</span>
      </div>
      <div className="bg-teal-100 rounded-2xl py-4 mb-20 shadow-inner">
        {familyMembers.map((member) => (
          <FamilyMemberCard key={member.name} {...member} onClick={()=>navigate('/family-member')}  />
        ))}
      </div>
    </main>
    <AppNavbar />
  </div>
)
};

export default FamilyInformation;