import { FC, useState } from "react";
import Button from "../../../components/ui/button/Button";
import HeaderBar from "../../../Layout/user/HeaderBar";
import { Modal } from "../../../components/ui/Modal/index";
import { useNavigate } from "react-router-dom";
import Input from "../../../components/form/input/InputField";
import PhoneInput from "../../../components/form/group-input/PhoneInput";
import TextArea from "../../../components/form/input/TextArea";
import { ButtonForm } from "../../../components/form/ButtonForm";
import Form from "../../../components/form/Form";

// Example emoji icon, replace with your SVG if needed
const CertificateIcon = () => (
  <span role="img" aria-label="certificate" className="text-xl mr-2">📜</span>
);

type StatusType = "Active" | "pending";
const statusStyles: Record<StatusType, string> = {
  Active: "bg-green-50 text-green-700",
  pending: "bg-yellow-50 text-yellow-800",
};

const CERTIFICATE_TYPES = [
  { label: "Maarage Certificate", value: "maarage" },
  { label: "Mahallu Clearance", value: "mahallu" },
  { label: "Other Certificate", value: "other" }
];

// Example country code list for phone input
const COUNTRY_CODES = [
  { code: "IN", label: "+91" },
  { code: "US", label: "+1" },
  { code: "AE", label: "+971" },
  // Add more as needed
];

const CertificateCard: FC<{
  status: StatusType;
  title: string;
  desc: string;
  issuedOrReq: string;
  date: string;
}> = ({ status, title, desc, issuedOrReq, date }) => (
  <div className="border-l-6 border-primary bg-white rounded-xl shadow-md px-4 py-6 mb-4">
    <div className="pl-3">
      <div className="flex items-center justify-between">
        <div className="font-semibold text-gray-800">{title}</div>
        <span className={`px-3 py-0.5 rounded-full text-xs font-semibold ml-2 ${statusStyles[status]}`}>
          {status}
        </span>
      </div>
      <div className="text-sm text-gray-500">{desc}</div>
      <div className="text-xs text-gray-400 mt-1">
        {issuedOrReq}: {date}
      </div>
    </div>
  </div>
);

// -------- Modal Certificate Request Selection --------
const CertificateRequestModal: FC<{
  isOpen: boolean;
  onClose: () => void;
  onSelect: (type: string) => void;
}> = ({ isOpen, onClose, onSelect }) => (
  <Modal isOpen={isOpen} onClose={onClose} className="max-w-xs mx-auto py-6 px-4" showCloseButton>
    <div className="text-lg font-bold text-gray-700 mb-5 text-center">Request Certificate</div>
    <div className="flex flex-col gap-3">
      {CERTIFICATE_TYPES.map((cert) => (
        <Button
          key={cert.value}
          variant="bg_lener"
          className="w-full py-2 text-base font-semibold"
          onClick={() => onSelect(cert.value)}
        >
          {cert.label}
        </Button>
      ))}
    </div>
  </Modal>
);

// -------- Certificate Request Form --------
const CertificateRequestForm: FC<{
  type: string;
  isOpen: boolean;
  onClose: () => void;
}> = ({ type, isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [desc, setDesc] = useState("");
  const [countryPhone, setCountryPhone] = useState("+91");
  const navigate = useNavigate();

  // Example: After submit, redirect to a success page or just close modal
  const handleSubmit = () => {
    // TODO: handle the submit logic (API, etc.)
    onClose();
    // Optionally redirect:
    // navigate("/certificates/success");
  };

  const certificateLabel =
    CERTIFICATE_TYPES.find((c) => c.value === type)?.label || "Certificate";

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-xs mx-auto py-6 px-4" showCloseButton>
      <div className="text-lg font-bold text-gray-700 my-5 text-center">
        Request {certificateLabel}
      </div>
      <Form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-sm text-gray-700 mb-1">Name of person</label>
          <Input
            type="text"
            required
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Enter name"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-700 mb-1">Phone</label>
          <PhoneInput
            countries={COUNTRY_CODES}
            onChange={v => setCountryPhone(v)}
            placeholder="+91 98765 43210"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-700 mb-1">Description</label>
          <TextArea
            value={desc}
            onChange={setDesc}
            placeholder="Reason/description"
            rows={3}
            required
          />
        </div>
        <ButtonForm
          type="submit"
          variant="bg_lener"
          className="w-full py-2 text-base font-semibold mt-2"
        >
          Submit Request
        </ButtonForm>
      </Form>
    </Modal>
  );
};

const MyCertificates: FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formType, setFormType] = useState<string | null>(null);

  return (
    <div className="relative min-h-dvh bg-gray-100 pb-8">
      {/* Header */}
      <HeaderBar title="My Certificates" />

      <main className="px-4 pt-4 max-w-sm mx-auto">
        {/* Available Certificates header */}
        <div className="flex items-center justify-between mb-14">
          <div className="flex items-center font-semibold text-base text-gray-700">
            <CertificateIcon />
            Available Certificates
          </div>
          <Button
            className="text-sm font-semibold"
            variant="bg_lener"
            onClick={() => setModalOpen(true)}
          >
            + Noc
          </Button>
        </div>

        {/* Certificate cards */}
        <CertificateCard
          status="Active"
          title="Bonafide Certificate"
          desc="Student verification certificate"
          issuedOrReq="Issued"
          date="Dec 15, 2024"
        />
        <CertificateCard
          status="pending"
          title="Bonafide Certificate"
          desc="Student verification certificate"
          issuedOrReq="Requested"
          date="Dec 15, 2024"
        />
      </main>

      {/* Modal for certificate type selection */}
      <CertificateRequestModal
        isOpen={modalOpen && !formType}
        onClose={() => setModalOpen(false)}
        onSelect={(type) => setFormType(type)}
      />

      {/* Modal for form input */}
      <CertificateRequestForm
        type={formType ?? ""}
        isOpen={!!formType}
        onClose={() => {
          setFormType(null);
          setModalOpen(false);
        }}
      />
    </div>
  );
};

export default MyCertificates;