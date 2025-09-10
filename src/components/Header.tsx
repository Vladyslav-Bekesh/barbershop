"use client";

import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useLanguage } from "./LanguageProvider";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { key: "nav.home", href: "#hero" },
    { key: "nav.about", href: "#about" },
    { key: "nav.services", href: "#prices" },
    { key: "nav.barbers", href: "#barbers" },
    { key: "nav.gallery", href: "#gallery" },
    { key: "nav.contacts", href: "#contacts" },
  ];

  const drawer = (
    <Box sx={{ width: 250, pt: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 2,
          mb: 2,
        }}
      >
        <Typography variant="h6" component="div">
          BarberShop
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.key}
            component="a"
            href={item.href}
            onClick={handleDrawerToggle}
          >
            <ListItemText primary={t(item.key)} />
          </ListItem>
        ))}
        <ListItem>
          <Button
            variant={language === "uk" ? "contained" : "outlined"}
            size="small"
            onClick={() => setLanguage("uk")}
            sx={{ mr: 1 }}
          >
            УК
          </Button>
          <Button
            variant={language === "en" ? "contained" : "outlined"}
            size="small"
            onClick={() => setLanguage("en")}
          >
            EN
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ bgcolor: "white", color: "text.primary", boxShadow: 1 }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            px: { xs: 1, sm: 2, md: 3, lg: 4, xl: 6 },
            minHeight: { xs: "56px", sm: "64px" },
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 700,
              color: "primary.main",
              fontSize: { xs: "1.1rem", sm: "1.25rem" },
            }}
          >
            BarberShop
          </Typography>

          {!isTablet && (
            <Box
              sx={{
                display: "flex",
                gap: { xs: "10px", sm: "15px", md: "20px", lg: "30px" },
                alignItems: "center",
                flexWrap: "nowrap",
              }}
            >
              {menuItems.map((item) => (
                <Button
                  key={item.key}
                  href={item.href}
                  sx={{
                    color: "text.primary",
                    fontWeight: 600,
                    fontSize: {
                      xs: "0.8rem",
                      sm: "0.875rem",
                      md: "0.9rem",
                      lg: "1rem",
                    },
                    px: { xs: 0.5, sm: 1, md: 1.5 },
                    minWidth: "auto",
                    whiteSpace: "nowrap",
                  }}
                >
                  {t(item.key)}
                </Button>
              ))}
              <Box sx={{ display: "flex", gap: 1, ml: 2 }}>
                <Button
                  variant={language === "uk" ? "contained" : "outlined"}
                  size="small"
                  onClick={() => setLanguage("uk")}
                  sx={{
                    minWidth: { xs: "32px", sm: "40px" },
                    fontSize: { xs: "0.7rem", sm: "0.75rem" },
                    px: { xs: 0.5, sm: 1 },
                  }}
                >
                  УК
                </Button>
                <Button
                  variant={language === "en" ? "contained" : "outlined"}
                  size="small"
                  onClick={() => setLanguage("en")}
                  sx={{
                    minWidth: { xs: "32px", sm: "40px" },
                    fontSize: { xs: "0.7rem", sm: "0.75rem" },
                    px: { xs: 0.5, sm: 1 },
                  }}
                >
                  EN
                </Button>
              </Box>
            </Box>
          )}

          {isTablet && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                color: "text.primary",
                p: { xs: 0.5, sm: 1 },
              }}
            >
              <MenuIcon sx={{ fontSize: { xs: "1.5rem", sm: "1.75rem" } }} />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          "& .MuiDrawer-paper": {
            width: { xs: 250, sm: 280 },
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
