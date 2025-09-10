"use client";

import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
} from "@mui/material";
import { useLanguage } from "./LanguageProvider";
import { motion } from "framer-motion";

const galleryImages = [
  "/images/desktop/gallery/gal-desk1.png",
  "/images/desktop/gallery/gal-desk2.png",
  "/images/desktop/gallery/gal-desk3.png",
  "/images/desktop/gallery/gal-desk4.png",
];

export function Gallery() {
  const { t } = useLanguage();

  return (
    <Box
      id="gallery"
      sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.paper" }}
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
              mb: 6,
              textAlign: "center",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontWeight: 600,
            }}
          >
            {t("gallery.subtitle")}
          </Typography>
        </motion.div>

        <Grid container spacing={2}>
          {galleryImages.map((image, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    borderRadius: "12px",
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0 12px 40px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="300"
                    image={image}
                    alt={`Gallery image ${index + 1}`}
                    sx={{
                      objectFit: "cover",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
