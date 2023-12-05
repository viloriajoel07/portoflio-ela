import image from "../../assets/profile.png";

export default function Home() {
  return (
    <main className="w-full z-10 h-[calc(100vh-80px)] flex items-center relative">
      <div className="w-full h-full">
        <img src={image} alt="" className="object-cover h-full" />
      </div>
      <section className="text-white w-full flex flex-col justify-center z-10 items-center md:items-start absolute md:relative px-8 md:px-0 bg-gradient-to-tr from-black h-full">
        <span className="w-12 h-12 rounded-full bg-indigo-500 absolute blur-2xl "></span>
        <p className="text-indigo-200 uppercase w-fit mb-6 border-b border-indigo-200">
          Fotografa Freelance
        </p>
        <h2 className="text-indigo-500 font-bold text-4xl mb-2 md:text-start text-center">
          ELADIA BARRAZA
        </h2>
        <p className="pb-8 max-w-lg text-center md:text-start">
          Soy una fotógrafa apasionada por capturar momentos auténticos, busco
          contar historias a través de la belleza de la fotografía.
        </p>
        <section className="flex gap-2">
          <a
            href="#gallery"
            className="text-indigo-400 border whitespace-nowrap flex items-center w-fit px-6 py-2 rounded-full border-indigo-400 gap-3"
          >
            Ver Galeria
          </a>
        </section>
      </section>
    </main>
  );
}
