import Link from "next/link";

type Props = {};

const page = ({}: Props) => {
  return (
    <>
      <div className="flex justify-between">HOME</div>
      <div className="flex justify-around">
        <Link href={"/login"}>Go to Login</Link>
        <Link href={"/signup"}>Go to SignUp</Link>
        <Link href={"/contact"}>Go to Contact</Link>
        <Link href={"/about"}>Go to About</Link>
      </div>
    </>
  );
};

export default page;
