"use client";

import { useFormStatus } from "react-dom";

interface AuthButtonProps {
  type: "login" | "register"
}

const AuthButton = ({ type }: AuthButtonProps) => {
  const { pending } = useFormStatus();

  const buttonText = type === "login" ? (pending ? "Authenticating..." : "Login") : (pending ? "Registering..." : "Register");

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full text-white bg-blue-700 font-medium rounded-lg px-5 py-2.5 uppercase hover:bg-blue-800"
    >
      {buttonText}
    </button>
  );
};

export default AuthButton;
