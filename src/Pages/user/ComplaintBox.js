import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import HeaderBar from "../../Layout/user/HeaderBar";
import Input from "../../components/form/input/InputField";
import Form from "../../components/form/Form";
import TextArea from "../../components/form/input/TextArea";
import { ButtonForm } from "../../components/form/ButtonForm";
import { toast } from "react-toastify";
import { addDoc, collection } from "firebase/firestore";
import { firestore } from "../../firebase/firebaseConfig";
const ComplaintBox = () => {
    const [name, setName] = useState("");
    const [comp_description, setComp_description] = useState("");
    const handleComplaintSumbit = async (e) => {
        e.preventDefault();
        if (!name || !comp_description) {
            toast.error("fill the fields");
            return;
        }
        try {
            await addDoc(collection(firestore, "complaints"), {
                name: name,
                complaints: comp_description,
                createdAt: new Date(),
            });
            toast.success("complaint sumbmited");
            setName("");
            setComp_description("");
        }
        catch (error) {
            console.error("Error in adding complaint", error);
        }
    };
    return (_jsxs("div", { className: "min-h-dvh bg-gray-100 ", children: [_jsx(HeaderBar, { title: "Complaints" }), _jsx("div", { className: " mx-auto px-8 py-20", children: _jsxs(Form, { onSubmit: handleComplaintSumbit, className: " flex flex-col gap-4", children: [_jsx(Input, { value: name, onChange: (e) => {
                                setName(e.target.value);
                            }, className: "", name: "name_of_the_person", placeholder: "enter your name" }), _jsx(TextArea, { value: comp_description, onChange: setComp_description }), _jsx(ButtonForm, { variant: "bg_lener", type: "submit", children: "Submit" })] }) })] }));
};
export default ComplaintBox;
