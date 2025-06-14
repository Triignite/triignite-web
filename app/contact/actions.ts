"use server"

import { writeFile, readFile, mkdir } from "fs/promises"
import { existsSync } from "fs"
import path from "path"

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

const MESSAGES_DIR = path.join(process.cwd(), "data")
const MESSAGES_FILE = path.join(MESSAGES_DIR, "contact-messages.json")

async function ensureDataDirectory() {
  if (!existsSync(MESSAGES_DIR)) {
    await mkdir(MESSAGES_DIR, { recursive: true })
  }
}

async function getMessages(): Promise<ContactMessage[]> {
  try {
    await ensureDataDirectory()
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

async function saveMessages(messages: ContactMessage[]) {
  try {
    await ensureDataDirectory()
    await writeFile(MESSAGES_FILE, JSON.stringify(messages, null, 2))
  } catch (error) {
    console.error("Error saving messages:", error)
    throw new Error("Failed to save message")
  }
}

export async function submitContactForm(prevState: any, formData: FormData) {
  try {
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    // Basic validation
    if (!firstName || !lastName || !email || !subject || !message) {
      return {
        success: false,
        error: "All fields are required",
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return {
        success: false,
        error: "Please enter a valid email address",
      }
    }

    // Create new message
    const newMessage: ContactMessage = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      firstName,
      lastName,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
      status: "new",
    }

    // Get existing messages and add new one
    const messages = await getMessages()
    messages.unshift(newMessage) // Add to beginning of array

    // Save messages
    await saveMessages(messages)

    // Log the message for immediate notification (you can replace this with email notification)
    console.log("New contact message received:", {
      from: `${firstName} ${lastName} (${email})`,
      subject,
      timestamp: newMessage.timestamp,
    })

    return {
      success: true,
      message: "Message sent successfully!",
    }
  } catch (error) {
    console.error("Error submitting contact form:", error)
    return {
      success: false,
      error: "Something went wrong. Please try again.",
    }
  }
}
