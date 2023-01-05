import { FcGoogle } from "react-icons/fc";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../lib/firebase";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";

const Signup = () => {
  const route = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  function handleSignup(event) {
    event.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Signup successful, navigate to home page
        this.props.history.push("/admin");
      })
      .catch((error) => {
        setError(error);
      });
  }

  return (
    <div className="flex flex-col justify-center items-center h-[50vh]">
      <div className="max-w-5xl mx-auto p-10">
        <form onSubmit={handleSignup}>
          <label>
            Email:
            <input
              name="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              name="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <br />
          {error && <p>{error.message}</p>}
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
