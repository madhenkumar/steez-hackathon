import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { MessageCircle } from 'lucide-react'

export function VideoCard() {
  return (
    <Card className="flex flex-col h-full">
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
  )
}
