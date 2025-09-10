"use client";

import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Avatar,
} from "@mui/material";
import { Instagram, Twitter, Facebook, LinkedIn } from "@mui/icons-material";
import { useLanguage } from "./LanguageProvider";
import { motion } from "framer-motion";

const barbers = [
  {
    name: "John Smith",
    position: "Extreme Barber",
    image: "/images/desktop/staff/staff-john-desk.jpg",
    socials: [
      { icon: Instagram, href: "https://instagram.com" },
      { icon: Twitter, href: "https://twitter.com" },
      { icon: Facebook, href: "https://facebook.com" },
      { icon: LinkedIn, href: "https://linkedin.com" },
    ],
  },
  {
    name: "Michele Doe",
    position: "Extreme Barber",
    image: "/images/desktop/staff/staff-michele-desk.jpg",
    socials: [
      { icon: Instagram, href: "https://instagram.com" },
      { icon: Twitter, href: "https://twitter.com" },
      { icon: Facebook, href: "https://facebook.com" },
      { icon: LinkedIn, href: "https://linkedin.com" },
    ],
  },
  {
    name: "Alan Black",
    position: "Extreme Barber",
    image: "/images/desktop/staff/staff-alan-desk.jpg",
    socials: [
      { icon: Instagram, href: "https://instagram.com" },
      { icon: Twitter, href: "https://twitter.com" },
      { icon: Facebook, href: "https://facebook.com" },
      { icon: LinkedIn, href: "https://linkedin.com" },
    ],
  },
];

export function Barbers() {
  const { t } = useLanguage();

  return (
    <Box
      id="barbers"
      sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.default" }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "text.secondary",
              mb: 2,
              textAlign: "center",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontWeight: 600,
            }}
          >
            {t("barbers.subtitle")}
          </Typography>

          <Typography
            variant="h2"
            sx={{
              mb: 6,
              textAlign: "center",
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 700,
            }}
          >
            {t("barbers.title")}
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {barbers.map((barber, index) => (
            <Grid item xs={12} sm={6} md={4} key={barber.name}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    borderRadius: "16px",
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="400"
                    image={barber.image}
                    alt={barber.name}
                    sx={{
                      objectFit: "cover",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                  />

                  <CardContent sx={{ p: 3, textAlign: "center" }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        mb: 1,
                        color: "text.primary",
                      }}
                    >
                      {barber.name}
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        color: "text.secondary",
                        mb: 3,
                        fontSize: "1rem",
                      }}
                    >
                      {barber.position}
                    </Typography>

                    <Box
                      sx={{ display: "flex", justifyContent: "center", gap: 1 }}
                    >
                      {barber.socials.map((social, socialIndex) => (
                        <IconButton
                          key={socialIndex}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            bgcolor: "primary.main",
                            color: "white",
                            width: 40,
                            height: 40,
                            "&:hover": {
                              bgcolor: "secondary.main",
                              transform: "scale(1.1)",
                            },
                            transition: "all 0.3s ease",
                          }}
                        >
                          <social.icon fontSize="small" />
                        </IconButton>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
