import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Link from "next/link";

const MetaData = [
  {
    path: "top",
    label: "Recents",
    value: "recents",
    icon: <HomeIcon />,
  },
  {
    path: "cart",
    label: "Favorites",
    value: "favorites",
    icon: <ShoppingCartIcon />,
  },
  {
    path: "search",
    label: "Nearby",
    value: "nearby",
    icon: <SearchIcon />,
  },
  {
    path: "account",
    label: "Folder",
    value: "folder",
    icon: <AccountCircleIcon />,
  },
];

export const FooterNavi = () => {
  return (
    <BottomNavigation sx={{ backgroundColor: "#d1d5db" }}>
      {MetaData.map((item) => (
        <Link href={item.path} key={item.value}>
          <BottomNavigationAction
            label={item.label}
            value={item.value}
            icon={item.icon}
          />
        </Link>
      ))}
    </BottomNavigation>
  );
};
