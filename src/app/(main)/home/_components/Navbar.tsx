import Link from "next/link"
import { Button } from "~/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "~/components/ui/navigation-menu"
import { Brain, Calendar, Heart, HelpCircle, Home, MessageCircle, User } from "lucide-react"

export function Navbar() {
  return (
        <div className=" p-2 sticky top-0 z-50 w-full border-b bg-rose-50 backdrop-blur">
      <div className="container flex h-16 items-center">
        <div className="ml-8 mr-8 flex items-center space-x-2">
          {/* <Heart className="h-6 w-6 text-teal-600" /> */}
          <span className="text-2xl font-bold text-black">Maya Therapy</span>
        </div>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {/* <NavigationMenuItem>
              <Link href="#" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  <Home className="mr-2 h-4 w-4" />
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem> */}

            {/* <NavigationMenuItem>
              <NavigationMenuTrigger>
                <MessageCircle className="mr-2 h-4 w-4" />
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-rose-50 to-teal-50 p-6 no-underline outline-none focus:shadow-md"
                        href="#"
                      >
                        <Brain className="h-6 w-6 text-teal-600" />
                        <div className="mb-2 mt-4 text-lg font-medium">AI Therapy Sessions</div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Experience personalized therapy sessions with Maya, available 24/7.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="#"
                      >
                        <div className="text-sm font-medium leading-none">Individual Therapy</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          One-on-one sessions tailored to your needs
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="#"
                      >
                        <div className="text-sm font-medium leading-none">Group Sessions</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Connect with others in guided group therapy
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem> */}
{/* 
            <NavigationMenuItem>
              <Link href="#" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  <HelpCircle className="mr-2 h-4 w-4" />
                  Resources
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem> */}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="ml-auto flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="hidden md:flex">
            <Calendar className="mr-2 h-4 w-4" />
            Schedule
          </Button>
          <Button variant="ghost" size="sm" className="hidden md:flex">
            <User className="mr-2 h-4 w-4" />
            Sign in
          </Button>
          <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  )
}

