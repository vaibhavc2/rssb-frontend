import { LockIcon, MailIcon, ProfileIcon, UserIcon } from "@/components/icons";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { RegisterFormSchema } from "@/models";
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
import { useForm } from "react-hook-form";
import * as z from "zod";

type Props = {
  isOpen: boolean;
  onOpenChange: () => void;
};

type FormInput = z.infer<typeof RegisterFormSchema>;

const RegisterFormModal = ({ isOpen, onOpenChange }: Props) => {
  const form = useForm<FormInput>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      name: "",
      username: "",
      email: "",
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
              Sign Up
            </ModalHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <ModalBody>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <NextInput
                            autoFocus
                            endContent={
                              <UserIcon className="pointer-events-none flex-shrink-0 text-2xl text-default-400" />
                            }
                            label="Name"
                            placeholder="Enter your name"
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
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <NextInput
                            endContent={
                              <ProfileIcon className="pointer-events-none flex-shrink-0 text-2xl text-default-400" />
                            }
                            label="Username"
                            placeholder="Enter your username"
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
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <NextInput
                            endContent={
                              <MailIcon className="pointer-events-none flex-shrink-0 text-2xl text-default-400" />
                            }
                            label="Email"
                            placeholder="Enter your email"
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
                            endContent={
                              <LockIcon className="pointer-events-none flex-shrink-0 text-2xl text-default-400" />
                            }
                            label="Password"
                            placeholder="Enter your password"
                            type="password"
                            variant="bordered"
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
                  </div>
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
export default RegisterFormModal;
