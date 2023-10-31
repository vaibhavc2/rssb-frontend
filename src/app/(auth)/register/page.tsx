"use client";
import { AuthCard, RegisterFormModal } from "@/components/custom/auth";
import Heading from "@/components/custom/heading";
import MainContainer from "@/components/custom/main-container";
import { useDisclosure } from "@nextui-org/react";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const Register = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <MainContainer>
      <Heading>Register</Heading>

      <AuthCard onOpen={onOpen} />

      <RegisterFormModal isOpen={isOpen} onOpenChange={onOpenChange} />

      <div>
        <p className="text-sm">
          Already have an account?{" "}
          <Link
            href={"/login"}
            className="ml-1 text-yellow-700 transition-all hover:underline dark:text-yellow-200"
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
