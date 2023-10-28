// import githubApi from "@/api/route";
import { Button } from "@/components/ui/button";
// import { useGithub } from "@/hooks";

const LeftFooter = () => {
  // const avatarBlob = await githubApi();
  // const imgSrc = URL.createObjectURL(avatarBlob);
  return (
    <div className="flex w-1/2 flex-col items-center justify-center gap-x-2 text-center text-muted-foreground hover:text-gray-600 md:ml-auto md:justify-end">
      <Button
        variant={"ghost"}
        size={"sm"}
        className="hover:bg-inherit hover:text-gray-600"
      >
        Developer:
      </Button>
      {/* Create separate components later: */}

      {/* //TODO: show following: only on larger screens */}
      {/* //TODO: Github profile photo with link */}
      {/* //TODO: LinkedIn profile link */}

      <Button variant={"ghost"} size={"sm"} className="hover:bg-inherit">
        <a
          href={"https://github.com/vaibhavc2"}
          className="text-md transition-all hover:border-b-1 hover:border-b-gray-800 hover:pb-1 hover:text-gray-800 md:text-base"
        >
          Vaibhav Chopra
        </a>
      </Button>
    </div>
  );
};
export default LeftFooter;
