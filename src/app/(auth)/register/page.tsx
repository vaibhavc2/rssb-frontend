"use client";
import { AuthCard, RegisterForm } from "@/components/custom/auth";
import Heading from "@/components/custom/heading";
import MainContainer from "@/components/custom/main-container";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Register = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <MainContainer>
      <Heading>Register</Heading>

      {/* //TODO: show Form in a BackDrop */}
      {showForm ? <RegisterForm /> : <AuthCard setShowForm={setShowForm} />}

      <div>
        <p className="text-sm">
          Already have an account?{" "}
          <Link
            href={"/login"}
            className="ml-1 text-yellow-200 transition-all hover:underline"
          >
            Sign In
            <MoveRight className="inline-block scale-50" />
          </Link>
        </p>
      </div>
    </MainContainer>
  );
};
export default Register;
