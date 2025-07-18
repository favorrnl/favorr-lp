import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { storage } from "./storage";
import { insertWaitlistEmailSchema } from "@shared/schema";

const waitlistSchema = z.object({
  email: z.string().email("Invalid email address"),
});

const adminLoginSchema = z.object({
  username: z.string(),
  password: z.string(),
});

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Waitlist endpoint
  app.post("/api/waitlist", async (req, res) => {
    try {
      const { email } = waitlistSchema.parse(req.body);
      
      await storage.addWaitlistEmail({ email });
      
      res.status(200).json({ 
        message: "Successfully added to waitlist",
        email 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Invalid email address",
          errors: error.errors 
        });
      } else {
        console.error("Waitlist error:", error);
        res.status(500).json({ 
          message: "Internal server error" 
        });
      }
    }
  });

  // Admin login endpoint
  app.post("/api/admin/login", async (req, res) => {
    try {
      const { username, password } = adminLoginSchema.parse(req.body);
      
      if (username === "billy" && password === "billy") {
        res.status(200).json({ 
          message: "Login successful",
          token: "admin-token"
        });
      } else {
        res.status(401).json({ 
          message: "Invalid credentials" 
        });
      }
    } catch (error) {
      res.status(400).json({ 
        message: "Invalid request" 
      });
    }
  });

  // Admin get waitlist emails endpoint
  app.get("/api/admin/waitlist", async (req, res) => {
    try {
      const authHeader = req.headers.authorization;
      if (authHeader !== "Bearer admin-token") {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const emails = await storage.getAllWaitlistEmails();
      res.status(200).json(emails);
    } catch (error) {
      console.error("Admin waitlist error:", error);
      res.status(500).json({ 
        message: "Internal server error" 
      });
    }
  });

  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = contactSchema.parse(req.body);
      
      // Log contact form submission (in production, this would email to info@favorr.nl)
      console.log('Contact form submission:', {
        name,
        email,
        subject,
        message,
        timestamp: new Date().toISOString()
      });
      
      res.status(200).json({ 
        message: "Contact form submitted successfully",
        note: "This would be emailed to info@favorr.nl in production"
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Invalid form data",
          errors: error.errors 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          message: "Internal server error" 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
