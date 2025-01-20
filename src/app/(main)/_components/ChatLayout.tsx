"use client"

import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { ScrollArea } from "~/components/ui/scroll-area"
import { Smile } from "lucide-react"

export default function VideoChat() {
  return (
    <div className="container mx-auto p-4 space-y-4">
      <div className="grid lg:grid-cols-3 gap-4">
        {/* Video Feed Card */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Video Feed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground">Video Feed Placeholder</span>
            </div>
          </CardContent>
        </Card>

        {/* Chat Card */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Chat</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[60vh]">
              <div className="space-y-4">
                {/* Chat messages will go here */}
                <div className="text-muted-foreground text-center">Chat messages will appear here</div>
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>

      {/* Mood Card */}
      <Card>
        <CardHeader>
          <CardTitle>Current Mood</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
              <Smile className="w-8 h-8 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-semibold">Happy</p>
              <p className="text-muted-foreground">User appears to be in a positive mood</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-primary w-3/4 h-2 rounded-full" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

