"use client";

import { Box, Typography, Container, Button } from "@mui/material";
import { useLanguage } from "./LanguageProvider";
import { motion } from "framer-motion";

export function Hero() {
  const { t } = useLanguage();

  return (
    <Box
      id="hero"
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1B1B1B 0%, #2D2D2D 100%)",
        color: "white",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "url(/images/desktop/hero/hero-slider-desk1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.3,
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "rgba(255, 255, 255, 0.7)",
              mb: 2,
              fontSize: { xs: "1rem", md: "1.25rem" },
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            {t("hero.subtitle")}
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontSize: {
                xs: "2.5rem",
                sm: "3.5rem",
                md: "4.5rem",
                lg: "5.5rem",
              },
              fontWeight: 700,
              mb: 3,
              lineHeight: 1.1,
            }}
          >
            {t("hero.title")}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1.25rem" },
              mb: 4,
              maxWidth: "600px",
              lineHeight: 1.6,
              color: "rgba(255, 255, 255, 0.9)",
            }}
          >
            {t("hero.description")}
          </Typography>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: "secondary.main",
                color: "white",
                px: 4,
                py: 2,
                fontSize: "1.1rem",
                fontWeight: 600,
                borderRadius: "8px",
                textTransform: "none",
                "&:hover": {
                  bgcolor: "secondary.dark",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 25px rgba(255, 107, 53, 0.3)",
                },
                transition: "all 0.3s ease",
              }}
            >
              {t("about.button")}
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}
