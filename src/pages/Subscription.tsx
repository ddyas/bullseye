import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  useTheme,
} from '@mui/material';
import {
  Check as CheckIcon,
  Star as StarIcon,
} from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';

const plans = [
  {
    name: 'Starter',
    price: 0,
    period: '7 days',
    description: 'Perfect for trying out Bullseye',
    features: [
      'Up to 50 contact reveals',
      'Basic search filters',
      'Email support',
      '7-day trial period',
    ],
    contactLimit: 50,
    isPopular: false,
    isTrial: true,
  },
  {
    name: 'Growth',
    price: 49,
    period: 'per month',
    description: 'For growing businesses',
    features: [
      'Up to 800 contact reveals per month',
      'Advanced search filters',
      'Priority email support',
      'Export to CSV',
      'Browser extension',
    ],
    contactLimit: 800,
    isPopular: true,
    isTrial: false,
  },
  {
    name: 'Scale',
    price: 99,
    period: 'per month',
    description: 'For scaling teams',
    features: [
      'Up to 2,500 contact reveals per month',
      'Team collaboration',
      'API access',
      'Premium support',
      'Custom integrations',
    ],
    contactLimit: 2500,
    isPopular: false,
    isTrial: false,
  },
  {
    name: 'Enterprise',
    price: 249,
    period: 'per month',
    description: 'For large organizations',
    features: [
      'Up to 10,000 contact reveals per month',
      'Dedicated account manager',
      'Custom contract',
      'SLA guarantee',
      'Advanced analytics',
      'White-label options',
    ],
    contactLimit: 10000,
    isPopular: false,
    isTrial: false,
  },
];

const Subscription: React.FC = () => {
  const theme = useTheme();
  const { user } = useAuth();

  const handleSubscribe = (planName: string) => {
    // Implement subscription logic
    console.log(`Subscribing to ${planName} plan`);
  };

  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Subscription Plans
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Choose the perfect plan for your business needs
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {plans.map((plan) => (
          <Grid item xs={12} md={6} lg={3} key={plan.name}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                border: plan.isPopular ? `2px solid ${theme.palette.primary.main}` : undefined,
              }}
            >
              {plan.isPopular && (
                <Chip
                  label="Most Popular"
                  color="primary"
                  size="small"
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                  }}
                />
              )}
              {plan.isTrial && (
                <Chip
                  label="Free Trial"
                  color="secondary"
                  size="small"
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                  }}
                />
              )}
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="div" gutterBottom>
                  {plan.name}
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="h3" component="span">
                    ${plan.price}
                  </Typography>
                  <Typography variant="subtitle1" component="span" color="text.secondary">
                    /{plan.period}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {plan.description}
                </Typography>
                <List dense>
                  {plan.features.map((feature) => (
                    <ListItem key={feature}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <CheckIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary={feature} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
              <CardActions sx={{ p: 2, pt: 0 }}>
                <Button
                  variant={plan.isPopular ? "contained" : "outlined"}
                  fullWidth
                  onClick={() => handleSubscribe(plan.name)}
                >
                  {user?.subscription?.plan === plan.name ? 'Current Plan' : 'Subscribe'}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Subscription;
