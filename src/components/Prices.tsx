"use client";

import {
  Box,
  Typography,
  Container,
  List,
  ListItem,
  Divider,
  Button,
  Paper,
} from "@mui/material";
import { useLanguage } from "./LanguageProvider";
import { motion } from "framer-motion";

const services = [
  { key: "services.mensHaircut", price: "300" },
  { key: "services.beardTrim", price: "200" },
  { key: "services.mustacheTrim", price: "200" },
  { key: "services.straightRazor", price: "200" },
  { key: "services.traineeHaircut", price: "50" },
  { key: "services.buzzCut", price: "200" },
  { key: "services.kidsHaircut", price: "300" },
  { key: "services.grayCoverage", price: "200" },
];

export function Prices() {
  const { t } = useLanguage();

  return (
    <Box
      id="prices"
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
          backgroundImage: "url(/images/desktop/prices/prices-bg-desk.png)",
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
            variant="h6"
            sx={{
              color: "rgba(255, 255, 255, 0.7)",
              mb: 2,
              textAlign: "center",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontWeight: 600,
            }}
          >
            {t("prices.subtitle")}
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
            {t("prices.title")}
          </Typography>
        </motion.div>

        <Paper
          elevation={8}
          sx={{
            bgcolor: "rgba(255, 255, 255, 0.95)",
            color: "text.primary",
            borderRadius: "16px",
            p: { xs: 3, md: 4 },
            mb: 4,
          }}
        >
          <List sx={{ "& .MuiListItem-root": { px: 0 } }}>
            {services.map((service, index) => (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ListItem
                  sx={{
                    py: 2,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1.1rem",
                      fontWeight: 500,
                      flex: 1,
                    }}
                  >
                    {t(service.key)}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flex: 1,
                      mx: 2,
                    }}
                  >
                    <Divider sx={{ flex: 1, bgcolor: "divider" }} />
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{
                      color: "secondary.main",
                      fontWeight: 700,
                      minWidth: "120px",
                      textAlign: "right",
                    }}
                  >
                    від {service.price} грн
                  </Typography>
                </ListItem>
                {index < services.length - 1 && <Divider />}
              </motion.div>
            ))}
          </List>
        </Paper>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: "secondary.main",
                color: "white",
                px: 6,
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
              {t("prices.button")}
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
