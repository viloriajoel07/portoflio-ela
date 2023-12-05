import { Icon } from "@iconify/react";

export default function Header() {
  return (
    <header className=" w-full flex top-0 z-0 justify-center h-24 md:h-20 items-center px-8">
      <div className="flex flex-col gap-2 md:flex-row justify-between items-center max-w-[80rem] w-full">
        <div className="flex gap-3 items-center">
          <Icon
            icon="ic:outline-camera"
            className=" w-8 h-8 rounded-full bg-indigo-600 text-white p-1"
          />
          <a href="#home" className="font-bold text-2xl">
            Eladia Barraza
          </a>
        </div>
        <nav className="flex flex-grow justify-end items-center">
          <ul className="flex gap-4 [&>li>a]:text-indigo-100 hover:[&>li]:scale-110 [&>li]:transition-all">
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="#gallery">Galería</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
