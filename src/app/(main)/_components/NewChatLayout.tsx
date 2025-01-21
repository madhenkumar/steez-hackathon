import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { Button } from "~/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { ScrollArea } from "~/components/ui/scroll-area"
import { MessageCircle, Send } from "lucide-react"

export default function ChatLayout() {
  return (
    <div className="grid h-[calc(100vh-2rem)] gap-4 md:grid-cols-[2fr_1fr] m-4">
      {/* Video Card */}
      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle>Live Stream</CardTitle>
        </CardHeader>
        <CardContent className="flex-1">
          <div className="relative h-full w-full bg-muted rounded-lg overflow-hidden">
            {/* Placeholder for video - in real usage, replace with video component */}
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
              <MessageCircle className="h-12 w-12" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Chat Card */}
      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle>Chat</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
          <ScrollArea className="flex-1 pr-4">
            <div className="space-y-4">
              {/* Chat messages */}
              <div className="flex items-start gap-3">
                <Avatar>
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="font-semibold">John Doe</div>
                    <div className="text-xs text-muted-foreground">5m ago</div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    This is really cool! How did you do that transition?
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Avatar>
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="font-semibold">Jane Smith</div>
                    <div className="text-xs text-muted-foreground">3m ago</div>
                  </div>
                  <div className="text-sm text-muted-foreground">The lighting in this scene is perfect 👌</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Avatar>
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>RJ</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="font-semibold">Robert Johnson</div>
                    <div className="text-xs text-muted-foreground">Just now</div>
                  </div>
                  <div className="text-sm text-muted-foreground">Can you show us how to achieve that effect?</div>
                </div>
              </div>
            </div>
          </ScrollArea>

          {/* Chat input */}
          <div className="flex items-center gap-2 mt-4">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 text-sm bg-muted/50 rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <Button size="icon">
              <Send className="h-4 w-4" />
              <span className="sr-only">Send message</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

