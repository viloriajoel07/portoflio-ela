const GalleryItem = ({ image }) => {
  return (
    <div className="cursor-pointer flex items-center overflow-hidden rounded-lg shadow-lg relative w-full md:w-80 h-auto md:h-64 border-2 border-white/10">
      <img
        className="w-full h-auto object-cover hover:scale-110 transition-all duration-300 bg-bottom"
        src={image ?? ""}
        alt="Garelly Item"
        loading="lazy"
      />
    </div>
  );
};

export default GalleryItem;
