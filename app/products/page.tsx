import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smartphone, ExternalLink, Star, Download } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Products - Triignite",
  description:
    "Explore our portfolio of mobile applications including the popular Paraphraser Tool available on iOS App Store.",
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the apps we've crafted with passion and precision. Each one designed to solve real problems and
            create meaningful user experiences.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Paraphraser Tool */}
          <Card className="overflow-hidden">
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-8 flex items-center justify-center">
                <div className="w-32 h-64 bg-background rounded-2xl shadow-xl flex items-center justify-center border">
                  <Smartphone className="h-16 w-16 text-primary" />
                </div>
              </div>
              <Badge className="absolute top-4 right-4">Featured</Badge>
            </div>

            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl">Paraphraser Tool</CardTitle>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                </div>
              </div>
              <div className="flex gap-2">
                <Badge variant="secondary">iOS</Badge>
                <Badge variant="secondary">Productivity</Badge>
                <Badge variant="secondary">Writing</Badge>
              </div>
            </CardHeader>

            <CardContent>
              <CardDescription className="text-base mb-6">
                A sophisticated paraphrasing tool that helps users rewrite content while preserving meaning and context.
                Perfect for students, content creators, and professionals who need to rephrase text efficiently.
              </CardDescription>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Advanced AI-powered paraphrasing</li>
                    <li>• Multiple rewriting modes</li>
                    <li>• Clean, intuitive interface</li>
                    <li>• Fast and accurate results</li>
                    <li>• Offline functionality</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="flex-1" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    Download on App Store
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Details
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Coming Soon Card */}
          <Card className="overflow-hidden border-dashed">
            <div className="bg-muted/30 p-8 flex items-center justify-center">
              <div className="w-32 h-64 bg-muted rounded-2xl flex items-center justify-center border-dashed border-2">
                <Smartphone className="h-16 w-16 text-muted-foreground" />
              </div>
            </div>

            <CardHeader>
              <CardTitle className="text-2xl">More Apps Coming Soon</CardTitle>
              <Badge variant="outline">In Development</Badge>
            </CardHeader>

            <CardContent>
              <CardDescription className="text-base mb-6">
                We're constantly working on new and innovative applications. Stay tuned for exciting releases that will
                continue our mission of creating apps people use, love, and remember.
              </CardDescription>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold mb-2">What's Next:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Cross-platform compatibility</li>
                    <li>• Enhanced user experiences</li>
                    <li>• Innovative problem-solving tools</li>
                    <li>• Community-driven features</li>
                  </ul>
                </div>
              </div>

              <Button variant="outline" className="w-full" disabled>
                Coming Soon
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold mb-8">Our Impact</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">1+</div>
              <div className="text-muted-foreground">Apps Published</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">iOS</div>
              <div className="text-muted-foreground">Platform Focus</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">User-Focused</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
