import { Session } from "next-auth";
import { Button } from "./ui/button";

export default function LoadMore({ session }: { session: Session | null }) {
  return (
    <div className="flex items-center justify-center gap-8 mt-10">
      {session ? (
        <Button className="bg-pink-500">Load More</Button>
      ) : (
        <>
          <Button className="px-12 bg-pink-500">Sign up to continue</Button>
          <Button className="text-pink-500" variant="ghost">
            or sign in
          </Button>
        </>
      )}
    </div>
  );
}
