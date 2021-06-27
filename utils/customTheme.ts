import { createMuiTheme, responsiveFontSizes } from '@material-ui/core'

export const customTheme = responsiveFontSizes(
  createMuiTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 425,
        md: 768,
        lg: 1280,
        xl: 1920,
      },
    },
    palette: {
      primary: {
        main: '#e43d30;',
        contrastText: '#000000',
      },
      secondary: {
        main: '#ffd040',
        contrastText: '#000000',
      },
    },
    // only overrides can use CSS variables
    overrides: {
      MuiLink: {
        root: {
          color: 'var(--primary-color)',
          borderColor: 'var(--primary-color)',
          textDecoration: 'none',
        },
        underlineHover: {
          border: 'none',
          borderColor: 'transparent',
          '&:hover': {
            color: 'var(--secondary-color)',
            textDecoration: 'none',
            borderBottom: '4px solid var(--secondary-color)',
            transition: 'color 0.5s, border 0.5s;',
          },
          '&:focus': {
            color: 'var(--secondary-color)',
            textDecoration: 'none',
            borderBottom: '4px solid var(--secondary-color)',
            transition: 'color 0.5s, border 0.5s;',
          },
        },
      },
      MuiDrawer: {
        paper: {
          backgroundColor: 'var(--background-primary)',
          padding: '7px',
        },
        paperAnchorDockedRight: {
          borderLeft: '1px solid var(--background-secondary)',
        },
      },
      MuiTypography: {
        colorTextPrimary: {
          color: '#000000',
        },
        colorTextSecondary: {
          color: '#ffffff',
        },
        h1: {
          fontSize: '54px',
          fontWeight: 600,
          fontFamily:
            'Raleway, San Frediano, BloggerSans, Helvetica Neue, Helvetica, Arial, sans-serif',
          fontStyle: 'normal',
          textDecoration: 'none',
          letterSpacing: 'normal',
        },
        h2: {
          fontSize: '24px',
          fontWeight: 700,
          lineHeight: '36px',
          fontFamily:
            'Raleway, San Frediano, BloggerSans, Helvetica Neue, Helvetica, Arial, sans-serif',
          fontStyle: 'normal',
          textDecoration: 'none',
          letterSpacing: 'normal',
        },
        h3: {
          fontWeight: 700,
        },
        body2: {
          fontFamily:
            'Raleway, San Frediano, BloggerSans, Helvetica Neue, Helvetica, Arial, sans-serif',
        },
      },
      MuiButton: {
        root: {
          padding: '7px 0',
          fontSize: '15px',
          fontWeight: 400,
        },
      },
      MuiList: {
        root: {
          width: '100%',
        },
        padding: {
          paddingTop: 0,
          paddingBottom: 0,
        },
      },
      MuiListItem: {
        root: {
          paddingTop: '10px',
          paddingBottom: '10px',
          color: 'var(--primary-color)',
          fontWeight: 700,
          fontSize: '1em',
        },
      },
      MuiListItemText: {
        root: {
          marginTop: 0,
          marginBottom: 0,
        },
      },
      MuiSvgIcon: {
        root: {
          fontSize: '2rem',
          fontWeight: 700,
        },
      },
    },
  }),
)

customTheme.typography.h5 = {
  fontSize: '1em',
  [customTheme.breakpoints.up('md')]: {
    fontSize: '24px',
  },
}
