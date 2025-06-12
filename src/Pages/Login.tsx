import { useState } from "react";
import Input from "../components/form/input/InputField";
import Form from "../components/form/Form";
import { ButtonForm } from "../components/form/ButtonForm";
import useIsSmallScreen from "../hooks/useIsSmallScreen"
import LargeScreenUi from "../components/common/LargeScreenUi";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isSmallScreen = useIsSmallScreen(); // Adjust breakpoint as needed
  // 📌 Handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    setEmail("");
    setPassword("");
  };
  const Navigate = useNavigate();
  const toHome = () => {
    Navigate("/home");
  };

  // 📌 Render the component
  // If the screen is small, render the LargeScreenUi component
  if (isSmallScreen) {
    return (
      <>  <LargeScreenUi /></>
    )
  }

  return (
    <div>  <div className="min-h-dvh flex items-center justify-center bg-white">
      <div className="container p-6 space-y-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-center text-teal-800 mb-4">
          Login
        </h2>

        <Form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-2 border-secondary focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1 font-medium text-gray-700">
              Password
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-2 border-secondary focus:border-teal-700"
            />
            <div className="flex justify-end mt-1">
              <a href="#" className="text-xs text-blue-600 hover:underline">
                Forgot your password
              </a>
            </div>
          </div>
          <ButtonForm
            type="submit"
            onClick={toHome}
            size="lg"
            variant="default"
            className="w-full bg-gradient-to-br from-[#0f766e] to-[#059669] text-white font-bold rounded-md shadow"
          >
            Login
          </ButtonForm>
        </Form>


      </div>
    </div></div>
  )
}

export default Login