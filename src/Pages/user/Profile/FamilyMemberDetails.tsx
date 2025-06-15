import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { AppNavbar } from "../../../Layout/user/AppNavbar";
import HeaderBar from "../../../Layout/user/HeaderBar";

// Generic info row
const InfoRow: FC<{ label: string; value: string; bold?: boolean }> = ({
  label,
  value,
  bold,
}) => (
  <div className="mb-3">
    <div className="text-xs text-gray-500">{label}</div>
    <div className={`bg-gray-100 rounded-lg px-4 py-3 mt-1 text-base ${bold ? "font-semibold" : ""}`}>
      {value}
    </div>
  </div>
);

// For side-by-side info
const InfoGrid: FC<{ items: { label: string; value: string }[] }> = ({ items }) => (
  <div className="flex gap-3 mb-4">
    {items.map((item) => (
      <div key={item.label} className="flex-1">
        <div className="text-xs text-gray-500">{item.label}</div>
        <div className="bg-gray-100 rounded-lg px-4 py-2 mt-1 font-semibold text-base">{item.value}</div>
      </div>
    ))}
  </div>
);

const BackButton: FC = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      aria-label="Go back"
      className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-teal-700/30"
    >
      <svg width={24} height={24} fill="none" viewBox="0 0 24 24">
        <path d="M15 18l-6-6 6-6" stroke="#fff" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
};

const FamilyMemberDetails: FC = () => (
  <div className="min-h-dvh bg-white pb-16 ">
    {/* Header */}
    <HeaderBar
      title="Family Member Details"/>

    <main className="px-4 pt-6 mx-auto">
      <div className="text-center mb-3">
        <div className="text-lg font-bold text-gray-900">Muhammed Ali</div>
        <div className="text-teal-700 text-sm font-medium">Head of family</div>
      </div>

      <InfoGrid
        items={[
          { label: "Age", value: "52 years" },
          { label: "Blood Group", value: "A Positive" },
        ]}
      />
      <InfoRow label="Adhar number" value="11 22 33 44 55" />
      <InfoRow label="Occupation" value="Driver" />
      <InfoRow label="Salary" value="30k/month" />
      <InfoRow label="Phone number" value="+91 11223 34455" />
      <InfoRow label="Phone number" value="+91 11223 34455" />
      <InfoRow label="Email" value="abcd@gmail.com" />
      <InfoRow label="Address" value="Abcd, at abcd ,xyz"  />
    </main>
    <AppNavbar />
  </div>
);

export default FamilyMemberDetails;