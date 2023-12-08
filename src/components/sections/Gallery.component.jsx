import { images } from "../../resource/images";

export default function Gallery() {
  return (
    <div className="flex justify-center" id="gallery">
      <main className="w-full min-h-screen max-w-[80rem] flex flex-col items-center py-14">
        <h1 className="text-4xl font-semibold text-indigo-500 uppercase mb-4">
          Mi Galeria
        </h1>

        <div className="sec-gallery">
          {images.map((img) => {
            return (
              <div className="pics p-2" key={img.id}>
                <img
                  className="w-full rounded-lg h-auto object-cover hover:scale-105 transition-all duration-300 bg-bottom hover:border-2 hover:border-indigo-500"
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
