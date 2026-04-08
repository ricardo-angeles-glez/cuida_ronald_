import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface Image {
  src: string;
  alt: string;
  category: string;
}

interface MediaGalleryProps {
  category: string;
  title?: string;
}

const IMAGES: { [key: string]: Image[] } = {
  donations: [
    { src: "/media/images/donations/donation1.jpg", alt: "Donación 1", category: "donations" },
    { src: "/media/images/donations/donation2.jpg", alt: "Donación 2", category: "donations" },
    { src: "/media/images/donations/donation3.jpg", alt: "Donación 3", category: "donations" },
  ],
  exercises: [
    { src: "/media/images/exercises/exercise1.jpg", alt: "Ejercicio 1", category: "exercises" },
    { src: "/media/images/exercises/exercise2.jpg", alt: "Ejercicio 2", category: "exercises" },
    { src: "/media/images/exercises/exercise3.jpg", alt: "Ejercicio 3", category: "exercises" },
  ],
  families: [
    { src: "/media/images/families/family1.jpg", alt: "Familia 1", category: "families" },
    { src: "/media/images/families/family2.jpg", alt: "Familia 2", category: "families" },
  ],
  guides: [
    { src: "/media/images/guides/guide1.jpg", alt: "Guía 1", category: "guides" },
    { src: "/media/images/guides/guide2.jpg", alt: "Guía 2", category: "guides" },
  ],
  heroes: [
    { src: "/media/images/heroes/hero1.jpg", alt: "Héroe 1", category: "heroes" },
    { src: "/media/images/heroes/hero2.jpg", alt: "Héroe 2", category: "heroes" },
  ],
  hospitals: [
    { src: "/media/images/hospitals/hospital1.jpg", alt: "Hospital 1", category: "hospitals" },
    { src: "/media/images/hospitals/hospital2.jpg", alt: "Hospital 2", category: "hospitals" },
  ],
  houses: [
    { src: "/media/images/houses/house1.jpg", alt: "Casa 1", category: "houses" },
    { src: "/media/images/houses/house2.jpg", alt: "Casa 2", category: "houses" },
  ],
  ui: [
    { src: "/media/images/ui/ui1.jpg", alt: "UI 1", category: "ui" },
    { src: "/media/images/ui/ui2.jpg", alt: "UI 2", category: "ui" },
  ],
};

export default function MediaGallery({ category, title }: MediaGalleryProps) {
  const images = IMAGES[category] || [];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (images.length === 0) {
    return null;
  }

  const goToPrevious = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full py-8">
      {title && <h2 className="text-2xl font-bold mb-6 text-gray-800">{title}</h2>}

      {/* Galería de miniaturas */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => {
              setSelectedIndex(index);
              setIsLightboxOpen(true);
            }}
            className="relative aspect-video rounded-lg overflow-hidden hover:opacity-75 transition-opacity cursor-pointer border-2 border-transparent hover:border-blue-500"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23f0f0f0' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='16' fill='%23999' text-anchor='middle' dy='.3em'%3EImagen no disponible%3C/text%3E%3C/svg%3E";
              }}
            />
          </button>
        ))}
      </div>

      {/* Galería ampliada */}
      <div className="rounded-lg overflow-hidden bg-gray-900 aspect-video relative">
        <img
          src={images[selectedIndex].src}
          alt={images[selectedIndex].alt}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23222' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='16' fill='%23999' text-anchor='middle' dy='.3em'%3EImagen no disponible%3C/text%3E%3C/svg%3E";
          }}
        />

        {/* Controles de navegación */}
        <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 hover:opacity-100 transition-opacity bg-black/30 hover:bg-black/50">
          <button
            onClick={goToPrevious}
            className="bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className="bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Indicador de página */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {selectedIndex + 1} / {images.length}
        </div>
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full max-h-[90vh]">
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/75 p-2 rounded-full"
            >
              <X size={24} />
            </button>

            <img
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              className="w-full h-full object-contain"
            />

            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <button
                onClick={goToPrevious}
                className="bg-white/30 hover:bg-white/50 text-white p-3 rounded-full transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
            </div>

            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <button
                onClick={goToNext}
                className="bg-white/30 hover:bg-white/50 text-white p-3 rounded-full transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full">
              {selectedIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
