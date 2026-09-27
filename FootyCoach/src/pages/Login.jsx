import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

function Login() {

  const navigate = useNavigate();

  const [isSignup, setIsSignup] = useState(false);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [mobile, setMobile] = useState("");

  const [message, setMessage] = useState("");

  const [messageType, setMessageType] = useState("");


  /* =========================
     SHOW POPUP MESSAGE
     ========================= */

  function showMessage(text, type) {

    setMessage(text);

    setMessageType(type);

  }


  /* =========================
     CLOSE POPUP
     ========================= */

  function closeMessage() {

    setMessage("");

    setMessageType("");

  }


  /* =========================
     FORM SUBMIT
     ========================= */

  async function handleSubmit(event) {

    event.preventDefault();

    closeMessage();


    /* =========================
       BASIC VALIDATION
       ========================= */

    if (email === "" || password === "") {

      showMessage(
        "Please enter your email and password.",
        "error"
      );

      return;
    }


    /* =========================
       SIGNUP VALIDATION
       ========================= */

    if (isSignup && mobile === "") {

      showMessage(
        "Please enter your mobile number.",
        "error"
      );

      return;
    }


    /* =========================
       MOBILE VALIDATION
       ========================= */

    if (isSignup && mobile.length < 10) {

      showMessage(
        "Please enter a valid mobile number.",
        "error"
      );

      return;
    }


    /* =========================
       SIGN UP
       ========================= */

    if (isSignup) {

      const { data, error } =
        await supabase.auth.signUp({

          email: email,

          password: password,

          options: {

            data: {
              mobile: mobile
            }

          }

        });


      if (error) {

        showMessage(
          error.message,
          "error"
        );

        return;
      }


      console.log("Signup data:", data);


      showMessage(
        "Account created successfully! ⚽",
        "success"
      );


      setEmail("");

      setPassword("");

      setMobile("");

      return;
    }


    /* =========================
       LOGIN
       ========================= */

    const { error } =
      await supabase.auth.signInWithPassword({

        email: email,

        password: password

      });


    /* =========================
       LOGIN ERROR
       ========================= */

    if (error) {

      showMessage(
        "Invalid email or password.",
        "error"
      );

      return;
    }


    /* =========================
       LOGIN SUCCESS
       ========================= */

    showMessage(
      "Login successful! Welcome to FootyCoach ⚽",
      "success"
    );


    /* =========================
       GO TO HOME
       ========================= */

    setTimeout(() => {

      navigate("/");

    }, 1200);

  }


  /* =========================
     SWITCH LOGIN / SIGNUP
     ========================= */

  function switchForm() {

    setIsSignup(!isSignup);

    setMessage("");

    setMessageType("");

    setEmail("");

    setPassword("");

    setMobile("");

  }


  return (

    <div className="page">


      {/* =========================
          POPUP MESSAGE
          ========================= */}

      {message !== "" && (

        <div className={`popup ${messageType}`}>

          <div className="popup-content">

            <h3>

              {messageType === "error"
                ? "⚠️ Warning"
                : "✅ Success"}

            </h3>

            <p>
              {message}
            </p>

            <button
              onClick={closeMessage}
            >
              OK
            </button>

          </div>

        </div>

      )}


      {/* =========================
          LOGIN / SIGNUP FORM
          ========================= */}

      <div className="registration">

        <h1>

          {isSignup
            ? "⚽ Create Account"
            : "⚽ Login"}

        </h1>


        <form onSubmit={handleSubmit}>


          {/* EMAIL */}

          <label>
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
          />


          {/* MOBILE */}

          {isSignup && (

            <>

              <label>
                Mobile Number
              </label>

              <input
                type="tel"
                placeholder="Enter mobile number"
                value={mobile}
                onChange={(event) =>
                  setMobile(event.target.value)
                }
              />

            </>

          )}


          {/* PASSWORD */}

          <label>
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
          />


          {/* SUBMIT BUTTON */}

          <button type="submit">

            {isSignup
              ? "Create Account"
              : "Login"}

          </button>

        </form>


        {/* =========================
            SWITCH LOGIN / SIGNUP
            ========================= */}

        <p>

          {isSignup
            ? "Already have an account?"
            : "Don't have an account?"}


          <button
            type="button"
            className="switch-button"
            onClick={switchForm}
          >

            {isSignup
              ? " Login"
              : " Sign Up"}

          </button>

        </p>

      </div>

    </div>

  );

}

export default Login;