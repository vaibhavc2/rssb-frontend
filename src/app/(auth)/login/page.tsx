"use client";

import { AuthCard, LoginForm } from "@/components/custom/auth";
import Heading from "@/components/custom/heading";
import MainContainer from "@/components/custom/main-container";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Login = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <MainContainer>
      <Heading>Login</Heading>

      {/* //TODO: show Form in a BackDrop */}
      {showForm ? <LoginForm /> : <AuthCard setShowForm={setShowForm} />}

      <div className="text-sm">
        <p>
          Don't have an account?{" "}
          <Link
            href={"/register"}
            className="ml-1 text-yellow-200 transition-all hover:underline"
          >
            Register
            <MoveRight className="inline-block scale-50" />
          </Link>
        </p>
      </div>
    </MainContainer>
  );
};
export default Login;
