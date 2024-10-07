"use client";

import { signUpCredentials } from "@/lib/action";
import Link from "next/link";
import { useFormState } from "react-dom";
import RegisterButton from "@/components/button";

const FormRegister = () => {
  const [state, formAction] = useFormState(signUpCredentials, null);

  return (
    <form action={formAction} className="space-y-6">
      {state?.message ? (
        <div
          className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-100"
          role="alert"
        >
          <span className="font-medium">{state?.message}</span>
        </div>
      ) : null}

      {/* name */}
      <div>
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          className="w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2.5"
          placeholder="Rinaldi"
        />
        <div aria-live="polite" aria-atomic>
          <span className="text-sm text-red-500 mt-2">
            {state?.error?.name}
          </span>
        </div>
      </div>

      {/* email */}
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Email
        </label>
        <input
          type="text"
          name="email"
          className="w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2.5"
          placeholder="rinaldi@gmail.com"
        />
        <div aria-live="polite" aria-atomic>
          <span className="text-sm text-red-500 mt-2">
            {state?.error?.email}
          </span>
        </div>
      </div>

      {/* password */}
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          className="w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2.5"
          placeholder="******"
        />
        <div aria-live="polite" aria-atomic>
          <span className="text-sm text-red-500 mt-2">
            {state?.error?.password}
          </span>
        </div>
      </div>

      {/* confirm password */}
      <div>
        <label
          htmlFor="ConfirmPassword"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Confirm Password
        </label>
        <input
          type="password"
          name="ConfirmPassword"
          className="w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2.5"
          placeholder="******"
        />
        <div aria-live="polite" aria-atomic>
          <span className="text-sm text-red-500 mt-2">
            {state?.error?.ConfirmPassword}
          </span>
        </div>
      </div>

      {/* button */}
      <RegisterButton />

      {/* have account */}
      <p className="text-sm font-light text-gray-500">
        Already have an account?{" "}
        <Link href="/login">
          <span className="font-medium pl-1 text-blue-600 hover:text-blue-700">
            Sign In
          </span>
        </Link>
      </p>
    </form>
  );
};

export default FormRegister;
