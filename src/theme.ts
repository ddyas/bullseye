import { createTheme, alpha } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary'];
    neutral: Palette['primary'];
  }
  interface PaletteOptions {
    tertiary: PaletteOptions['primary'];
    neutral: PaletteOptions['primary'];
  }
}

const primaryColor = '#2563EB';  // Modern blue
const secondaryColor = '#3B82F6'; // Lighter blue
const tertiaryColor = '#0EA5E9';  // Sky blue
const neutralColor = '#64748B';   // Slate
const successColor = '#10B981';   // Emerald
const warningColor = '#F59E0B';   // Amber
const errorColor = '#EF4444';     // Red
const backgroundColor = '#F8FAFC'; // Very light blue-gray

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: primaryColor,
      light: alpha(primaryColor, 0.8),
      dark: alpha(primaryColor, 1.2),
      contrastText: '#ffffff',
    },
    secondary: {
      main: secondaryColor,
      light: alpha(secondaryColor, 0.8),
      dark: alpha(secondaryColor, 1.2),
      contrastText: '#ffffff',
    },
    tertiary: {
      main: tertiaryColor,
      light: alpha(tertiaryColor, 0.8),
      dark: alpha(tertiaryColor, 1.2),
      contrastText: '#ffffff',
    },
    neutral: {
      main: neutralColor,
      light: alpha(neutralColor, 0.8),
      dark: alpha(neutralColor, 1.2),
      contrastText: '#ffffff',
    },
    success: {
      main: successColor,
      light: alpha(successColor, 0.8),
      dark: alpha(successColor, 1.2),
    },
    warning: {
      main: warningColor,
      light: alpha(warningColor, 0.8),
      dark: alpha(warningColor, 1.2),
    },
    error: {
      main: errorColor,
      light: alpha(errorColor, 0.8),
      dark: alpha(errorColor, 1.2),
    },
    background: {
      default: backgroundColor,
      paper: '#ffffff',
    },
    text: {
      primary: '#0F172A',
      secondary: '#475569',
    },
  },
  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h5: {
      fontSize: '1.125rem',
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.2,
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '8px 20px',
          fontWeight: 600,
          boxShadow: 'none',
          textTransform: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        contained: {
          '&:hover': {
            boxShadow: 'none',
          },
        },
        containedPrimary: {
          background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`,
          '&:hover': {
            background: `linear-gradient(135deg, ${alpha(primaryColor, 0.9)}, ${alpha(secondaryColor, 0.9)})`,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
          backgroundImage: 'none',
        },
        elevation1: {
          boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        },
        elevation2: {
          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: alpha(primaryColor, 0.5),
            },
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          fontSize: '0.875rem',
          minHeight: 48,
          '&.Mui-selected': {
            color: primaryColor,
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          height: 3,
          borderRadius: '3px 3px 0 0',
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 42,
          height: 26,
          padding: 0,
          margin: 8,
        },
        switchBase: {
          padding: 1,
          '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
              backgroundColor: primaryColor,
              opacity: 1,
              border: 0,
            },
          },
        },
        thumb: {
          width: 24,
          height: 24,
        },
        track: {
          borderRadius: 13,
          border: '1px solid #E9E9EA',
          backgroundColor: '#E9E9EA',
          opacity: 1,
          transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(primaryColor, 0.1),
          color: primaryColor,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          borderRadius: '8px',
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
        standardSuccess: {
          backgroundColor: alpha(successColor, 0.1),
          color: alpha(successColor, 0.9),
        },
        standardError: {
          backgroundColor: alpha(errorColor, 0.1),
          color: alpha(errorColor, 0.9),
        },
        standardWarning: {
          backgroundColor: alpha(warningColor, 0.1),
          color: alpha(warningColor, 0.9),
        },
        standardInfo: {
          backgroundColor: alpha(primaryColor, 0.1),
          color: alpha(primaryColor, 0.9),
        },
      },
    },
  },
});

export default theme;
