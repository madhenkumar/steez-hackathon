import { Button } from "~/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card"
import { Calendar, MessageCircle, Clock, Brain, PieChart, Edit3, Award, Sun, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function TherapyLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-teal-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Left side - Image and intro */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Talk to Your Therapist Maya</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Experience compassionate therapy sessions with Maya, your dedicated AI companion for mental wellness and
              personal growth.
            </p>
            <ul className="space-y-3 my-8">
              <li className="flex items-center gap-2 text-gray-600">
                <Brain className="h-5 w-5 text-teal-600" />
                <span>Empathetic AI therapist</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <Clock className="h-5 w-5 text-teal-600" />
                <span>Real-time Call Support</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <MessageCircle className="h-5 w-5 text-teal-600" />
                <span>Judgment-free Conversations</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <PieChart className="h-5 w-5 text-teal-600" />
                <span>Progress Tracking with Insights</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <Edit3 className="h-5 w-5 text-teal-600" />
                <span>Guided Journaling for Self-Reflection</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <Award className="h-5 w-5 text-teal-600" />
                <span>Gamification for Emotional Wellness</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <Sun className="h-5 w-5 text-teal-600" />
                <span>Mood-based UI Customization</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <AlertCircle className="h-5 w-5 text-teal-600" />
                <span>Crisis Detection and Assistance</span>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/chat">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Start Session
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Call
              </Button>
            </div>
          </div>

          {/* Right side - Maya's profile */}
          <Card className="border-2 border-teal-100">
            <CardHeader className="text-center">
              <div className="mx-auto rounded-full overflow-hidden w-48 h-48 mb-6">
                <img
                  src="anamface.png"
                  alt="Maya - AI Therapist"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardTitle className="text-2xl">Maya</CardTitle>
              <CardDescription className="text-lg">AI Therapy Companion</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4 rounded-lg bg-muted/50">
                  <p className="font-medium text-2xl">2000+</p>
                  <p className="text-sm text-muted-foreground">Sessions Completed</p>
                </div>
                <div className="p-4 rounded-lg bg-muted/50">
                  <p className="font-medium text-2xl">24/7</p>
                  <p className="text-sm text-muted-foreground">Availability</p>
                </div>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-600">
                  <Clock className="h-5 w-5 text-teal-600" />
                  <span>Instant responses, no waiting</span>
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <MessageCircle className="h-5 w-5 text-teal-600" />
                  <span>Judgment-free conversations</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="justify-center text-sm text-muted-foreground">
              <p className="max-w-sm text-center">
                Note: Maya is an AI companion and not a replacement for professional mental health support.
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

