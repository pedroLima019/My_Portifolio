import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full flex justify-center mt-3 px-4">
      <nav
        className="container mx-auto
        bg-[#D7D7D7]  
        rounded-lg 
        p-3 
        flex justify-between items-center
        shadow-xl"
      >
        <div>
          <Image
            src="/Logo.png"
            width={40}
            height={4.0}
            alt="Logo Pedro Lima"
          />
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="text-xl">
              <MenuIcon
                className="text-[#FF751F] w-6! h-6!"
                strokeWidth={2.5}
              />
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className="border-0  bg-[#D7D7D7] w-full ">
            <SheetHeader className="w-full ">
              <SheetTitle className="">
                <Image
                  src="/Logo.png"
                  width={40}
                  height={40}
                  alt="Logo Pedro Lima"
                />
              </SheetTitle>
            </SheetHeader>

            <div className="p-2">
              <ul className="flex flex-col gap-8 p-5 text-[#FF751F] ">
                <li className="font-medium">
                  <Link href="/">Home</Link>
                </li>
                <li className="font-medium">
                  <Link href="/">Quem sou ?</Link>
                </li>
                <li className="font-medium">
                  <Link href="/">Minhas Stacks</Link>
                </li>
                <li className="font-medium">
                  <Link href="/">Minha Trajetória</Link>
                </li>
                <li className="font-medium">
                  <Link href="/">Meus Projetos</Link>
                </li>
              </ul>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Navbar;
