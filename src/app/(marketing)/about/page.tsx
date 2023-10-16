import Link from "next/link";

type Props = {};
const About = ({}: Props) => {
  return (
    <>
      <div>About Page</div>
      <Link href={"/"}>Go to Home</Link>
    </>
  );
};
export default About;
