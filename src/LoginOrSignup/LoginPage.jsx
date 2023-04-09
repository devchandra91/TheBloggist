import React, { useState } from "react";
import Bloggist from "./Bloggist";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import Dashboard from "./Dashboard";

const LoginPage = () => {
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(true);
  const [isSignupFormOpen, setIsSignupFormOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (username, password) => {
    // handle login logic
    setIsAuthenticated(true);
    setUser({
      name: "John Doe",
      profilePicture: "https://example.com/profile.jpg",
      profileWallpaper: "https://example.com/wallpaper.jpg"
    });
  };

  const handleSignup = (username, email, password) => {
    // handle signup logic
    setIsAuthenticated(true);
    setUser({
      name: "Jane Smith",
      profilePicture: "https://example.com/profile.jpg",
      profileWallpaper: "https://example.com/wallpaper.jpg"
    });
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setIsLoginFormOpen(true);
    setIsSignupFormOpen(false);
    setUser(null);
  };

  const handleLoginButtonClick = () => {
    setIsLoginFormOpen(true);
    setIsSignupFormOpen(false);
  };

  const handleSignupButtonClick = () => {
    setIsSignupFormOpen(true);
    setIsLoginFormOpen(false);
  };

  return (
    <div>
      {isAuthenticated ? (
        <Dashboard handleLogout={handleLogout} user={user} />
      ) : (
        <>
          <Bloggist
            handleLogin={handleLoginButtonClick}
            handleSignup={handleSignupButtonClick}
          />
          {isLoginFormOpen && (
            <LoginForm
              handleLogin={handleLogin}
              handleSignup={handleSignupButtonClick}
            />
          )}
          {isSignupFormOpen && (
            <SignupForm
              handleSignup={handleSignup}
              handleLogin={handleLoginButtonClick}
            />
          )}
        </>
      )}
    </div>
  );
};

export default LoginPage;
