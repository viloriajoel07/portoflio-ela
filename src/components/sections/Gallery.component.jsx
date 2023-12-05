import { images } from "../../resource/images";

export default function Gallery() {
  return (
    <div className="flex justify-center" id="gallery">
      <main className="w-full min-h-screen max-w-[80rem] flex flex-col items-center py-14">
        <h1 className="text-4xl font-semibold text-indigo-500 uppercase">
          Mi Galeria
        </h1>

        <div className="mt-6 flex flex-wrap justify-center gap-6 px-8 md:px-0">
          {images.map((img) => {
            return (
              <div
                key={img.id}
                className="cursor-pointer flex items-center overflow-hidden rounded-lg shadow-lg relative w-full md:w-80 h-auto md:h-64 border-2 border-white/10"
              >
                <img
                  className="w-full h-auto object-cover hover:scale-110 transition-all duration-300 bg-bottom"
                  src={img.imageSrc}
                  alt="Garelly Item"
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
