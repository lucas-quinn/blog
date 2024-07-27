import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="text-center">
        Work in progress. Check out my GitHub page.
        <div></div>
        <Button asChild>
          <Link href="https://github.com/lucas-j-quinn/website">GitHub</Link>
        </Button>
      </div>
    </main>
  );
}
