import { LockIcon, MailIcon } from "@/components/icons";
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

type Props = {
  isOpen: boolean;
  onOpenChange: () => void;
};

const LoginFormModal = ({ isOpen, onOpenChange }: Props) => {
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
                label="Email"
                placeholder="Enter your email"
                variant="bordered"
              />
              <Input
                endContent={
                  <LockIcon className="pointer-events-none flex-shrink-0 text-2xl text-default-400" />
                }
                label="Password"
                placeholder="Enter your password"
                type="password"
                variant="bordered"
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
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
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
