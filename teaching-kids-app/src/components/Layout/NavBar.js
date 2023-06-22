import * as React from "react";
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

const NavBar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<ThemeProvider theme={theme}>
			<AppBar position='static'>
				<Container maxWidth='xl'>
					<Toolbar disableGutters>
						<Typography
							variant='h6'
							noWrap
							component='a'
							href='/'
							sx={{
								flexGrow: 1,
								display: { xs: "flex", lg: "flex" },
								fontFamily: "monospace",
								fontWeight: 700,
								letterSpacing: ".3rem",
								color: "yellow",
								textDecoration: "none",
							}}
						>
							Monsters's Wonderland
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
									onClick={handleCloseNavMenu}
									sx={{ my: 2, color: "white", display: "block" }}
									component={Link}
									to={page.path}
								>
									{page.name}
								</Button>
							))}
						</Box>

						<Box sx={{ flexGrow: 0, display: { xs: "flex", sm: "none" } }}>
							<IconButton
								size='large'
								aria-label='account of current user'
								aria-controls='menu-appbar'
								aria-haspopup='true'
								onClick={handleOpenNavMenu}
								color='inherit'
							>
								<MenuIcon />
							</IconButton>
							<Menu
								id='menu-appbar'
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
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: "block", sm: "none" },
								}}
							>
								{pages.map((page) => (
									<MenuItem
										key={page.name}
										onClick={handleCloseNavMenu}
										component={Link}
										to={page.path}
									>
										<Typography textAlign='center'>{page.name}</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</ThemeProvider>
	);
};
export default NavBar;