import pkg from '@prisma/client';
const { PrismaClient } = pkg;

// We export 'prisma' so you can use it in your controllers later
export const prisma = new PrismaClient();

export const connectDB = async () => {
  try {
    // This explicitly connects to the database
    await prisma.$connect();
    console.log("✅ Connected to PostgreSQL DB successfully!");
  } catch (error) {
    console.error("❌ Failed to connect to PostgreSQL:", error);
    process.exit(1); // Stop the server if connection fails
  }
};
