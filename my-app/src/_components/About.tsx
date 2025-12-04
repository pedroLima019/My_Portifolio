"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <main id="Sobre" className="flex justify-center w-full p-4">
      <motion.div
        className="bg-[#DBDBDB] container mx-auto p-2 flex flex-col items-center justify-center rounded-2xl shadow-xl lg:flex-row"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.div
          className="text-center p-4 lg:w-[50%] lg:p-7"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-xl mb-2 font-semibold text-[#FF751F] md:text-3xl">
            Um pouco sobre mim
          </h1>

          <p className="text-xs leading-6 text-left md:leading-7 md:text-sm lg:text-xs lg:leading-5.5 lg:text-justify xl:text-sm xl:leading-7">
            Sou desenvolvedor de software em início de carreira, formado como
            Técnico em Desenvolvimento de Sistemas e atualmente cursando
            Bacharelado em Sistemas de Informação.
            <br /> Tenho direcionado meus estudos para o desenvolvimento de
            software Full-Stack, utilizando tecnologias como React.js, Next.js,
            TypeScript , JavaScript, TailwindCSS e Java.
            <br /> Embora ainda não possua experiência profissional, mantenho
            uma rotina de estudos contínua e desenvolvimento de projetos
            pessoais que reforçam minhas habilidades práticas e minha capacidade
            de aprender rapidamente.
            <br />
            Busco minha primeira oportunidade na área para aplicar meus
            conhecimentos, evoluir profissionalmente e contribuir com soluções
            eficientes e de qualidade. Sou movido pela curiosidade, organização
            e vontade de crescer como desenvolvedor, sempre aberto a novos
            desafios e disposto a colaborar em equipe.
          </p>
        </motion.div>

        <motion.div
          className="rounded-full flex justify-center p-4 lg:w-[50%]"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            className="rounded-full shadow-2xl"
            src="/mySelf.jpg"
            alt="Foto Pedro Lima"
            width={500}
            height={500}
          />
        </motion.div>
      </motion.div>
    </main>
  );
};

export default About;
