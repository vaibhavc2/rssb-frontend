import { Button, Card, CardBody } from "@nextui-org/react";
import { MoveRight } from "lucide-react";
import { OAuth } from ".";

const AuthCard = ({ onOpen }: { onOpen: () => void }) => {
  return (
    <Card className="mb-5 h-40">
      <CardBody className="flex flex-col items-center justify-around">
        <OAuth />
        <Button
          onPress={onOpen}
          variant="solid"
          color="primary"
          className="w-72 p-3 text-base"
        >
          Use email-id instead
          <MoveRight className=" mx-2 inline-block scale-75" />
        </Button>
      </CardBody>
    </Card>
  );
};
export default AuthCard;
