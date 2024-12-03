/* eslint-disable */

import React, { useState } from 'react';
import {
  Box,
  Paper,
  Tab,
  Tabs,
  Typography,
  Button,
  Stack,
  Avatar,
  TextField,
  Switch,
  FormControlLabel,
  Grid,
  IconButton,
  Divider,
  alpha,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import { Edit as EditIcon, Save as SaveIcon, Close as CloseIcon } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`settings-tabpanel-${index}`}
      aria-labelledby={`settings-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `settings-tab-${index}`,
    'aria-controls': `settings-tabpanel-${index}`,
  };
}

export default function Settings() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [editMode, setEditMode] = useState(false);
  const [notifications, setNotifications] = useState({
    newContact: true,
    messageReceived: true,
    profileViews: false,
    weeklyDigest: true,
    productUpdates: true,
  });

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleNotificationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNotifications({
      ...notifications,
      [event.target.name]: event.target.checked,
    });
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <Box sx={{ 
      maxWidth: 1200, 
      mx: 'auto', 
      p: { xs: 2, sm: 3 },
      minHeight: '100vh',
      background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)}, ${alpha(theme.palette.secondary.main, 0.05)})`,
    }}>
      <Paper 
        elevation={0}
        sx={{ 
          borderRadius: 3,
          overflow: 'hidden',
          border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
          backdropFilter: 'blur(20px)',
          background: alpha('#fff', 0.9),
        }}
      >
        <Box sx={{ 
          p: 3, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
        }}>
          <Typography variant="h4" fontWeight="bold" color="primary">
            Settings
          </Typography>
          <Button
            variant="contained"
            startIcon={editMode ? <SaveIcon /> : <EditIcon />}
            onClick={toggleEditMode}
            sx={{
              px: 3,
              py: 1,
              borderRadius: 2,
              background: editMode 
                ? `linear-gradient(135deg, ${theme.palette.success.main}, ${alpha(theme.palette.success.main, 0.8)})`
                : `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            }}
          >
            {editMode ? 'Save Changes' : 'Edit Profile'}
          </Button>
        </Box>

        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs 
              value={value} 
              onChange={handleChange} 
              variant="scrollable"
              scrollButtons="auto"
              sx={{ 
                px: 3,
                '& .MuiTabs-indicator': {
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                }
              }}
            >
              <Tab label="Personal Details" {...a11yProps(0)} />
              <Tab label="Professional Info" {...a11yProps(1)} />
              <Tab label="Company Details" {...a11yProps(2)} />
              <Tab label="Preferences" {...a11yProps(3)} />
            </Tabs>
          </Box>

          <TabPanel value={value} index={0}>
            <Stack spacing={4}>
              <Box sx={{ textAlign: 'center', mb: 2 }}>
                <Avatar
                  sx={{
                    width: 120,
                    height: 120,
                    mx: 'auto',
                    mb: 2,
                    border: `4px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  }}
                >
                  JD
                </Avatar>
                <Button
                  variant="outlined"
                  size="small"
                  disabled={!editMode}
                  sx={{ 
                    borderRadius: 5,
                    px: 3,
                    borderColor: alpha(theme.palette.primary.main, 0.2),
                    '&:hover': {
                      borderColor: theme.palette.primary.main,
                      background: alpha(theme.palette.primary.main, 0.05),
                    }
                  }}
                >
                  Change Photo
                </Button>
              </Box>

              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    variant="outlined"
                    disabled={!editMode}
                    defaultValue="John"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    variant="outlined"
                    disabled={!editMode}
                    defaultValue="Doe"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    disabled={!editMode}
                    defaultValue="john.doe@example.com"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Phone"
                    variant="outlined"
                    disabled={!editMode}
                    defaultValue="+1 (555) 123-4567"
                  />
                </Grid>
              </Grid>
            </Stack>
          </TabPanel>

          <TabPanel value={value} index={1}>
            <Stack spacing={4}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Job Title"
                    variant="outlined"
                    disabled={!editMode}
                    defaultValue="Senior Recruiter"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Company"
                    variant="outlined"
                    disabled={!editMode}
                    defaultValue="Tech Talents Inc."
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth disabled={!editMode}>
                    <InputLabel>Industry</InputLabel>
                    <Select
                      defaultValue="Technology"
                      label="Industry"
                      sx={{ 
                        borderRadius: 2,
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: alpha(theme.palette.primary.main, 0.2),
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: theme.palette.primary.main,
                        },
                      }}
                    >
                      <MenuItem value="Technology">Technology</MenuItem>
                      <MenuItem value="Healthcare">Healthcare</MenuItem>
                      <MenuItem value="Finance">Finance</MenuItem>
                      <MenuItem value="Education">Education</MenuItem>
                      <MenuItem value="Manufacturing">Manufacturing</MenuItem>
                      <MenuItem value="Retail">Retail</MenuItem>
                      <MenuItem value="Media">Media</MenuItem>
                      <MenuItem value="Professional Services">Professional Services</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Years of Experience"
                    variant="outlined"
                    disabled={!editMode}
                    defaultValue="8"
                    type="number"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="LinkedIn Profile"
                    variant="outlined"
                    disabled={!editMode}
                    defaultValue="https://linkedin.com/in/johndoe"
                  />
                </Grid>
              </Grid>

              <Box sx={{ 
                p: 3, 
                borderRadius: 2, 
                bgcolor: alpha(theme.palette.primary.main, 0.03),
                border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
              }}>
                <Typography variant="h6" sx={{ mb: 3, color: theme.palette.text.secondary }}>
                  Skills & Expertise
                </Typography>
                <TextField
                  fullWidth
                  label="Core Skills"
                  variant="outlined"
                  disabled={!editMode}
                  defaultValue="Technical Recruiting, Talent Acquisition, Sourcing, Interviewing, Employer Branding"
                  multiline
                  rows={2}
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Industries of Focus"
                  variant="outlined"
                  disabled={!editMode}
                  defaultValue="Software Development, Data Science, Cloud Computing, AI/ML, DevOps"
                  multiline
                  rows={2}
                />
              </Box>
            </Stack>
          </TabPanel>

          <TabPanel value={value} index={2}>
            <Stack spacing={4}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth disabled={!editMode}>
                    <InputLabel>Company Size</InputLabel>
                    <Select
                      defaultValue="51-200"
                      label="Company Size"
                      sx={{ 
                        borderRadius: 2,
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: alpha(theme.palette.primary.main, 0.2),
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: theme.palette.primary.main,
                        },
                      }}
                    >
                      <MenuItem value="1-10">1-10 employees</MenuItem>
                      <MenuItem value="11-50">11-50 employees</MenuItem>
                      <MenuItem value="51-200">51-200 employees</MenuItem>
                      <MenuItem value="201-500">201-500 employees</MenuItem>
                      <MenuItem value="501+">501+ employees</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth disabled={!editMode}>
                    <InputLabel>Company Type</InputLabel>
                    <Select
                      defaultValue="Agency"
                      label="Company Type"
                      sx={{ 
                        borderRadius: 2,
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: alpha(theme.palette.primary.main, 0.2),
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: theme.palette.primary.main,
                        },
                      }}
                    >
                      <MenuItem value="Agency">Agency</MenuItem>
                      <MenuItem value="In-house">In-house</MenuItem>
                      <MenuItem value="Startup">Startup</MenuItem>
                      <MenuItem value="Enterprise">Enterprise</MenuItem>
                      <MenuItem value="Consulting">Consulting</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>

              <Box sx={{ 
                p: 3, 
                borderRadius: 2, 
                bgcolor: alpha(theme.palette.primary.main, 0.03),
                border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
              }}>
                <Typography variant="h6" sx={{ mb: 3, color: theme.palette.text.secondary }}>
                  Recruiting Focus
                </Typography>
                <TextField
                  fullWidth
                  label="Primary Recruiting Areas"
                  variant="outlined"
                  disabled={!editMode}
                  defaultValue="Software Engineering, Product Management, Data Science"
                  multiline
                  rows={2}
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Target Markets"
                  variant="outlined"
                  disabled={!editMode}
                  defaultValue="United States, Canada, United Kingdom, Australia"
                  multiline
                  rows={2}
                />
              </Box>

              <Box sx={{ 
                p: 3, 
                borderRadius: 2, 
                bgcolor: alpha(theme.palette.primary.main, 0.03),
                border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
              }}>
                <Typography variant="h6" sx={{ mb: 3, color: theme.palette.text.secondary }}>
                  Company Description
                </Typography>
                <TextField
                  fullWidth
                  label="About Your Company"
                  variant="outlined"
                  disabled={!editMode}
                  defaultValue="Tech Talents Inc. is a leading technical recruiting agency specializing in placing top-tier technology professionals across innovative companies worldwide. We pride ourselves on our data-driven approach and deep understanding of the tech industry."
                  multiline
                  rows={4}
                />
              </Box>
            </Stack>
          </TabPanel>

          <TabPanel value={value} index={3}>
            <Stack spacing={3}>
              <Typography variant="h6" sx={{ mb: 2, color: theme.palette.text.secondary }}>
                Email Notifications
              </Typography>
              
              <Box sx={{ 
                p: 3, 
                borderRadius: 2, 
                bgcolor: alpha(theme.palette.primary.main, 0.03),
                border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
              }}>
                <Stack spacing={2}>
                  {Object.entries(notifications).map(([key, checked]) => (
                    <FormControlLabel
                      key={key}
                      control={
                        <Switch
                          checked={checked}
                          onChange={handleNotificationChange}
                          name={key}
                          disabled={!editMode}
                        />
                      }
                      label={
                        <Typography sx={{ color: theme.palette.text.primary }}>
                          {key.split(/(?=[A-Z])/).join(' ')}
                        </Typography>
                      }
                    />
                  ))}
                </Stack>
              </Box>

              <Typography variant="h6" sx={{ mt: 4, mb: 2, color: theme.palette.text.secondary }}>
                Language & Region
              </Typography>
              
              <Box sx={{ 
                p: 3, 
                borderRadius: 2, 
                bgcolor: alpha(theme.palette.primary.main, 0.03),
                border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
              }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Language"
                      variant="outlined"
                      disabled={!editMode}
                      defaultValue="English (US)"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Time Zone"
                      variant="outlined"
                      disabled={!editMode}
                      defaultValue="(GMT-08:00) Pacific Time"
                    />
                  </Grid>
                </Grid>
              </Box>
            </Stack>
          </TabPanel>
        </Box>
      </Paper>
    </Box>
  );
}
