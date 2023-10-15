import Link from "next/link";

type Props = {};

const page = ({}: Props) => {
  return (
    <>
      <div>HOME</div>
      <Link href={"/login"}>Go to Login</Link>
    </>
  );
};

export default page;
