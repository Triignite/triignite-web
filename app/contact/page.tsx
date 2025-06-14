"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare, Send } from "lucide-react"
import { useActionState } from "react"
import { submitContactForm } from "./actions"

export default function ContactPage() {
  const [state, formAction, isPending] = useActionState(submitContactForm, null)

  if (state?.success) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4">
          <Card className="max-w-md mx-auto text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle>Message Sent!</CardTitle>
              <CardDescription>Thank you for reaching out. We'll get back to you soon.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={() => window.location.reload()} variant="outline">
                Send Another Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a question about our apps or want to discuss a potential collaboration? We'd love to hear from you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Send us a message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form action={formAction} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" name="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" name="lastName" placeholder="Doe" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" placeholder="What's this about?" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more about your inquiry..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isPending}>
                    {isPending ? (
                      <>Sending...</>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
                {state?.error && (
                  <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
                    <p className="text-red-600 dark:text-red-400 text-sm">{state.error}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="mr-2 h-5 w-5" />
                    Direct Contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">hello@triignite.com</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Response Time</h4>
                    <p className="text-muted-foreground">We typically respond within 24 hours</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What to Expect</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Quick acknowledgment of your message</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Thoughtful response to your inquiry</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Follow-up if needed to ensure we've addressed your needs</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-1">App Support</h4>
                    <p className="text-sm text-muted-foreground">
                      For support with our Paraphraser Tool, please include your device model and iOS version.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Feature Requests</h4>
                    <p className="text-sm text-muted-foreground">
                      We love hearing your ideas! Tell us what features would make our apps even better.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
