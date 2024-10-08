"use client";

import { signInCredentials } from "@/lib/action";
import Link from "next/link";
import { useFormState } from "react-dom";
import AuthButton from "@/components/button";

const FormLogin = () => {
  const [state, formAction] = useFormState(signInCredentials, null);

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

      {/* button */}
      <AuthButton type="login" />

      {/* have account */}
      <p className="text-sm font-light text-gray-500">
        Don&apos;t have an account yet?{" "}
        <Link href="/register">
          <span className="font-medium pl-1 text-blue-600 hover:text-blue-700">
            Sign Up here
          </span>
        </Link>
      </p>
    </form>
  );
};

export default FormLogin;
