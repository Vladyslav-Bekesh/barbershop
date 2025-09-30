"use client";

import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { LocationOn, Phone, Email, AccessTime } from "@mui/icons-material";
import { useLanguage } from "./LanguageProvider";
import { motion } from "framer-motion";
import { ContactForm } from "./ContactForm";

export function Contacts() {
  const { t } = useLanguage();

  const handlePhoneClick = () => {
    window.open("tel:+380441111111", "_self");
  };

  const contactInfo = [
    {
      icon: LocationOn,
      text: t("contacts.address"),
      clickable: false,
    },
    {
      icon: Phone,
      text: t("contacts.phone"),
      clickable: true,
      onClick: handlePhoneClick,
    },
    {
      icon: Email,
      text: t("contacts.email"),
      clickable: false,
    },
  ];

  return (
    <Box
      id="contacts"
      sx={{
        py: { xs: 8, md: 12 },
        background: "linear-gradient(135deg, #1B1B1B 0%, #2D2D2D 100%)",
        color: "white",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "url(/images/desktop/footer/footer-bg-desk.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1,
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 6,
              textAlign: "center",
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 700,
            }}
          >
            {t("contacts.title")}
          </Typography>
        </motion.div>

        <Grid container spacing={4} sx={{ alignItems: 'stretch' }}>
          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Paper
                elevation={8}
                sx={{
                  p: 4,
                  borderRadius: "16px",
                  bgcolor: "rgba(255, 255, 255, 0.95)",
                  color: "text.primary",
                  mb: 4,
                }}
              >
                <List>
                  {contactInfo.map((contact, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <ListItem
                        sx={{
                          px: 0,
                          py: 2,
                          cursor: contact.clickable ? "pointer" : "default",
                          borderRadius: "8px",
                          transition: "all 0.3s ease",
                          "&:hover": contact.clickable
                            ? {
                                bgcolor: "rgba(255, 107, 53, 0.1)",
                                transform: "translateX(5px)",
                              }
                            : {},
                        }}
                        onClick={contact.onClick}
                      >
                        <ListItemIcon>
                          <contact.icon
                            sx={{ color: "secondary.main", fontSize: "2rem" }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={contact.text}
                          sx={{
                            "& .MuiListItemText-primary": {
                              fontSize: "1.1rem",
                              fontWeight: 500,
                              color: contact.clickable
                                ? "secondary.main"
                                : "inherit",
                              textDecoration: contact.clickable
                                ? "underline"
                                : "none",
                            },
                          }}
                        />
                      </ListItem>
                    </motion.div>
                  ))}
                </List>
              </Paper>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              style={{ flex: 1, display: 'flex' }}
            >
              <Paper
                elevation={8}
                sx={{
                  p: 4,
                  borderRadius: "16px",
                  bgcolor: "rgba(255, 107, 53, 0.1)",
                  border: "2px solid rgba(255, 107, 53, 0.3)",
                  textAlign: "center",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  maxWidth: "100%",
                  mx: { xs: "auto", md: 0 },
                  flex: 1,
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                  }}
                >
                  <AccessTime
                    sx={{
                      color: "secondary.main",
                      fontSize: "3rem",
                      margin: "0 auto",
                    }}
                  />

                  <Box sx={{ textAlign: "center" }}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "secondary.main",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        mb: 1,
                      }}
                    >
                      {t("contacts.hours")}
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        color: "white",
                        fontSize: "1.1rem",
                        fontWeight: 500,
                      }}
                    >
                      {t("contacts.hoursText")}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}