import React, { Component } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

const pages = [
  { name: "About", path: "/About" },
  { name: "Games", path: "/Games" },
  { name: "Spline", path: "/Spline" },
];

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 450,
      md: 800,
      lg: 1280,
      xl: 1920,
    },
  },
});

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorElNav: null,
    };
  }

  handleOpenNavMenu = (event) => {
    this.setState({ anchorElNav: event.currentTarget });
  };

  handleCloseNavMenu = () => {
    this.setState({ anchorElNav: null });
  };

  render() {
    const { anchorElNav } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <AppBar position="static" style={{ backgroundColor: "#fbd14b" }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component={Link}
                to="/"
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex", lg: "flex" },
                  fontFamily: "Comic Sans MS",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "#ff00cc",
                  textDecoration: "none",
                }}
              >
                Monster's Wonderland
              </Typography>

              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", sm: "flex" },
                  justifyContent: "flex-end",
                }}
              >
                {pages.map((page) => (
                  <Button
                    key={page.name}
                    onClick={this.handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      fontFamily: "Comic Sans MS",
                      fontSize: "1rem",
                      textTransform: "none",
                      borderRadius: "20px",
                      backgroundColor: "#ff4081",
                      padding: "5px 20px",
                      marginRight: "10px",
                    }}
                    component={Link}
                    to={page.path}
                  >
                    {page.name}
                  </Button>
                ))}
              </Box>

              <Box sx={{ flexGrow: 0, display: { xs: "flex", sm: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="menu"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={this.handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={this.handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", sm: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem
                      key={page.name}
                      onClick={this.handleCloseNavMenu}
                      component={Link}
                      to={page.path}
                      sx={{
                        fontFamily: "Comic Sans MS",
                        fontSize: "1rem",
                        textTransform: "none",
                      }}
                    >
                      {page.name}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    );
  }
}

export default NavBar;