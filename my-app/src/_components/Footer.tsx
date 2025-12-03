import { GithubIcon, LinkedinIcon, Mail, Phone } from "lucide-react";

import Link from "next/link";

const Footer = () => {
  const telefone = "+5511999999999";
  const mensagem = "Olá, Pedro ! Vim pelo seu portifólio";
  return (
    <footer className="flex justify-center w-full p-4">
      <div className="container mx-auto p-4 flex flex-col items-center gap-4 bg-[#181818] rounded-2xl shadow-xl ">
        <h3 className="text-center text-white text-xl">Minhas redes sociais</h3>

        <div className="flex w-full  justify-center space-x-6 p-4">
          <Link href="https://github.com/pedroLima019">
            <GithubIcon className="text-white " />
          </Link>
          <Link href="https://www.linkedin.com/in/pedrohenrilima/">
            <LinkedinIcon className="text-white" />
          </Link>
          <Link href="pedroliveiralima21@gmail.com">
            <Mail className="text-white" />
          </Link>
          <Link
            href={`https://wa.me/${telefone}?text=${encodeURIComponent(
              mensagem
            )}`}
          >
            <Phone className="text-white" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
