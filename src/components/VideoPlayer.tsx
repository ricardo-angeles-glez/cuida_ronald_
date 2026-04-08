import { useState } from "react";
import { Play, Volume2, VolumeX, Maximize } from "lucide-react";

interface Video {
  src: string;
  title: string;
  category: string;
}

interface VideoPlayerProps {
  category: string;
  title?: string;
}

const VIDEOS: { [key: string]: Video[] } = {
  exercises: [
    { src: "/media/videos/exercises/exercise1.mp4", title: "Ejercicio 1", category: "exercises" },
    { src: "/media/videos/exercises/exercise2.mp4", title: "Ejercicio 2", category: "exercises" },
  ],
  onboarding: [
    { src: "/media/videos/onboarding/onboarding1.mp4", title: "Onboarding 1", category: "onboarding" },
    { src: "/media/videos/onboarding/onboarding2.mp4", title: "Onboarding 2", category: "onboarding" },
  ],
  tutorials: [
    { src: "/media/videos/tutorials/tutorial1.mp4", title: "Tutorial 1", category: "tutorials" },
    { src: "/media/videos/tutorials/tutorial2.mp4", title: "Tutorial 2", category: "tutorials" },
  ],
};

interface VideoRef {
  play?: () => Promise<void>;
  pause?: () => void;
  requestFullscreen?: () => Promise<void>;
}

export default function VideoPlayer({ category, title }: VideoPlayerProps) {
  const videos = VIDEOS[category] || [];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  if (videos.length === 0) {
    return null;
  }

  const currentVideo = videos[selectedIndex];

  const handleFullscreen = () => {
    const videoElement = document.getElementById(`video-${category}-${selectedIndex}`) as VideoRef;
    if (videoElement?.requestFullscreen) {
      videoElement.requestFullscreen();
    }
  };

  return (
    <div className="w-full py-8">
      {title && <h2 className="text-2xl font-bold mb-6 text-gray-800">{title}</h2>}

      <div className="space-y-4">
        {/* Video principal */}
        <div className="rounded-lg overflow-hidden bg-black aspect-video relative group">
          <video
            id={`video-${category}-${selectedIndex}`}
            src={currentVideo.src}
            controls
            className="w-full h-full"
            onError={(e) => {
              const target = e.target as HTMLVideoElement;
              target.innerHTML =
                "<p style='color: white; display: flex; align-items: center; justify-content: center; height: 100%; padding: 20px;'>Video no disponible</p>";
            }}
          />

          {/* Controles personalizados */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-colors"
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
            <button
              onClick={handleFullscreen}
              className="bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-colors"
            >
              <Maximize size={20} />
            </button>
          </div>
        </div>

        {/* Información del video */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800">{currentVideo.title}</h3>
          <p className="text-sm text-gray-600">
            Video {selectedIndex + 1} de {videos.length}
          </p>
        </div>

        {/* Lista de videos */}
        {videos.length > 1 && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {videos.map((video, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`p-3 rounded-lg text-left transition-colors ${
                  index === selectedIndex
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Play size={16} />
                  <span className="truncate">{video.title}</span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
