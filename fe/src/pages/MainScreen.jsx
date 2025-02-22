import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {useState} from "react";
import Dashboard from "./Dashboard";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListItemText from "@mui/material/ListItemText";
import WalletIcon from "@mui/icons-material/Wallet";
import PaidIcon from "@mui/icons-material/Paid";
import Wallet from "./Wallet";
import Transactions from "./Transactions";
import {ListItem} from "@mui/material";
import Container from "@mui/material/Container";
import Statistics from "./Statistics";
import PieChartIcon from '@mui/icons-material/PieChart';

const drawerWidth = 240;
const mdTheme = createTheme();

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(7),
                },
            }),
        },
    }),
);

const MainScreen = () => {
    const [open, setOpen] = useState(false)
    const [content, setContent] = useState("Dashboard")
    const toggleDrawer = () => {
        setOpen(!open);
    };
    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{display: 'flex'}}>
                <CssBaseline/>
                <AppBar position="absolute" open={open}>
                    <Toolbar sx={{pr: '24px'}}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: '36px',
                                ...(open && {display: 'none'}),
                            }}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{flexGrow: 1}}
                        >
                            {content}
                        </Typography>
                        <IconButton
                            color="inherit"
                            href="/"
                        >
                            <ExitToAppIcon/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            px: [1],
                        }}
                    >
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon/>
                        </IconButton>
                    </Toolbar>
                    <Divider/>
                    <List component="nav">
                        <ListItem
                            disablePadding
                            sx={{display: 'block'}}
                            onClick={() => setContent("Dashboard")}
                        >
                            <ListItemButton>
                                <ListItemIcon>
                                    <DashboardIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Dashboard"/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem
                            disablePadding
                            sx={{display: 'block'}}
                            onClick={() => setContent("Wallet")}
                        >
                            <ListItemButton>
                                <ListItemIcon>
                                    <WalletIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Wallet"/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem
                            disablePadding
                            sx={{display: 'block'}}
                            onClick={() => setContent("Transactions")}
                        >
                            <ListItemButton>
                                <ListItemIcon>
                                    <PaidIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Transactions"/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem
                            disablePadding
                            sx={{display: 'block'}}
                            onClick={() => setContent("Statistics")}
                        >
                            <ListItemButton>
                                <ListItemIcon>
                                    <PieChartIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Statistics"/>
                            </ListItemButton>
                        </ListItem>
                        <Divider sx={{my: 1}}/>
                    </List>
                </Drawer>
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <Toolbar/>
                    <Container maxWidth="lg" sx={{mt: 4, mb: 4}}>
                        {content === "Dashboard" && <Dashboard/>}
                        {content === "Wallet" && <Wallet/>}
                        {content === "Transactions" && <Transactions/>}
                        {content === "Statistics" && <Statistics/>}
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default MainScreen;