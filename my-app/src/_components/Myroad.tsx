const Myroad = () => {
  return (
    <section className="flex justify-center w-full p-4">
      <div className="container mx-auto p-4 flex flex-col items-center gap-4 bg-[#DBDBDB] rounded-2xl shadow-xl">
        <div className="text-center  py-4">
          <h1 className="text-[#FF751F] text-xl mb-2 font-semibold md:text-3xl">
            Minha Trajetória
          </h1>
          <p className="text-xs font-extralight md:text-sm">
            Um pouco da minha trajetória até o momento
          </p>
        </div>

        <div className="relative w-full max-w-4xl">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[3px] bg-zinc-400 -translate-x-1/2"></div>
          <div className="md:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-zinc-400"></div>

          <div className="flex flex-col gap-10">
            <div className="md:flex md:justify-start w-full relative">
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#FF751F] rounded-full"></div>

              <div className="md:w-1/2 md:pr-10">
                <div className="border-l md:border-none p-4 bg-zinc-800 text-white rounded-xl">
                  <h3 className="text-sm font-semibold">
                    Buscando minha oportunidade como Desenvolvedor
                    (estágio/júnior)
                  </h3>
                  <p className="text-xs font-extralight mt-1">
                    (Dez de 2024 - até o momento)
                  </p>
                  <p className="text-[10px] mt-2 leading-5">
                    Sou um desenvolvedor em formação, apaixonado por tecnologia
                    e pela construção de soluções. Busco minha primeira
                    oportunidade profissional enquanto estudo e pratico
                    diariamente.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:flex md:justify-end w-full relative">
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#FF751F] rounded-full"></div>

              <div className="md:w-1/2 md:pl-10">
                <div className="border-l md:border-none p-4 bg-zinc-800 text-white rounded-xl">
                  <h3 className="text-sm font-semibold">
                    Além da Faculdade venho estudando por fora…
                  </h3>
                  <p className="text-xs font-extralight mt-1">
                    (Fev de 2022 - até o momento)
                  </p>
                  <p className="text-[10px] mt-2 leading-5">
                    Estudo continuamente linguagens e ferramentas essenciais ao
                    desenvolvimento de software:
                    <br />
                    <br />
                    <strong>
                      JavaScript • React.js • Next.js • TypeScript • Node.js •
                      TailwindCSS • Prisma ORM • PostgreSQL/SQL • Java
                    </strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="md:flex md:justify-start w-full relative">
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#FF751F] rounded-full"></div>

              <div className="md:w-1/2 md:pr-10">
                <div className="border-l md:border-none p-4 bg-zinc-800 text-white rounded-xl">
                  <h3 className="text-sm font-semibold">
                    Comecei minha graduação em Sistemas de Informação
                  </h3>
                  <p className="text-xs font-thin mt-1">
                    (Out de 2024 - Out de 2028)
                  </p>
                  <p className="text-[10px] mt-2 leading-5">
                    Formação voltada a compreender, projetar e desenvolver
                    sistemas que atendam às necessidades organizacionais com
                    eficiência e inovação.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:flex md:justify-end w-full relative">
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#FF751F] rounded-full"></div>

              <div className="md:w-1/2 md:pl-10">
                <div className="border-l md:border-none p-4 bg-zinc-800 text-white rounded-xl">
                  <h3 className="text-sm font-semibold">
                    Cursei Técnico em Desenvolvimento de Sistemas
                  </h3>
                  <p className="text-xs font-thin mt-1">
                    (Dez 2022 - Set 2024)
                  </p>

                  <p className="text-[10px] mt-2 leading-5">
                    Desenvolvi habilidades em criação de sistemas, modelagem de
                    bancos de dados, administração de servidores e fundamentos
                    de UX/UI.
                  </p>

                  <h4 className="text-sm font-semibold mt-3">Habilidades:</h4>
                  <ul className="text-[10px] leading-5 list-disc px-5">
                    <li>Desenvolvimento de sistemas</li>
                    <li>Modelagem de banco de dados</li>
                    <li>Administração de servidores</li>
                    <li>Algoritmos e POO</li>
                    <li>UX/UI para web, desktop e mobile</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Myroad;
