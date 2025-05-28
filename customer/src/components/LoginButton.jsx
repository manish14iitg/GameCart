import { auth, provider, signInWithPopup } from "../firebaseConfig";
import axios from "axios";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function LoginButton({ onSuccess }) {
  const { setUser } = useUser();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const idToken = await result.user.getIdToken();

      const response = await axios.post(
        "http://localhost:5000/api/auth/google",
        {
          token: idToken,
        }
      );

      const user = response.data.user;
      setUser(user);

      if (onSuccess) {
        onSuccess();
      } else {
        // fallback default redirect
        if (user.role === "admin") navigate("/admin");
        else if (user.role === "rider") navigate("/rider");
        else navigate("/shop");
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed.");
    }
  };

  return (
    <button
      onClick={handleLogin}
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      Sign in with Google
    </button>
  );
}

export default LoginButton;
