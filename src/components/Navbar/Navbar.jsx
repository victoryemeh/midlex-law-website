// import React, { useState } from "react";
// import "./Navbar.css";
// import { assets } from "../../assets";

// const Navbar = () => {
//   const [menu, setMenu] = useState("about-us");

//   return (
//     <div className="navbar">
//       <img src={assets.logo} alt="Logo" />

//       <ul className="navbar-menu">
//         <li
//           onClick={() => setMenu("about-us")}
//           className={menu === "about-us" ? "active" : ""}
//         >
//           About Us
//         </li>
//         <li
//           onClick={() => setMenu("services")}
//           className={menu === "services" ? "active" : ""}
//         >
//           Services
//         </li>
//         <li
//           onClick={() => setMenu("our-team")}
//           className={menu === "our-team" ? "active" : ""}
//         >
//           Our Team
//         </li>
//         <li
//           onClick={() => setMenu("Articles+News")}
//           className={menu === "Articles+News" ? "active" : ""}
//         >
//           Articles+News
//         </li>
//         <li
//           onClick={() => setMenu("contact-us")}
//           className={menu === "contact-us" ? "active" : ""}
//         >
//           Contact Us
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;
