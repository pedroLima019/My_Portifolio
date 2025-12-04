"use client";

import { motion } from "framer-motion";

const Myroad = () => {
  return (
    <section id="Trajetoria" className="flex justify-center w-full p-4">
      <motion.div
        className="container mx-auto p-4 flex flex-col items-center gap-4 bg-[#DBDBDB] rounded-2xl shadow-xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* TÍTULO */}
        <motion.div
          className="text-center py-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h1 className="text-[#FF751F] text-xl mb-2 font-semibold md:text-3xl">
            Minha Trajetória
          </h1>
          <p className="text-xs font-extralight md:text-sm">
            Um pouco da minha trajetória até o momento
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative w-full max-w-4xl">
          {/* Linha central desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[3px] bg-zinc-400 -translate-x-1/2"></div>

          {/* Linha lateral mobile */}
          <div className="md:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-zinc-400"></div>

          <div className="flex flex-col gap-10">
            {/* ITEM 1 */}
            <motion.div
              className="md:flex md:justify-start w-full relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#FF751F] rounded-full"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              />

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
            </motion.div>

            {/* ITEM 2 */}
            <motion.div
              className="md:flex md:justify-end w-full relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#FF751F] rounded-full"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
              />

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
            </motion.div>

            {/* ITEM 3 */}
            <motion.div
              className="md:flex md:justify-start w-full relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#FF751F] rounded-full"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.4, type: "spring" }}
              />

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
            </motion.div>

            {/* ITEM 4 */}
            <motion.div
              className="md:flex md:justify-end w-full relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#FF751F] rounded-full"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
              />

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
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Myroad;
