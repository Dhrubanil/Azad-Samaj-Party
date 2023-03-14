import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import Image from "next/image";

import { Lora } from "next/font/google";

const lora = Lora({
  weight: "400",
  subsets: ["latin"],
});

const drawerWidth = 240;
const navItems = [
  {
    name: "Inspiration",
    href: "/about",
  },
  {
    name: "Event",
    href: "/about",
  },
  {
    name: "Media",
    href: "/about",
  },
  {
    name: "Join ASP",
    href: "/about",
    // button: "outlined",
  },
  {
    name: "Donation",
    href: "/about",
    // button: "contained",
  },
];
const contactItems = [
  {
    name: "Contact",
    href: "/about",
  },
  {
    name: "Languages",
    href: "/about",
    // button: "contained",
  },
];

function NavAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      {/* <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography> */}
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.name}
            component={Link}
            href={item.href}
            disablePadding
          >
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar className={`topnavbar ${lora.className}`} component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Image
            src="/header_logo.png"
            alt="Picture of the author"
            width={40}
            height={40}
          />
          <Typography
            variant="h6"
            component="div"
            className="topheading"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            AZAD SAMAJ PARTY
          </Typography>
          <Box
            sx={{
              flexGrow: 2,
              display: "flex",
              alignItems: "flex-end",
              flexDirection: "column",
            }}
          >
            <div>
              {contactItems.map((item) => (
                <Link key={item.name} href={item.href}>
                  <Button className="contact_us" sx={{ color: "black" }}>
                    {item.name}
                  </Button>
                </Link>
              ))}
            </div>
            <div>
              {navItems.map((item) =>
                item.button ? (
                  <Link
                    className="donationbutton"
                    key={item.name}
                    href={item.href}
                  >
                    <Button
                      // style={{ marginLeft: "20px" }}
                      className="topnavbutton"
                      key={item.name}
                      variant={item.button}
                    >
                      {item.name}
                    </Button>
                  </Link>
                ) : (
                  <Link key={item.name} href={item.href}>
                    <Button className="topnavbutton" sx={{ color: "black" }}>
                      {item.name}
                    </Button>
                  </Link>
                )
              )}
            </div>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

NavAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export const Navbar = NavAppBar;
