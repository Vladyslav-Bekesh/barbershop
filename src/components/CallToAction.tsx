'use client'

import { Box, Typography, Container, Button, Paper } from '@mui/material'
import { Phone, WhatsApp, CalendarToday } from '@mui/icons-material'
import { useLanguage } from './LanguageProvider'
import { motion } from 'framer-motion'

export function CallToAction() {
  const { t } = useLanguage()

  const handlePhoneClick = () => {
    window.open('tel:+380441111111', '_self')
  }

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/380441111111', '_blank')
  }

  return (
    <Box
      id="booking"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #1B1B1B 0%, #2D2D2D 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 30% 20%, rgba(255, 107, 53, 0.1) 0%, transparent 50%)',
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 4,
              textAlign: 'center',
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              background: 'linear-gradient(45deg, #FF6B35, #FF8E53)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {t('cta.title')}
          </Typography>
          
          <Typography
            variant="h5"
            sx={{
              mb: 6,
              textAlign: 'center',
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              fontWeight: 400,
              opacity: 0.9,
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            {t('cta.subtitle')}
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: 3,
              justifyContent: 'center',
              alignItems: 'center',
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            {/* Primary CTA - Phone Call */}
            <Paper
              elevation={8}
              sx={{
                p: 4,
                borderRadius: '20px',
                bgcolor: 'rgba(255, 107, 53, 0.95)',
                color: 'white',
                textAlign: 'center',
                minWidth: { xs: '100%', md: '300px' },
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 20px 40px rgba(255, 107, 53, 0.4)',
                  bgcolor: 'rgba(255, 107, 53, 1)',
                },
              }}
              onClick={handlePhoneClick}
            >
              <Phone sx={{ fontSize: '3rem', mb: 2 }} />
              <Typography
                variant="h6"
                sx={{
                  mb: 1,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                {t('cta.callNow')}
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '1.5rem', md: '1.8rem' },
                }}
              >
                {t('contacts.phone')}
              </Typography>
            </Paper>

            {/* Secondary CTA - WhatsApp */}
            <Paper
              elevation={8}
              sx={{
                p: 4,
                borderRadius: '20px',
                bgcolor: 'rgba(255, 255, 255, 0.95)',
                color: 'text.primary',
                textAlign: 'center',
                minWidth: { xs: '100%', md: '300px' },
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
                },
              }}
              onClick={handleWhatsAppClick}
            >
              <WhatsApp sx={{ fontSize: '3rem', mb: 2, color: '#25D366' }} />
              <Typography
                variant="h6"
                sx={{
                  mb: 1,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: '#25D366',
                }}
              >
                {t('cta.whatsapp')}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 500,
                  opacity: 0.8,
                }}
              >
                {t('cta.whatsappText')}
              </Typography>
            </Paper>
          </Box>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              mt: 6,
              textAlign: 'center',
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'center',
              alignItems: 'center',
              gap: 4,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CalendarToday sx={{ color: 'secondary.main', fontSize: '1.5rem' }} />
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 500,
                  opacity: 0.9,
                }}
              >
                {t('contacts.hoursText')}
              </Typography>
            </Box>
            
            <Typography
              variant="body2"
              sx={{
                opacity: 0.7,
                fontStyle: 'italic',
              }}
            >
              {t('cta.note')}
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  )
} 