import { FC } from "react";
import { useNavigate } from "react-router-dom";

// You can substitute this with your actual QR SVG path or data URI
import QrImage from "../../assets/icons/QR_Code_Example.svg";

const BackButton: FC = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      aria-label="Go back"
      className="flex items-center justify-center z-99999 w-2 h- rounded-full bg-amber-600 py-1 px-2 "
    >
      <svg width={24} height={24} fill="none" viewBox="0 0 24 24">
        <path d="M15 18l-6-6 6-6" stroke="#166a5c" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
};

const AmountCard: FC = () => (
  <div className="w-full rounded-xl shadow-md bg-gradient-to-br from-[#0f766e] to-[#059669] px-6  py-12 mb-7 flex flex-col items-center text-white">
        <div className="text-base mb-1 opacity-90">Amount Due</div>
        <div className="text-3xl font-bold mb-1">₹200</div>
        <div className="text-sm font-semibold opacity-90">Due: June 15, 2025</div>
      </div>
);

const QrCodePayment: FC = () => (
  <div className="relative min-h-screen bg-gray-100 pb-20">
    {/* Header */}
    <div className="bg-primary px-4 py-4 flex items-center gap-3">
      <BackButton />
      <h2 className="text-white text-lg font-bold flex-1 text-center -ml-8">Qr Code Payment</h2>
      <span className="w-9 h-9" />
    </div>

    <main className="px-4 pt-6 max-w-sm mx-auto flex flex-col items-center">
      <AmountCard />

      <div className="bg-white rounded-xl shadow flex flex-col items-center p-4 my-12 mb-6 border">
        <img
          src={QrImage}
          alt="QR Code"
          className="w-64  h-64 object-contain"
        />
      </div>
      <div className="text-center text-teal-700 text-sm font-medium">Scan with any UPI app</div>
    </main>
  </div>
);

export default QrCodePayment;