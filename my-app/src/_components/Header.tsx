"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      id="Home"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex  justify-center w-full p-4  "
    >
      <div className="bg-[#FF751F] shadow-xl container mx-auto p-4 flex flex-col items-center justify-center rounded-2xl gap-1 md:flex-row">
        <div className="flex   relative justify-center  rounded-full items-center p-2 md:w-60 md:h-60 md:mr-3 lg:mr-6 lg:w-70 lg:h-70 xl:mr-10">
          <Image
            src="/mySelf.jpg"
            width={300}
            height={300}
            alt="Foto Pedro Lima"
            className="rounded-full shadow-2xl"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="p-2 text-center flex flex-col items-center justify-center gap-3 md:items-start md:gap-6"
        >
          <h1 className="text-white text-xs md:text-xl md:text-start lg:text-3xl lg:leading-10">
            Olá, seja bem-vindo ao meu portfólio. <br /> Sou Pedro Lima,
            Desenvolvedor de Software.
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              href="#Sobre"
              className="bg-white p-1.5 text-xs rounded-lg font-semibold w-[250px] lg:text-sm hover:bg-zinc-800 hover:text-white transition-all duration-300"
            >
              Venha me conhecer
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
