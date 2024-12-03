import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Stepper,
  Step,
  StepLabel,
} from '@mui/material';
import {
  Check as CheckIcon,
  Extension as ExtensionIcon,
  Language as LanguageIcon,
  WebAsset as WebAssetIcon,
} from '@mui/icons-material';

const browsers = [
  {
    name: 'Chrome',
    icon: ExtensionIcon,
    downloadUrl: '#',
    users: '100k+',
    rating: 4.8,
  },
  {
    name: 'Firefox',
    icon: LanguageIcon,
    downloadUrl: '#',
    users: '50k+',
    rating: 4.7,
  },
  {
    name: 'Edge',
    icon: WebAssetIcon,
    downloadUrl: '#',
    users: '25k+',
    rating: 4.6,
  },
];

const features = [
  'Reveal contact information directly on LinkedIn',
  'Quick export to CSV',
  'Automatic contact saving',
  'Integration with CRM systems',
  'Bulk reveal operations',
];

const installSteps = [
  'Download the extension for your browser',
  'Click "Add to Browser" when prompted',
  'Log in with your Bullseye account',
  'Start revealing contacts on LinkedIn!',
];

const Extension: React.FC = () => {
  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Browser Extension
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Reveal contacts directly on LinkedIn with our browser extension
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Installation Steps
            </Typography>
            <Stepper orientation="vertical" sx={{ mt: 2 }}>
              {installSteps.map((step, index) => (
                <Step key={step} active={true}>
                  <StepLabel>{step}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Paper>

          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Features
            </Typography>
            <List>
              {features.map((feature) => (
                <ListItem key={feature}>
                  <ListItemIcon>
                    <CheckIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={feature} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Available For
          </Typography>
          {browsers.map((browser) => (
            <Card key={browser.name} sx={{ mb: 2 }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <browser.icon sx={{ fontSize: 40, mr: 2 }} />
                  <Box>
                    <Typography variant="h6">{browser.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {browser.users} users · {browser.rating} rating
                    </Typography>
                  </Box>
                </Box>
                <Button
                  variant="contained"
                  fullWidth
                  href={browser.downloadUrl}
                  target="_blank"
                >
                  Add to {browser.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Extension;
