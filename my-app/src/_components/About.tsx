import Image from "next/image";

const About = () => {
  return (
    <main className=" flex justify-center w-full p-4">
      <div className=" bg-[#DBDBDB]  container mx-auto p-2 flex flex-col items-center justify-center rounded-2xl  shadow-xl  lg:flex-row">
        <div className="text-center p-4 lg:w-[50%] lg:p-7 ">
          <h1 className="text-xl mb-2 font-semibold text-[#FF751F] md:text-3xl ">
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
        </div>
        <div className="rounded-full  flex justify-center p-4 lg:w-[50%]">
          <Image
            className="rounded-full "
            src="/mySelf.jpg"
            alt="Foto Pedro Lima"
            width={500}
            height={500}
          ></Image>
        </div>
      </div>
    </main>
  );
};

export default About;
