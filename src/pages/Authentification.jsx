import "./authentification.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Authentification = () => {
  const [connecter, setConnecter] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [courriel, setCourriel] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigation = useNavigate();

  const login = () => {
    navigation("/menu");
  };

  const UpdateUsername = (username) => {
    setUsername(username);
  };

  const UpdatePassword = (password) => {
    setPassword(password);
    setIsPasswordValid(password.length >= 8);
    // Set or clear password error message
    if (password.length < 8) {
      setPasswordError("Le mot de passe doit avoir au moins 8 caractères.");
    } else {
      setPasswordError("");
    }
  };

  const UpdateCourriel = (courriel) => {
    setCourriel(courriel);
    // Validate email using a regular expression
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    setIsValidEmail(emailRegex.test(courriel));
    // Set or clear email error message
    if (!emailRegex.test(courriel)) {
      setEmailError("L'adresse email n'est pas valide.");
    } else {
      setEmailError("");
    }
  };

  const toggleMode = () => {
    setConnecter(!connecter);
  };

  const handleLogin = () => {
    if (connecter && (!isValidEmail || !isPasswordValid)) {
      return;
    }
  };

  return (
    <div className="form-container">
      <p className="title">{connecter ? "Se connecter" : "S'inscrire"}</p>
      <form className="form">
        {connecter ? (
          <>
            <div className="input-group">
              <label htmlFor="username">Nom d'utilisateur</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder=""
                value={username}
                onChange={(e) => UpdateUsername(e.target.value)}
              ></input>
            </div>
            <div className="input-group">
              <label htmlFor="password">Mot de passe</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder=""
                value={password}
                onChange={(e) => UpdatePassword(e.target.value)}
                className={passwordError ? "error-border" : ""}
              ></input>
              {passwordError && <p className={`error-text`}>{passwordError}</p>}
              <div className="forgot">
                <a rel="noopener noreferrer" href="#">
                  Mot de passe oublié ?
                </a>
              </div>
            </div>
            <button
              className="sign"
              onClick={(handleLogin, login)}
              disabled={!isValidEmail || !isPasswordValid}
            >
              Se connecter
            </button>
          </>
        ) : (
          <>
            <div className="input-group">
              <label htmlFor="username">Nom d'utilisateur</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder=""
                onChange={(e) => UpdateUsername(e.target.value)}
                value={username}
              ></input>
            </div>
            <div className="input-group">
              <label htmlFor="email">Courriel</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder=""
                onChange={(e) => UpdateCourriel(e.target.value)}
                value={courriel}
                className={emailError ? "error-border" : ""}
              ></input>
              {emailError && <p className={`error-text`}>{emailError}</p>}
            </div>
            <div className="input-group">
              <label htmlFor="password">Mot de passe</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder=""
                value={password}
                onChange={(e) => UpdatePassword(e.target.value)}
                className={passwordError ? "error-border" : ""}
              ></input>
              {passwordError && <p className={`error-text`}>{passwordError}</p>}
            </div>
            <button
              className="sign mt-6"
              onClick={(handleLogin, login)}
              disabled={!isValidEmail || !isPasswordValid}
            >
              S'inscrire
            </button>
          </>
        )}
      </form>
      <div className="social-message">
        <div className="line"></div>
        <p className="message">Autre méthode</p>
        <div className="line"></div>
      </div>
      <div className="social-icons">{/* Add social login buttons */}</div>
      <p className="signup">
        {connecter ? "vous n'avez pas de compte ?" : "vous avez un compte ?"}
        <a rel="noopener noreferrer" href="#" className="" onClick={toggleMode}>
          {connecter ? "S'inscrire" : "Se connecter"}
        </a>
      </p>
    </div>
  );
};

export default Authentification;
