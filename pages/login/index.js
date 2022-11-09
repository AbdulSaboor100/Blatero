import React from "react";
import Button from "../../Components/Elements/Button/Button";
import Input from "../../Components/Elements/Input/Input";
import Link from "next/link";

const Login = () => {
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign in</h1>
          <Input type="text" name="email" placeholder="Email" />
          <Input type="password" name="password" placeholder="Password" />
          <Button onClick={() => {}}>Create Account</Button>
        </div>
        <div className="text-grey-dark mt-6">
          Don't have an account yet?
          <Link
            className="no-underline border-b border-blue text-blue"
            href="/register"
          >
            register here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
