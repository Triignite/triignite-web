import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, Target, Users, Rocket } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - Triignite",
  description:
    "Learn about Triignite's mission to craft and build apps people use, love, and remember. Discover our story, values, and vision.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Triignite</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're passionate about creating mobile applications that don't just function – they inspire, engage, and
            leave lasting impressions on users worldwide.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-20">
          <Card className="max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <Target className="h-12 w-12 mx-auto mb-4 text-primary" />
              <CardTitle className="text-3xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Triignite, our mission is simple yet profound: to craft and build apps that people don't just use,
                but genuinely love and remember. We believe that great apps have the power to transform daily
                experiences, solve real problems, and create meaningful connections between technology and humanity.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Lightbulb className="h-10 w-10 mx-auto mb-3 text-primary" />
                <CardTitle className="text-xl">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We constantly push boundaries and explore new possibilities to create unique solutions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-10 w-10 mx-auto mb-3 text-primary" />
                <CardTitle className="text-xl">User-Centric</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Every decision we make is guided by what's best for the user experience.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Rocket className="h-10 w-10 mx-auto mb-3 text-primary" />
                <CardTitle className="text-xl">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We strive for perfection in every line of code and every pixel of design.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Target className="h-10 w-10 mx-auto mb-3 text-primary" />
                <CardTitle className="text-xl">Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We measure success by the positive impact our apps have on users' lives.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Story Section */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
            <Card>
              <CardContent className="p-8">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Triignite was born from a simple observation: the app stores are filled with applications, but very
                    few create lasting impressions. We noticed that while many apps solve problems, only a select few
                    become part of users' daily lives in a meaningful way.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Our journey began with a commitment to change this narrative. We don't just want to add another app
                    to the store – we want to create digital experiences that users genuinely love and remember long
                    after they've closed the app.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Starting with our Paraphraser Tool, we've focused on combining powerful functionality with intuitive
                    design. Every app we build reflects our core belief that technology should enhance human capability
                    while remaining beautifully simple to use.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Approach Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Research & Understanding</h3>
              <p className="text-muted-foreground">
                We deeply understand user needs and market gaps before we start building.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Design & Develop</h3>
              <p className="text-muted-foreground">
                We craft beautiful, intuitive interfaces backed by robust, scalable technology.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Launch & Scale</h3>
              <p className="text-muted-foreground">
                We launch strategically and continuously improve based on user feedback.
              </p>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Technologies We Love</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            <Badge variant="secondary">Swift</Badge>
            <Badge variant="secondary">SwiftUI</Badge>
            <Badge variant="secondary">iOS Development</Badge>
            <Badge variant="secondary">React Native</Badge>
            <Badge variant="secondary">Node.js</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="secondary">Next.js</Badge>
            <Badge variant="secondary">UI/UX Design</Badge>
            <Badge variant="secondary">App Store Optimization</Badge>
          </div>
        </div>
      </div>
    </div>
  )
}
