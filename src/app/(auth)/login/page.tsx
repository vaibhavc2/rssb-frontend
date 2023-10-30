"use client";

import { AuthCard, LoginFormModal } from "@/components/custom/auth";
import Heading from "@/components/custom/heading";
import MainContainer from "@/components/custom/main-container";
import { useDisclosure } from "@nextui-org/react";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const Login = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <MainContainer>
      <Heading>Login</Heading>

      {/* //TODO: show Form in a BackDrop */}
      {/* {showForm ? <LoginForm /> : <AuthCard setShowForm={setShowForm} />} */}
      <AuthCard onOpen={onOpen} />
      <LoginFormModal isOpen={isOpen} onOpenChange={onOpenChange} />

      <div className="text-sm">
        <p>
          Don't have an account?{" "}
          <Link
            href={"/register"}
            className="ml-1 text-yellow-700 transition-all hover:underline dark:text-yellow-200"
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
