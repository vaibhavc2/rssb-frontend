import { LockIcon, UserIcon } from "@/components/icons";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
import { LoginFormSchema } from "@/models";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Checkbox,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Input as NextInput,
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
  const form = useForm<FormInput>({
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
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <ModalBody>
                  <>
                    <FormField
                      control={form.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <NextInput
                              autoFocus
                              endContent={
                                <UserIcon className="pointer-events-none flex-shrink-0 text-2xl text-default-400" />
                              }
                              label="Username or Email"
                              placeholder="Enter your username or email"
                              variant="bordered"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <NextInput
                              label="Password"
                              placeholder="Enter your password"
                              type="password"
                              variant="bordered"
                              endContent={
                                <LockIcon className="pointer-events-none flex-shrink-0 text-2xl text-default-400" />
                              }
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

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
                  </>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" type="submit">
                    Sign in
                  </Button>
                </ModalFooter>
              </form>
            </Form>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
export default LoginFormModal;
