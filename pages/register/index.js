import React, { useState } from "react";
import Button from "../../Components/Elements/Button/Button";
import Input from "../../Components/Elements/Input/Input";
import Link from "next/link";
import { createUser, saveSpecificDocument } from "../../Api/api";

const Register = () => {
  let [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleRegister = async () => {
    let { email, password, confirmPassword, name } = formData;
    if (!email) return;
    if (!name) return;
    if (!password) return;
    if (!confirmPassword) return;

    let user = await createUser(email, password);
    let data = {
      emailVerified: user?.emailVerified,
      name,
      photoURL: user?.photoURL,
      uid: user?.uid,
      metaData: {
        createdAt: user?.metadata?.createdAt,
        creationTime: user?.metadata?.creationTime,
        lastLoginAt: user?.metadata?.lastLoginAt,
        lastSignInTime: user?.metadata?.lastSignInTime,
      },
      accessToken: user?.accessToken,
    };
    let savingUserToDb = await saveSpecificDocument(user?.uid, data);
    if (user && savingUserToDb)
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
  };
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={formData?.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e?.target?.value })
            }
          />
          <Input
            type="text"
            name="email"
            placeholder="Email"
            value={formData?.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e?.target?.value })
            }
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formData?.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e?.target?.value })
            }
          />
          <Input
            type="password"
            name="confirm_password"
            placeholder="Confirm Password"
            value={formData?.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e?.target?.value })
            }
          />
          <Button onClick={handleRegister}>Create Account</Button>
        </div>
        <div className="text-grey-dark mt-6">
          Already have an account?
          <Link
            className="no-underline border-b border-blue text-blue"
            href="/login"
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
