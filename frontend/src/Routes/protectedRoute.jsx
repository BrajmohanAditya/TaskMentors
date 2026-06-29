import { useUserStore } from "@/store/user.store";
import { Navigate } from "react-router-dom";

export const ProtectedRoutes = ({ children, requireAdmin = false }) => {
  const { user } = useUserStore();

  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  if (requireAdmin && user.role !== "admin") {
    console.warn("Access Denied: You are not an admin!");
    return <Navigate to="/" replace />; // Kick them back to the homepage
  }

  return children;
};
