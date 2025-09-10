"use client";

import { Box, Typography, Container, Grid, Button, Paper } from "@mui/material";
import { useLanguage } from "./LanguageProvider";
import { motion } from "framer-motion";

export function AboutUs() {
  const { t } = useLanguage();

  return (
    <Box
      id="about"
      sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.default" }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  height: { xs: 300, md: 500 },
                  backgroundImage:
                    "url(/images/desktop/hero/hero-slider-desk1.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "12px",
                  position: "relative",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background:
                      "linear-gradient(45deg, rgba(27, 27, 27, 0.8), rgba(45, 45, 45, 0.6))",
                    borderRadius: "12px",
                  },
                }}
              />
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "text.secondary",
                  mb: 2,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontWeight: 600,
                }}
              >
                {t("about.subtitle")}
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  mb: 3,
                  fontSize: { xs: "2rem", md: "2.5rem" },
                  fontWeight: 700,
                }}
              >
                {t("about.title")}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  fontSize: "1.1rem",
                  lineHeight: 1.7,
                  color: "text.secondary",
                }}
              >
                {t("about.description")}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  fontSize: "1rem",
                  lineHeight: 1.6,
                  color: "text.primary",
                }}
              >
                {t("about.text")}
              </Typography>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: "primary.main",
                    color: "white",
                    px: 4,
                    py: 2,
                    fontSize: "1rem",
                    fontWeight: 600,
                    borderRadius: "8px",
                    textTransform: "none",
                    "&:hover": {
                      bgcolor: "primary.dark",
                      transform: "translateY(-2px)",
                      boxShadow: "0 8px 25px rgba(27, 27, 27, 0.3)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  {t("about.button")}
                </Button>
              </motion.div>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
