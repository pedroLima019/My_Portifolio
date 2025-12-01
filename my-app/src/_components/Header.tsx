import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-center w-full p-4">
      <div className="bg-[#FF751F] shadow-2xl container  mx-auto p-2 flex flex-col items-center justify-center rounded-2xl gap-1 md:flex-row md:p-4">
        <div className="flex w-50 h-50 relative justify-center shadow-2xl rounded-full items-center p-2 md:w-70 md:h-70 md:mr-3  lg:mr-6 xl:mr-10  ">
          <Image
            src="/mySelf.jpg"
            fill
            alt="Foto Pedro Lima "
            className="rounded-full"
          ></Image>
        </div>
        <div className="p-2 text-center flex flex-col items-center justify-center gap-3 md:items-start md:gap-6  ">
          <h1 className="text-white text-sm md:text-xl  md:text-start lg:text-3xl">
            Olá , sou Pedro Lima. <br />
            Desenvolvedor de Software.
          </h1>
          <Link
            href="/"
            className="bg-white p-1.5 text-xs rounded-lg font-semibold w-[200px] lg:text-sm hover:bg-black hover:text-[#FF751F] transition-all duration-300"
          >
            Venha me conhecer
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
