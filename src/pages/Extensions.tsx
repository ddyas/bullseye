/* eslint-disable */
import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Rating,
  Stack,
  useTheme,
  alpha,
} from '@mui/material';
import {
  Extension as ExtensionIcon,
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
  Twitter as TwitterIcon,
  GitHub as GitHubIcon,
  Analytics as AnalyticsIcon,
} from '@mui/icons-material';

const extensions = [
  {
    title: 'LinkedIn Integration',
    description: 'Seamlessly import and sync your LinkedIn connections. Get real-time updates when your contacts change jobs or update their profiles.',
    icon: <LinkedInIcon />,
    rating: 4.8,
    users: '10k+',
    status: 'Popular',
    action: 'Install'
  },
  {
    title: 'Email Finder Pro',
    description: 'Advanced email discovery tool with 95%+ accuracy. Verify emails in real-time and get alternative contact methods.',
    icon: <EmailIcon />,
    rating: 4.7,
    users: '5k+',
    status: 'Featured',
    action: 'Install'
  },
  {
    title: 'Twitter Insights',
    description: 'Track your contacts\' Twitter activity. Get notifications about relevant tweets and engagement opportunities.',
    icon: <TwitterIcon />,
    rating: 4.5,
    users: '3k+',
    status: 'New',
    action: 'Install'
  },
  {
    title: 'GitHub Connect',
    description: 'Perfect for tech recruiters. Track developers\' contributions and identify active open-source contributors.',
    icon: <GitHubIcon />,
    rating: 4.6,
    users: '2k+',
    status: 'Tech',
    action: 'Install'
  },
  {
    title: 'Analytics Dashboard',
    description: 'Powerful analytics and reporting. Track your network growth, engagement rates, and contact interaction patterns.',
    icon: <AnalyticsIcon />,
    rating: 4.9,
    users: '8k+',
    status: 'Premium',
    action: 'Upgrade'
  }
];

const Extensions = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 6 }}>
        <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
          <ExtensionIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />
          <Typography variant="h4" component="h1">
            Extensions Marketplace
          </Typography>
        </Stack>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Enhance your Bullseye experience with powerful extensions. Each extension is carefully vetted to ensure quality and security.
        </Typography>
        
        <Grid container spacing={3}>
          {extensions.map((extension, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: theme.shadows[8],
                  }
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                    <Box sx={{ 
                      p: 1.5,
                      borderRadius: 2,
                      background: alpha(theme.palette.primary.main, 0.1),
                      color: theme.palette.primary.main
                    }}>
                      {extension.icon}
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" gutterBottom>
                        {extension.title}
                      </Typography>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Rating value={extension.rating} precision={0.1} size="small" readOnly />
                        <Typography variant="body2" color="text.secondary">
                          ({extension.users} users)
                        </Typography>
                      </Stack>
                    </Box>
                    <Chip 
                      label={extension.status} 
                      size="small"
                      color={
                        extension.status === 'Premium' ? 'secondary' :
                        extension.status === 'Popular' ? 'primary' :
                        'default'
                      }
                      sx={{ 
                        borderRadius: 1,
                        fontWeight: 500
                      }}
                    />
                  </Stack>
                  <Typography variant="body2" color="text.secondary">
                    {extension.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button 
                    variant={extension.action === 'Upgrade' ? 'contained' : 'outlined'}
                    color={extension.action === 'Upgrade' ? 'secondary' : 'primary'}
                    fullWidth
                  >
                    {extension.action}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Extensions;
