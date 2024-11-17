import React, { useContext, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { styled } from "@mui/system";
import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { signOut } from "@/utils/auth";
import { destroyCookie } from "nookies";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const BlackIconButton = styled(IconButton)({
  color: "#000" // アイコンの色を黒に変更
});

const WhiteAppBar = styled(AppBar)({
  backgroundColor: "#fff", // AppBarの背景色を白に変更
  color: "#000" // テキストの色を黒に変更
});

interface MenuItem {
  text: string;
  link: string;
  isAvatar?: boolean;
}

interface HamburgerMenuProps {
  hasLogoutIcon: boolean;
}

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  hasLogoutIcon
}) => {
  const { isSignedIn, setIsSignedIn } = useContext(AuthContext);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  const handleLogoutClick = (event: React.MouseEvent) => {
    event.preventDefault();
    setLogoutDialogOpen(true);
  };

  const router = useRouter();
  const handleLogoutConfirm = async () => {
    setLogoutDialogOpen(false);

    // ログアウト処理をここに追加
    try {
      const res = await signOut();
      if (res.data.success === true) {
        destroyCookie(null, "_access_token");
        destroyCookie(null, "_client");
        destroyCookie(null, "_uid");

        setIsSignedIn(false);

        router.push("/login");
      }
    } catch (error) {}
  };

  const handleLogoutCancel = () => {
    setLogoutDialogOpen(false);
  };

  const menuItems: MenuItem[] = [
    { text: "Home", link: "/" },
    { text: "About", link: "/" },
    { text: "Contact", link: "/" },
    {
      text: "",
      link: "https://electronic-commerce-app-git-ff08e4-hamiltons-projects-25437349.vercel.app/login",
      isAvatar: true
    },
    ...(hasLogoutIcon ? [{ text: "Logout", link: "#", isAvatar: false }] : [])
  ];

  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map((item, index) => (
          <ListItem
            component="a"
            href={item.link}
            key={index}
            onClick={item.text === "Logout" ? handleLogoutClick : undefined}
          >
            {item.isAvatar ? (
              <>
                <PersonOutlineIcon fontSize="large" className="ml-2" />
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
          <BlackIconButton
            edge="start"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </BlackIconButton>
          <Typography variant="h6">My App</Typography>
        </Toolbar>
      </WhiteAppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
      <Dialog open={logoutDialogOpen} onClose={handleLogoutCancel}>
        <DialogTitle>ログアウトをしますか？</DialogTitle>
        <DialogActions>
          <Button onClick={handleLogoutCancel} color="primary">
            いいえ
          </Button>
          <Button onClick={handleLogoutConfirm} color="primary">
            はい
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
