'use client'

import { Box, Typography, Container, TextField, Button, Paper } from '@mui/material'
import { useLanguage } from './LanguageProvider'
import { motion } from 'framer-motion'
import { useState } from 'react'

export function Booking() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  })

  const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    })
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Тут буде логіка відправки форми
    console.log('Form submitted:', formData)
  }

  return (
    <Box
      id="booking"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #1B1B1B 0%, #2D2D2D 100%)',
        color: 'white',
      }}
    >
      <Container maxWidth="md">
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
              textAlign: 'center',
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
            }}
          >
            {t('booking.title')}
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Paper
            elevation={8}
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: '16px',
              bgcolor: 'rgba(255, 255, 255, 0.95)',
            }}
          >
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label={t('booking.name')}
                value={formData.name}
                onChange={handleChange('name')}
                margin="normal"
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                  },
                }}
              />
              
              <TextField
                fullWidth
                label={t('booking.phone')}
                type="tel"
                value={formData.phone}
                onChange={handleChange('phone')}
                margin="normal"
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                  },
                }}
              />
              
              <TextField
                fullWidth
                label={t('booking.message')}
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange('message')}
                margin="normal"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                  },
                }}
              />
              
              <Box sx={{ textAlign: 'center', mt: 4 }}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: 'secondary.main',
                    color: 'white',
                    px: 6,
                    py: 2,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderRadius: '8px',
                    textTransform: 'none',
                    '&:hover': {
                      bgcolor: 'secondary.dark',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 25px rgba(255, 107, 53, 0.3)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {t('booking.button')}
                </Button>
              </Box>
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  )
}

