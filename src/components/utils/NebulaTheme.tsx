import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const NebulaTheme = createMuiTheme({
  //   typography: {
  //     useNextVariants: true
  //   },
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#2b8eff"
      // footerDark: '#401500',
      //   footerDark: "#1d1d1d"
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#0066ff",
      main: "#ff5666",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#ffffff"
    }
    // error: will use the default color
  },
  overrides: {
    MuiInputBase: {
      root: {
        fontSize: "12px"
      }
      //   inputType: {
      //     height: "inherit"
      //   }
    },
    MuiOutlinedInput: {
      multiline: {
        padding: "12px !important"
      },
      input: {
        padding: "12px"
      }
    },
    MuiFormLabel: {
      root: {
        fontSize: "12px"
      }
    },
    MuiTableCell: {
      root: {
        fontSize: "12px"
      }
    },
    MuiInputLabel: {
      outlined: {
        transform: "translate(14px, 13px) scale(1)"
      }
    },
    // MuiPrivateTextarea: {
    //   textarea: {
    //     padding: "0px !important"
    //   }
    // },
    MuiFormControl: {
      marginNormal: {
        marginTop: "8px",
        marginBottom: "8px"
      },
      root: {
        width: "100%"
      }
    },
    MuiTypography: {
      h4: {
        fontSize: "20px"
      },
      subtitle2: {
        fontSize: "12px"
      },
      paragraph: {
        fontSize: "12px"
      },
      body1: {
        fontSize: "12px"
      }
    },
    MuiButton: {
      label: {
        fontSize: "12px"
      },
      root: {
        marginTop: "8px",
        maringBottom: "8px",
        fontSize: "12px",
        textTransform: "none"
      }
    },
    MuiMenuItem: {
      root: {
        fontSize: "12px"
      }
    },
    MuiCheckbox: {
      root: {
        padding: "0px"
      }
    },
    MuiExpansionPanelSummary: {
      root: {
        marginTop: "4px",
        backgroundColor: "#2b8eff",
        borderRadius: "5px",
        color: "white",
        "&$expanded": {
          borderRadius: "5px 5px 0px 0px"
        }
      },
      content: {
        color: "white !important",
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: "12px"
      },
      // expanded: {
      //   borderRadius: "5px 5px 0px 0px"
      // },
      expandIcon: {
        color: "white"
      }
    },
    MuiPaper: {
      root: {
        "&::before": {
          backgroundColor: "transparent !important"
        }
      },
      rounded: {
        borderRadius: "5px !important"
      }
    },
    MuiFormControlLabel: {
      root: {
        marginLeft: "0px",
        // marginTop: "8px",
        marginBottom: "8px"
      },
      label: {
        fontSzie: "12px",
        color: "hsl(0,0%,50%)",
        marginLeft: "8px"
      }
    }
  }
});

export default NebulaTheme;
