'use client'

import { useState } from 'react'
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Alert,
  CircularProgress,
} from '@mui/material'
import { motion } from 'framer-motion'
import { useLanguage } from './LanguageProvider'
import emailjs from '@emailjs/browser'

interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
}

interface ContactFormProps {
  onSuccess?: () => void
}

export function ContactForm({ onSuccess }: ContactFormProps) {
  const { t } = useLanguage()
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const handleChange = (field: keyof ContactFormData) => 
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData(prev => ({
        ...prev,
        [field]: event.target.value,
      }))
      // Clear status when user starts typing
      if (submitStatus) {
        setSubmitStatus(null)
      }
    }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('error')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // EmailJS configuration - you'll need to set these up
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id'
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id'
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key'

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_name: 'BarberShop',
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
      onSuccess?.()
      
    } catch (error) {
      console.error('EmailJS error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Paper
      elevation={8}
      sx={{
        p: { xs: 3, md: 4 },
        borderRadius: '16px',
        bgcolor: 'rgba(255, 255, 255, 0.95)',
        height: 'fit-content',
      }}
    >
      <Typography
        variant="h5"
        sx={{
          mb: 3,
          textAlign: 'center',
          fontWeight: 700,
          color: 'text.primary',
        }}
      >
        {t('contactForm.title')}
      </Typography>

      {submitStatus && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Alert
            severity={submitStatus === 'success' ? 'success' : 'error'}
            sx={{ mb: 2 }}
          >
            {submitStatus === 'success' 
              ? t('contactForm.success')
              : t('contactForm.error')
            }
          </Alert>
        </motion.div>
      )}

      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label={t('contactForm.name')}
          value={formData.name}
          onChange={handleChange('name')}
          margin="normal"
          required
          disabled={isSubmitting}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
            },
          }}
        />

        <TextField
          fullWidth
          label={t('contactForm.email')}
          type="email"
          value={formData.email}
          onChange={handleChange('email')}
          margin="normal"
          required
          disabled={isSubmitting}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
            },
          }}
        />

        <TextField
          fullWidth
          label={t('contactForm.phone')}
          type="tel"
          value={formData.phone}
          onChange={handleChange('phone')}
          margin="normal"
          disabled={isSubmitting}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
            },
          }}
        />

        <TextField
          fullWidth
          label={t('contactForm.message')}
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange('message')}
          margin="normal"
          required
          disabled={isSubmitting}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
            },
          }}
        />

        <Box sx={{ textAlign: 'center', mt: 3 }}>
          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={isSubmitting}
            sx={{
              bgcolor: 'secondary.main',
              color: 'white',
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 600,
              borderRadius: '8px',
              textTransform: 'none',
              minWidth: '120px',
              '&:hover': {
                bgcolor: 'secondary.dark',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 25px rgba(255, 107, 53, 0.3)',
              },
              '&:disabled': {
                bgcolor: 'grey.400',
              },
              transition: 'all 0.3s ease',
            }}
          >
            {isSubmitting ? (
              <>
                <CircularProgress size={20} sx={{ mr: 1, color: 'white' }} />
                {t('contactForm.sending')}
              </>
            ) : (
              t('contactForm.send')
            )}
          </Button>
        </Box>
      </Box>
    </Paper>
  )
} 