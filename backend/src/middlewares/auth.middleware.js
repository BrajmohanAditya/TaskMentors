import jwt from "jsonwebtoken";
import { ENV } from "../config/env.js";
import { prisma } from "../config/DBConnection.js";

export const isLoggedIn = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized - No Token Provided" });
    }

    const verifyToken = jwt.verify(token, ENV.JWT_SECRET);

    if (!verifyToken || !verifyToken.userId) {
      return res.status(401).json({ message: "Unauthorized - Invalid Token" });
    }

    const user = await prisma.user.findUnique({
      where: { id: verifyToken.userId },
    });

    if (!user) {
      return res.status(401).json({ message: "Unauthorized - User Not Found" });
    }

    // Convert BigInt to String if present to prevent serialization issues
    const { password: _, ...userWithoutPassword } = user;
    if (userWithoutPassword.mobileNo) {
      userWithoutPassword.mobileNo = userWithoutPassword.mobileNo.toString();
    }
    userWithoutPassword._id = userWithoutPassword.id;

    req.user = userWithoutPassword;
    next();
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    if (req.user && req.user.role === "admin") {
      next();
    } else {
      return res
        .status(403)
        .json({ message: "Forbidden - Admin Access Required" });
    }
  } catch (error) {
    console.log(`error in admin route ${error}`);
    return res.status(500).json({ message: "Internal server error" });
  }
};
