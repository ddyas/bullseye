import React from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
  Grid,
  Card,
  Stack,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  alpha,
} from '@mui/material';
import {
  Speed as SpeedIcon,
  Security as SecurityIcon,
  Psychology as PsychologyIcon,
  Timeline as TimelineIcon,
  CheckCircle as CheckCircleIcon,
  ArrowForward as ArrowForwardIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

// Company logos (replace with actual company logos)
const TRUSTED_BY = [
  'Google',
  'Microsoft',
  'Amazon',
  'Meta',
  'Apple',
  'Netflix',
];

const FEATURES = [
  {
    icon: <SpeedIcon />,
    title: 'Lightning Fast Search',
    description: 'Find the right contacts in seconds with our advanced search algorithms.',
  },
  {
    icon: <SecurityIcon />,
    title: 'Data Accuracy',
    description: '95%+ accuracy rate with real-time verification and updates.',
  },
  {
    icon: <PsychologyIcon />,
    title: 'AI-Powered Insights',
    description: 'Get intelligent recommendations and insights about your prospects.',
  },
  {
    icon: <TimelineIcon />,
    title: 'Advanced Analytics',
    description: 'Track your performance and optimize your outreach campaigns.',
  },
];

const BENEFITS = [
  'Access to 100M+ verified contacts',
  'Real-time email verification',
  'Direct dial phone numbers',
  'Company insights and technographics',
  'Chrome extension for easy access',
  'Integration with major CRMs',
];

export default function LandingPage() {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box>
      {/* Navigation Bar */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(8px)',
          borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: 70,
            }}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <Box
                component="img"
                src="/logo.svg"
                alt="Bullseye Logo"
                sx={{
                  width: 40,
                  height: 40,
                }}
              />
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Bullseye
              </Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
              <Button
                variant="outlined"
                onClick={() => navigate('/login')}
                sx={{
                  borderColor: alpha(theme.palette.primary.main, 0.5),
                  '&:hover': {
                    borderColor: theme.palette.primary.main,
                    background: alpha(theme.palette.primary.main, 0.05),
                  },
                }}
              >
                Sign In
              </Button>
              <Button
                variant="contained"
                onClick={() => navigate('/register')}
                sx={{
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  '&:hover': {
                    background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                  },
                }}
              >
                Sign Up Free
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* Add margin to account for fixed navbar */}
      <Box sx={{ height: 70 }} />

      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)}, ${alpha(theme.palette.secondary.main, 0.1)})`,
          pt: { xs: 8, md: 12 },
          pb: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative', zIndex: 2 }}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    fontWeight: 800,
                    mb: 2,
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Find the Right
                  <br />
                  Contacts Instantly
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 4,
                    color: theme.palette.text.secondary,
                    fontWeight: 500,
                    lineHeight: 1.6,
                  }}
                >
                  Access accurate B2B contact data and company insights to supercharge your sales outreach.
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => navigate('/register')}
                    sx={{
                      py: 1.5,
                      px: 4,
                      borderRadius: 2,
                      fontSize: '1.1rem',
                      background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      '&:hover': {
                        background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                      },
                    }}
                  >
                    Sign Up Free
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => navigate('/login')}
                    sx={{
                      py: 1.5,
                      px: 4,
                      borderRadius: 2,
                      fontSize: '1.1rem',
                      borderColor: alpha(theme.palette.primary.main, 0.5),
                      '&:hover': {
                        borderColor: theme.palette.primary.main,
                        background: alpha(theme.palette.primary.main, 0.05),
                      },
                    }}
                  >
                    Sign In
                  </Button>
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/hero-image.svg"
                alt="Bullseye Platform"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 4,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  transform: 'perspective(1000px) rotateY(-5deg)',
                  background: '#fff',
                  p: 2,
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Trusted By Section */}
      <Container maxWidth="lg" sx={{ mt: 12, mb: 8, textAlign: 'center' }}>
        <Typography
          variant="h6"
          sx={{
            mb: 4,
            color: 'text.secondary',
            textTransform: 'uppercase',
            letterSpacing: 1,
          }}
        >
          Trusted by teams at
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: { xs: 4, md: 8 },
            flexWrap: 'wrap',
          }}
        >
          {[
            'google.com',
            'microsoft.com',
            'amazon.com',
            'meta.com',
            'apple.com',
            'netflix.com'
          ].map((domain) => (
            <Box
              key={domain}
              component="img"
              src={`https://logo.clearbit.com/${domain}`}
              alt={`${domain.split('.')[0]} logo`}
              sx={{
                height: 45,
                opacity: 0.7,
                transition: 'all 0.3s ease',
                filter: 'grayscale(100%)',
                '&:hover': {
                  opacity: 1,
                  filter: 'grayscale(0%)',
                  transform: 'scale(1.05)',
                },
              }}
            />
          ))}
        </Box>
      </Container>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Typography
          variant="h2"
          align="center"
          sx={{
            mb: 8,
            fontWeight: 700,
            fontSize: { xs: '2rem', md: '2.5rem' },
          }}
        >
          Everything you need for
          <br />
          successful prospecting
        </Typography>
        <Grid container spacing={4}>
          {FEATURES.map((feature) => (
            <Grid item xs={12} md={6} key={feature.title}>
              <Card
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                  borderRadius: 3,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: `0 10px 20px ${alpha(theme.palette.primary.main, 0.1)}`,
                  },
                }}
              >
                <Box
                  sx={{
                    mb: 2,
                    color: theme.palette.primary.main,
                    '& svg': { fontSize: 40 },
                  }}
                >
                  {feature.icon}
                </Box>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {feature.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Benefits Section */}
      <Box
        sx={{
          background: alpha(theme.palette.primary.main, 0.02),
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                sx={{
                  mb: 4,
                  fontWeight: 700,
                  fontSize: { xs: '2rem', md: '2.5rem' },
                }}
              >
                Why choose Bullseye?
              </Typography>
              <List>
                {BENEFITS.map((benefit) => (
                  <ListItem key={benefit} sx={{ py: 1 }}>
                    <ListItemIcon>
                      <CheckCircleIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary={benefit}
                      primaryTypographyProps={{
                        fontWeight: 500,
                      }}
                    />
                  </ListItem>
                ))}
              </List>
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/register')}
                sx={{
                  mt: 4,
                  py: 1.5,
                  px: 4,
                  borderRadius: 2,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                }}
              >
                Get Started Free
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/benefits-image.svg"
                alt="Bullseye Benefits"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 4,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  background: '#fff',
                  p: 2,
                  transform: 'perspective(1000px) rotateY(5deg)',
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Typography
          variant="h2"
          align="center"
          sx={{
            mb: 8,
            fontWeight: 700,
            fontSize: { xs: '2rem', md: '2.5rem' },
          }}
        >
          Loved by sales teams worldwide
        </Typography>
        <Grid container spacing={4}>
          {[1, 2, 3].map((testimonial) => (
            <Grid item xs={12} md={4} key={testimonial}>
              <Card
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                  borderRadius: 3,
                }}
              >
                <Stack spacing={3}>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ fontStyle: 'italic' }}
                  >
                    "Bullseye has transformed our sales process. The data accuracy and ease of use are unmatched in the industry."
                  </Typography>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar
                      sx={{
                        background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      }}
                    >
                      JD
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle1" fontWeight={600}>
                        John Doe
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Sales Director, TechCorp
                      </Typography>
                    </Box>
                  </Stack>
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          py: { xs: 8, md: 12 },
          color: '#fff',
        }}
      >
        <Container maxWidth="md">
          <Stack spacing={4} alignItems="center" textAlign="center">
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
              Ready to supercharge your sales?
            </Typography>
            <Typography variant="h5" sx={{ opacity: 0.9 }}>
              Join thousands of sales professionals using Bullseye to close more deals.
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/register')}
              sx={{
                py: 2,
                px: 6,
                borderRadius: 2,
                fontSize: '1.1rem',
                background: '#fff',
                color: theme.palette.primary.main,
                '&:hover': {
                  background: alpha('#fff', 0.9),
                },
              }}
            >
              Get Started Free
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
