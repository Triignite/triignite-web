import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Smartphone, Zap, Heart, Star } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Crafting and Building Apps People Use, Love, and Remember
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            At Triignite, we don't just build apps – we create digital experiences that resonate with users and stand
            the test of time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/products">
                View Our Apps <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/about">Learn About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Triignite?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We combine innovation, user experience, and scalability to create apps that make a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <Smartphone className="h-12 w-12 mx-auto mb-4 text-primary" />
              <CardTitle>User-Centric Design</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Every app we build puts the user first, ensuring intuitive interfaces and seamless experiences.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Zap className="h-12 w-12 mx-auto mb-4 text-primary" />
              <CardTitle>Scalable Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Built for growth, our apps are designed to scale with your success and handle increasing user demands.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Heart className="h-12 w-12 mx-auto mb-4 text-primary" />
              <CardTitle>Memorable Experiences</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                We create apps that users don't just use, but love and remember – building lasting connections.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured App Section */}
      <section className="container mx-auto px-4 py-20 bg-muted/30">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured App</h2>
          <p className="text-xl text-muted-foreground">
            Discover our latest creation that's making waves in the App Store.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className="ml-2 text-sm text-muted-foreground">App Store</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">In Production</h3>
                <p className="text-muted-foreground mb-6">
                  {/* A powerful and intuitive paraphrasing tool that helps users rewrite content while maintaining meaning
                  and context. Perfect for students, writers, and professionals. */}
                  We're constantly working on new and innovative applications. Stay tuned for exciting releases that will
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild>
                    <Link href="/products">Learn More</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Download on App Store
                    </a>
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center p-8">
                <div className="w-48 h-96 bg-background rounded-3xl shadow-2xl flex items-center justify-center border">
                  <Smartphone className="h-24 w-24 text-primary" />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Something Amazing?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how we can bring your app idea to life and create something users will love.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">
              Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
