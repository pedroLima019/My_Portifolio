import Image from "next/image";

const Mystacks = () => {
  return (
    <section className="flex justify-center w-full p-4">
      <div className="bg-[#FF751F] container mx-auto p-4 gap-1 flex flex-col items-center justify-center rounded-2xl shadow-xl ">
        <div className="text-center p-4 lg:w-[50%] ">
          <h1 className="text-white text-xl font-semibold mb-2 md:text-3xl">
            Minhas Stacks
          </h1>
          <p className="text-xs text-center text-white font-extralight md:text-sm">
            Linguagens e frameworks que utilizo e estudo atualmente
          </p>
        </div>
        <div className="flex flex-col gap-2 md:flex-row  ">
          <div className="bg-white w-60 h-auto rounded-2xl p-2.5 md:w-80 lg:w-100 ">
            <div className="flex flex-col gap-3 p-2.5">
              <h3 className="text-sm font-extrabold">Front-end</h3>
              <div className="flex flex-wrap w-full gap-5 ">
                <Image
                  src="/JS.png"
                  alt="Logo javasccript"
                  width={35}
                  height={35}
                  className=" lg:w-12 lg:h-12"
                />
                <Image
                  src="/tailwindCSS.png"
                  alt="Logo tailwindCSS"
                  width={35}
                  height={35}
                  className=" lg:w-12 lg:h-12"
                />
                <Image
                  src="/React.png"
                  alt="Logo React.js"
                  width={35}
                  height={35}
                  className=" lg:w-12 lg:h-12"
                />
                <Image
                  src="/Next.png"
                  alt="Logo Next.js"
                  width={35}
                  height={35}
                  className=" lg:w-12 lg:h-12"
                />
                <Image
                  src="/CSS.png"
                  alt="Logo CSS"
                  width={35}
                  height={35}
                  className=" lg:w-12 lg:h-12"
                />
                <Image
                  src="/Html.png"
                  alt="Logo Html"
                  width={35}
                  height={35}
                  className=" lg:w-12 lg:h-12"
                />
              </div>
            </div>
          </div>
          <div className="bg-white w-60 h-auto rounded-2xl p-2.5  md:w-80 lg:w-100 ">
            <div className="flex flex-col  justify-center gap-3 p-2.5">
              <h3 className="text-sm font-extrabold">Backend</h3>
              <div className="flex flex-wrap w-full gap-5 p-2.5 ">
                <Image
                  src="/Node.png"
                  alt="Logo javasccript"
                  width={35}
                  height={35}
                  className=" lg:w-12 lg:h-12"
                />
                <Image
                  src="/typeScript.png"
                  alt="Logo tailwindCSS"
                  width={35}
                  height={35}
                  className=" lg:w-12 lg:h-12"
                />
                <Image
                  src="/java.png"
                  alt="Logo React.js"
                  width={35}
                  height={35}
                  className=" lg:w-12 lg:h-12"
                />
                <Image
                  src="/PostgreSql.png"
                  alt="Logo CSS"
                  width={35}
                  height={35}
                  className=" lg:w-12 lg:h-12"
                />
                <Image
                  src="/Prisma.png"
                  alt="Logo Html"
                  width={35}
                  height={35}
                  className=" lg:w-12 lg:h-12"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mystacks;
