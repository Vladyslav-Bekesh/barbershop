"use client";

import { Box, Typography, Container, Link, IconButton } from "@mui/material";
import { Instagram, YouTube } from "@mui/icons-material";
import { useLanguage } from "./LanguageProvider";
import { motion } from "framer-motion";

export function Footer() {
  const { t } = useLanguage();

  return (
    <Box
      sx={{
        py: 4,
        bgcolor: "primary.main",
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "rgba(255, 255, 255, 0.8)",
                fontSize: "1rem",
              }}
            >
              {t("footer.copyright")}
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Typography
                variant="body1"
                sx={{
                  color: "rgba(255, 255, 255, 0.8)",
                  fontSize: "1rem",
                }}
              >
                Слідкуйте за нами:
              </Typography>

              <IconButton
                component={Link}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "white",
                  "&:hover": {
                    color: "secondary.main",
                    transform: "scale(1.1)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <Instagram />
              </IconButton>

              <IconButton
                component={Link}
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "white",
                  "&:hover": {
                    color: "secondary.main",
                    transform: "scale(1.1)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <YouTube />
              </IconButton>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
