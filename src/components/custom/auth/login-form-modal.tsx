import { LockIcon, MailIcon } from "@/components/icons";
import { LoginFormSchema } from "@/models";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Checkbox,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as z from "zod";

type Props = {
  isOpen: boolean;
  onOpenChange: () => void;
};

type FormInput = z.infer<typeof LoginFormSchema>;

const LoginFormModal = ({ isOpen, onOpenChange }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: FormInput) {
    console.log(values);
  }

  return (
    <Modal
      backdrop="blur"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="center"
      className="mx-3"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-xl">
              Log in
            </ModalHeader>
            <ModalBody>
              <Input
                autoFocus
                endContent={
                  <MailIcon className="pointer-events-none flex-shrink-0 text-2xl text-default-400" />
                }
                label="Email or Username"
                placeholder="Enter your email or username"
                variant="bordered"
                {...register("username")}
              />
              {errors.username?.message && (
                <p className="text-sm text-danger-500">
                  {errors.username?.message}
                </p>
              )}
              <Input
                endContent={
                  <LockIcon className="pointer-events-none flex-shrink-0 text-2xl text-default-400" />
                }
                label="Password"
                placeholder="Enter your password"
                type="password"
                variant="bordered"
                {...register("password")}
              />
              {errors.password?.message && (
                <p className="text-sm text-danger-500">
                  {errors.password?.message}
                </p>
              )}
              <div className="flex justify-between px-1 py-2">
                <Checkbox
                  classNames={{
                    label: "text-small",
                  }}
                >
                  Remember me
                </Checkbox>
                <Link href="#" className="text-sm text-primary-500">
                  Forgot password?
                </Link>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onPress={onClose}>
                Close
              </Button>
              <Button
                color="primary"
                type="submit"
                onSubmit={handleSubmit((values) => onSubmit(values))}
              >
                Sign in
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
export default LoginFormModal;
