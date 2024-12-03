/* eslint-disable */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  Card,
  CardContent,
  CardActions,
  LinearProgress,
  Skeleton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import {
  CreditCard as CreditIcon,
  ContactPhone as ContactIcon,
  Timeline as TimelineIcon,
} from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';

const Dashboard: React.FC = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [showCreditsDialog, setShowCreditsDialog] = React.useState(false);

  const stats = {
    credits: user?.credits || 0,
    contactsRevealed: 42, // This will be fetched from the API
    subscriptionDaysLeft: 25, // This will be calculated from user.subscription.expiresAt
  };

  const handleCreditPurchase = (credits: number) => {
    // Implement credit purchase logic here
    console.log(`Purchasing ${credits} credits`);
    setShowCreditsDialog(false);
  };

  if (!isAuthenticated || !user) {
    return (
      <Box sx={{ width: '100%' }}>
        <Skeleton variant="rectangular" height={200} sx={{ mb: 2 }} />
        <Grid container spacing={3}>
          {[1, 2, 3].map((item) => (
            <Grid item xs={12} md={4} key={item}>
              <Skeleton variant="rectangular" height={280} />
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }

  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Welcome back, {user.name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Here's an overview of your account
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h5" component="div" gutterBottom>
                Credit Balance
              </Typography>
              <Typography variant="h3" color="primary">
                {stats.credits}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Credits available for revealing contacts
              </Typography>
            </CardContent>
            <CardActions sx={{ p: 2, pt: 0 }}>
              <Button 
                variant="contained" 
                fullWidth
                onClick={() => setShowCreditsDialog(true)}
              >
                Top Up Credits
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h5" component="div" gutterBottom>
                Contacts Revealed
              </Typography>
              <Typography variant="h3" color="primary">
                {stats.contactsRevealed}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Total contacts revealed this month
              </Typography>
            </CardContent>
            <CardActions sx={{ p: 2, pt: 0 }}>
              <Button 
                variant="contained" 
                fullWidth
                onClick={() => navigate('/app/contacts')}
                startIcon={<ContactIcon />}
              >
                Find Contacts
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h5" component="div" gutterBottom>
                Subscription Status
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Typography variant="h3" color="primary" sx={{ mr: 1 }}>
                  {stats.subscriptionDaysLeft}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  days left
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={(stats.subscriptionDaysLeft / 30) * 100}
                sx={{ mb: 2 }}
              />
            </CardContent>
            <CardActions sx={{ p: 2, pt: 0 }}>
              <Button 
                variant="contained" 
                fullWidth
                onClick={() => navigate('/app/subscription')}
                startIcon={<CreditIcon />}
              >
                Manage Subscription
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <Dialog 
        open={showCreditsDialog} 
        onClose={() => setShowCreditsDialog(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Top Up Credits</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Card sx={{ cursor: 'pointer', height: '100%' }} onClick={() => handleCreditPurchase(100)}>
                <CardContent>
                  <Typography variant="h6">100 Credits</Typography>
                  <Typography variant="h4">$49</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Best for small teams
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card sx={{ cursor: 'pointer', height: '100%' }} onClick={() => handleCreditPurchase(250)}>
                <CardContent>
                  <Typography variant="h6">250 Credits</Typography>
                  <Typography variant="h4">$99</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Most popular
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card sx={{ cursor: 'pointer', height: '100%' }} onClick={() => handleCreditPurchase(500)}>
                <CardContent>
                  <Typography variant="h6">500 Credits</Typography>
                  <Typography variant="h4">$179</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Best value
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card sx={{ cursor: 'pointer', height: '100%' }} onClick={() => handleCreditPurchase(1000)}>
                <CardContent>
                  <Typography variant="h6">1000 Credits</Typography>
                  <Typography variant="h4">$299</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Enterprise ready
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowCreditsDialog(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Dashboard;
