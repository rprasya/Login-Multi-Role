"use client";

import { useFormStatus } from "react-dom";

const RegisterButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full text-white bg-blue-700 font-medium rounded-lg px-5 py-2.5 uppercase hover:bg-blue-800"
    >
      {pending ? "Registering..." : "Register"}
    </button>
  );
};

export default RegisterButton;
