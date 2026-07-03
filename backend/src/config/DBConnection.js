

import pkg from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';

const { PrismaClient } = pkg;
const { Pool } = pg;

// Initialize PostgreSQL connection pool
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

// Pass the adapter to PrismaClient
export const prisma = new PrismaClient({ adapter });

export const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log("✅ Connected to PostgreSQL DB successfully!");
  } catch (error) {
    console.error("❌ Failed to connect to PostgreSQL:", error);
    process.exit(1);
  }
};
