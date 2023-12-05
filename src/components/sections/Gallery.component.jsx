import { images } from "../../resource/images";
import GalleryItem from "../GalleryItem.component";

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
              <GalleryItem
                key={img.id}
                image={img.imageSrc}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}
