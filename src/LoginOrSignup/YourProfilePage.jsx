import React, { useState } from "react";

const YourProfilePage = () => {
  const [activeMenu, setActiveMenu] = useState("personal-info");

  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName);
  };

  const PersonalInfoSubMenu = () => (
    <ul>
      <li>Edit name</li>
      <li>Edit bio</li>
      <li>Edit profile picture</li>
    </ul>
  );

  const AccountInfoSubMenu = () => (
    <ul>
      <li>Edit email address</li>
      <li>Change password</li>
      <li>Delete account</li>
    </ul>
  );

  const BlogInfoSubMenu = () => (
    <ul>
      <li>Edit blog name</li>
      <li>Edit blog description</li>
      <li>Change blog theme</li>
    </ul>
  );

  return (
    <div>
      <h1>Your Profile</h1>
      <div>
        <h2>Edit:</h2>
        <ul>
          <li
            onClick={() => handleMenuClick("personal-info")}
            className={activeMenu === "personal-info" ? "active" : ""}
          >
            Personal info
            {activeMenu === "personal-info" && <PersonalInfoSubMenu />}
          </li>
          <li
            onClick={() => handleMenuClick("account-info")}
            className={activeMenu === "account-info" ? "active" : ""}
          >
            Account info
            {activeMenu === "account-info" && <AccountInfoSubMenu />}
          </li>
          <li
            onClick={() => handleMenuClick("blog-info")}
            className={activeMenu === "blog-info" ? "active" : ""}
          >
            Blog info
            {activeMenu === "blog-info" && <BlogInfoSubMenu />}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default YourProfilePage;
