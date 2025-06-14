import { readFile } from "fs/promises"
import { existsSync } from "fs"
import path from "path"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ContactMessage {
  id: string
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
  timestamp: string
  status: "new" | "read" | "replied"
}

async function getMessages(): Promise<ContactMessage[]> {
  try {
    const MESSAGES_FILE = path.join(process.cwd(), "data", "contact-messages.json")
    if (!existsSync(MESSAGES_FILE)) {
      return []
    }
    const data = await readFile(MESSAGES_FILE, "utf-8")
    return JSON.parse(data)
  } catch (error) {
    console.error("Error reading messages:", error)
    return []
  }
}

function formatDate(timestamp: string) {
  return new Date(timestamp).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
}

function getStatusColor(status: string) {
  switch (status) {
    case "new":
      return "bg-blue-500"
    case "read":
      return "bg-yellow-500"
    case "replied":
      return "bg-green-500"
    default:
      return "bg-gray-500"
  }
}

export default async function AdminMessagesPage() {
  const messages = await getMessages()

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Contact Messages</h1>
            <p className="text-muted-foreground">Manage messages from your contact form</p>
          </div>
          <Button asChild variant="outline">
            <Link href="/">← Back to Website</Link>
          </Button>
        </div>

        {messages.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <Mail className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">No messages yet</h3>
              <p className="text-muted-foreground text-center">
                When people submit the contact form, their messages will appear here.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-sm text-muted-foreground">
                Total messages: <span className="font-semibold">{messages.length}</span>
              </div>
              <div className="text-sm text-muted-foreground">
                New: <span className="font-semibold">{messages.filter((m) => m.status === "new").length}</span>
              </div>
            </div>

            {messages.map((message) => (
              <Card key={message.id} className="relative">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <User className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <CardTitle className="text-lg">
                          {message.firstName} {message.lastName}
                        </CardTitle>
                        <CardDescription className="flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          {message.email}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="flex items-center gap-1">
                        <div className={`w-2 h-2 rounded-full ${getStatusColor(message.status)}`} />
                        {message.status}
                      </Badge>
                      <div className="text-sm text-muted-foreground flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {formatDate(message.timestamp)}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-1">Subject:</h4>
                      <p className="font-medium">{message.subject}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-1">Message:</h4>
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.message}</p>
                    </div>
                    <div className="pt-3 border-t">
                      <Button size="sm" asChild>
                        <a href={`mailto:${message.email}?subject=Re: ${message.subject}`}>Reply via Email</a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
