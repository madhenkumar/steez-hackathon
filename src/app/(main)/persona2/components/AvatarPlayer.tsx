"use client"
export default function AvatarPlayer() {
  return (
    <div
      id="video-container" 
      className="relative flex justify-center items-center w-full h-full bg-gradient-to-b from-gray-100 to-gray-200 rounded-2xl shadow-lg overflow-hidden"
    >
      {/* Overlay effect */}
      <div className="absolute inset-0 bg-black/5"></div>
      
      {/* Video and audio elements */}
      <video
        id="video"
        className="w-full h-full object-cover"
        autoPlay
        playsInline
        muted
      />
      <audio 
        id="audio" 
        autoPlay
        className="hidden"
      />
      
      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent"></div>
    </div>
  );
}
