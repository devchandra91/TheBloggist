import React from "react";

const Bloggist = ({ handleLogin, handleSignup }) => {
  return (
    <div>
      <h1>The Bloggist</h1>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Bloggist;
