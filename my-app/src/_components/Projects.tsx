"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const items = [
  {
    img: "/",
    title: "Projeto 01",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "/",
  },
  {
    img: "/",
    title: "Projeto 02",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "/",
  },
  {
    img: "/",
    title: "Projeto 03",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "/",
  },
  {
    img: "/",
    title: "Projeto 04",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "/",
  },
];

const Projects = () => {
  return (
    <section id="Projetos" className="flex justify-center p-4 w-full">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="container mx-auto flex justify-center bg-[#FF751F] p-4 flex-col items-center gap-6 rounded-2xl shadow-xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h1 className="text-white text-xl mb-2 font-semibold md:text-3xl">
            Meus projetos
          </h1>
          <p className="text-xs font-extralight md:text-sm text-white">
            alguns projetos que estou trabalhando e trabalhei
          </p>
        </motion.div>

        <Carousel
          opts={{
            loop: true,
          }}
          className="w-full max-w-xl md:max-w-3xl xl:max-w-6xl"
        >
          <CarouselContent className="p-3">
            {items.map((item, index) => (
              <CarouselItem
                key={index}
                className="basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className="bg-zinc-800 rounded-3xl p-4 text-white flex flex-col items-center gap-2 shadow-lg"
                >
                  <Image
                    src={item.img}
                    width={100}
                    height={100}
                    alt={item.title}
                  />
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm text-center opacity-80">{item.desc}</p>

                  <Link
                    href={item.link}
                    className="text-[#FF751F] bg-white w-[150px] text-sm mt-2.5 rounded-lg p-1 flex justify-center hover:bg-black hover:text-[#FF751F] duration-300 transition-all"
                  >
                    Ver mais
                  </Link>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden lg:flex bg-white border-0" />
          <CarouselNext className="hidden lg:flex bg-white border-0" />
        </Carousel>
      </motion.div>
    </section>
  );
};
export default Projects;
