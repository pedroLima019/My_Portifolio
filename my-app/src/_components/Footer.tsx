"use client";

import { GithubIcon, LinkedinIcon, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  const telefone = "+5511999999999";
  const mensagem = "Olá, Pedro ! Vim pelo seu portifólio";

  return (
    <footer id="SocialMedia" className="flex justify-center w-full p-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="container mx-auto p-4 flex flex-col items-center gap-4 bg-[#1E1E1E] rounded-2xl shadow-xl"
      >
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-white text-xl"
        >
          Minhas redes sociais
        </motion.h3>

        <motion.div
          className="flex w-full justify-center space-x-6 p-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.2 },
            },
          }}
        >
          {[
            {
              href: "https://github.com/pedroLima019",
              icon: <GithubIcon className="text-white" />,
            },
            {
              href: "https://www.linkedin.com/in/pedrohenrilima/",
              icon: <LinkedinIcon className="text-white" />,
            },
            {
              href: "mailto:pedroliveiralima21@gmail.com",
              icon: <Mail className="text-white" />,
            },
            {
              href: `https://wa.me/${telefone}?text=${encodeURIComponent(
                mensagem
              )}`,
              icon: <Phone className="text-white" />,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: "easeOut" },
                },
              }}
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
            >
              <Link href={item.href}>{item.icon}</Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
