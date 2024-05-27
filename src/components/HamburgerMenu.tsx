// components/HamburgerMenu.js
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import { styled } from "@mui/system";

// アイコンボタンのスタイルを変更
const WhiteIconButton = styled(IconButton)({
  color: "#000", // アイコンの色を黒に変更
});

// AppBarのスタイルを変更
const WhiteAppBar = styled(AppBar)({
  backgroundColor: "#fff", // AppBarの背景色を白に変更
  color: "#000", // テキストの色を黒に変更
});

const HamburgerMenu = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: any) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: "Home", link: "/" },
    { text: "About", link: "/" },
    { text: "Contact", link: "/" },
    {
      text: "",
      link: "https://electronic-commerce-app-git-ff08e4-hamiltons-projects-25437349.vercel.app/login",
      isAvatar: true,
    },
  ];

  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map((item, index) => (
          <ListItem component={Link} href={item.link} key={item.text}>
            {item.isAvatar ? (
              <>
                <Avatar alt="" src="/broken-image.jpg" />
                <ListItemText primary={item.text} />
              </>
            ) : (
              <ListItemText primary={item.text} />
            )}
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <WhiteAppBar position="static">
        <Toolbar>
          <WhiteIconButton
            edge="start"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </WhiteIconButton>
          <Typography variant="h6">My App</Typography>
        </Toolbar>
      </WhiteAppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
};

export default HamburgerMenu;
