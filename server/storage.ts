import { users, waitlistEmails, type User, type InsertUser, type WaitlistEmail, type InsertWaitlistEmail } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  addWaitlistEmail(email: InsertWaitlistEmail): Promise<WaitlistEmail>;
  getAllWaitlistEmails(): Promise<WaitlistEmail[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async addWaitlistEmail(insertEmail: InsertWaitlistEmail): Promise<WaitlistEmail> {
    const [email] = await db
      .insert(waitlistEmails)
      .values(insertEmail)
      .returning();
    return email;
  }

  async getAllWaitlistEmails(): Promise<WaitlistEmail[]> {
    return await db.select().from(waitlistEmails).orderBy(waitlistEmails.createdAt);
  }
}

export const storage = new DatabaseStorage();
