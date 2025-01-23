export default function AvatarPlayer({ isLoading = false }) {
  return (
    <div
      id="video-container"
      className="relative flex justify-center items-center w-full h-full bg-gradient-to-b from-gray-100 to-gray-200 rounded-2xl shadow-lg overflow-hidden"
    >
      {/* Background layer */}
      <div className="absolute inset-0 bg-black/5"></div>

      {/* Placeholder content */}
      {isLoading ? (
        <div className="flex justify-center items-center w-full h-full">
          {/* Placeholder (you can replace with an image, animation, etc.) */}
          <div className="w-32 h-32 bg-gray-300 rounded-full animate-pulse"></div>
        </div>
      ) : (
        <>
          {/* Actual video/audio stream when available */}
          <video 
            id="video"
            className="w-full h-full object-cover"
            autoPlay 
            playsInline
            muted
          ></video>
          <audio 
            id="audio" 
            autoPlay
            className="hidden"
          ></audio>
        </>
      )}

      {/* Bottom overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent"></div>
    </div>
  );
}
