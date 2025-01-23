"use client"
import { useState } from "react"
import { Button } from "~/components/ui/button"
import { Card } from "~/components/ui/card"
import { Slider } from "~/components/ui/slider"
import { Leaf, Volume2, VolumeX, Maximize2, Minimize2, RefreshCw } from "lucide-react"
import AvatarPlayer from "./AvatarPlayer"

export default function NaturalAvatarPage() {
  const [isMuted, setIsMuted] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [volume, setVolume] = useState(50)

  const toggleMute = () => setIsMuted(!isMuted)

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    } else {
      await document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 p-6 md:p-12">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center gap-3">
          <Leaf className="w-8 h-8 text-green-600" />
          <h1 className="text-2xl font-semibold text-green-900">Natural Avatar</h1>
        </div>

        {/* Main Content */}
        <Card className="overflow-hidden bg-white/80 backdrop-blur-sm border-green-100">
          <div className="aspect-video relative">
            <AvatarPlayer />    

            {/* Controls Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 transition-opacity hover:opacity-100 focus-within:opacity-100 opacity-80">
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" onClick={toggleMute} className="text-white hover:bg-white/20">
                  {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                </Button>

                <div className="w-32">
                  <Slider
                    value={[volume]}
                    max={100}
                    step={1}
                    className="[&>span]:bg-white"
                    onValueChange={(vals: (number | undefined)[]) => {
                      // Ensure vals[0] is defined before setting the volume
                      if (vals[0] !== undefined) {
                        setVolume(vals[0])
                      }
                    }}
                  />
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => window.location.reload()}
                  className="text-white hover:bg-white/20"
                >
                  <RefreshCw className="h-5 w-5" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleFullscreen}
                  className="ml-auto text-white hover:bg-white/20"
                >
                  {isFullscreen ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Info Panel */}
        <Card className="p-6 bg-white/80 backdrop-blur-sm border-green-100">
          <div className="space-y-4">
            <h2 className="text-lg font-medium text-green-900">About Natural Avatar</h2>
            <p className="text-green-800">
              Experience a natural and uplifting interaction with your digital avatar. This environment is designed to
              create a calming and organic atmosphere that enhances your virtual presence.
            </p>
            <div className="flex gap-2 text-sm text-green-700">
              <span className="px-3 py-1 rounded-full bg-green-100">HD Quality</span>
              <span className="px-3 py-1 rounded-full bg-green-100">Real-time Processing</span>
              <span className="px-3 py-1 rounded-full bg-green-100">Natural Enhancement</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
