import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { OAuth } from ".";

const AuthCard = ({
  setShowForm,
}: {
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="mb-5 flex h-40 flex-col items-center justify-around rounded-xl border-1 border-gray-500 bg-gray-950 p-5">
      <OAuth />
      <Button onClick={() => setShowForm(true)} className="w-72 p-3 text-base">
        Use email-id instead
        <MoveRight className=" mx-2 inline-block scale-75" />
      </Button>
    </div>
  );
};
export default AuthCard;
