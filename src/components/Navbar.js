import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/images/Logo.png";


const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }} px ="20px"
    >
      <Link>
        <img
        
          src={Logo}
          alt="logo"
          style={{
            width: "78px",
            height: "42px",
            margin: "-10px 48px",
          }}
        />
      </Link>
      <Stack direction="row" gap="21px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #FF2625",
          }}
        >
          Home
        </Link>
        <a
          href="/#exercises" 
          style={{ textDecoration: "none", color: "#3A1212"}}
        >
          Exercise
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
