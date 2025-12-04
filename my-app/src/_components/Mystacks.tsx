"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Mystacks = () => {
  return (
    <section id="Stack" className="flex justify-center w-full p-4">
      <motion.div
        className="bg-[#FF751F] container mx-auto p-4 gap-1 flex flex-col items-center justify-center rounded-2xl shadow-xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* TÍTULO */}
        <motion.div
          className="text-center p-4 lg:w-[50%]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h1 className="text-white text-xl font-semibold mb-2 md:text-3xl">
            Minhas Stacks
          </h1>
          <p className="text-xs text-center text-white font-extralight md:text-sm">
            Linguagens e frameworks que utilizo e estudo atualmente
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="flex flex-col gap-2 md:flex-row">
          {/* CARD FRONT-END */}
          <motion.div
            className="bg-white w-60 h-auto rounded-2xl p-2.5 md:w-80 lg:w-100"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col gap-3 p-2.5">
              <h3 className="text-sm font-extrabold">Front-end</h3>

              <div className="flex flex-wrap w-full gap-5 justify-center">
                {[
                  "/JS.png",
                  "/tailwindCSS.png",
                  "/React.png",
                  "/Next.png",
                  "/CSS.png",
                  "/Html.png",
                ].map((src, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <Image
                      src={src}
                      alt={src}
                      width={35}
                      height={35}
                      className="lg:w-12 lg:h-12"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CARD BACKEND */}
          <motion.div
            className="bg-white w-60 h-auto rounded-2xl p-2.5 md:w-80 lg:w-100"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col gap-3 p-2.5">
              <h3 className="text-sm font-extrabold">Backend</h3>

              <div className="flex flex-wrap w-full gap-5 p-2.5 justify-center">
                {[
                  "/Node.png",
                  "/typeScript.png",
                  "/Java.png",
                  "/PostgreSql.png",
                  "/Prisma.png",
                ].map((src, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <Image
                      src={src}
                      alt={src}
                      width={35}
                      height={35}
                      className="lg:w-12 lg:h-12"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Mystacks;
