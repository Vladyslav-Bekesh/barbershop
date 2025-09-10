"use client";

import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import { useLanguage } from "./LanguageProvider";
import { motion } from "framer-motion";

const stats = [
  { number: "600", key: "stats.customers" },
  { number: "20", key: "stats.barbers" },
  { number: "50", key: "stats.awards" },
  { number: "100", key: "stats.gifts" },
];

export function Resume() {
  const { t } = useLanguage();

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.paper" }}>
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
            {t("resume.subtitle")}
          </Typography>

          <Typography
            variant="h2"
            sx={{
              mb: 3,
              textAlign: "center",
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 700,
            }}
          >
            {t("resume.title")}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 6,
              textAlign: "center",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              color: "text.secondary",
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            {t("resume.description")}
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={stat.key}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    textAlign: "center",
                    borderRadius: "16px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)",
                    },
                  }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      color: "secondary.main",
                      fontWeight: 700,
                      fontSize: { xs: "2.5rem", md: "3rem" },
                      mb: 2,
                    }}
                  >
                    {stat.number}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "text.primary",
                      fontSize: "1rem",
                      lineHeight: 1.5,
                      fontWeight: 500,
                    }}
                  >
                    {t(stat.key)}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
