import { useUser } from "../context/UserContext";
import { useState } from "react";
import LoginButton from "./LoginButton";

const ProtectedRoute = ({ allowedRole, children }) => {
  const { user } = useUser();
  const [loginTriggered, setLoginTriggered] = useState(false);

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <p className="text-lg">You must sign in to access this page.</p>
        {!loginTriggered && (
          <LoginButton onSuccess={() => setLoginTriggered(true)} />
        )}
      </div>
    );
  }

  if (user.role !== allowedRole) {
    return (
      <div className="flex items-center justify-center h-screen text-red-600">
        Access Denied: You are not a {allowedRole}.
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;
