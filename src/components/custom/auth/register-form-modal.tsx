import { LockIcon, MailIcon, ProfileIcon, UserIcon } from "@/components/icons";
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

type Props = {
  isOpen: boolean;
  onOpenChange: () => void;
};

const RegisterFormModal = ({ isOpen, onOpenChange }: Props) => {
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
            <ModalBody>
              <Input
                autoFocus
                endContent={
                  <UserIcon className="pointer-events-none flex-shrink-0 text-2xl text-default-400" />
                }
                label="Name"
                placeholder="Enter your name"
                variant="bordered"
              />
              <Input
                endContent={
                  <ProfileIcon className="pointer-events-none flex-shrink-0 text-2xl text-default-400" />
                }
                label="Username"
                placeholder="Enter your username"
                variant="bordered"
              />
              <Input
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
export default RegisterFormModal;
