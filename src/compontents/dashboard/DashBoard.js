import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link, Outlet } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';
import "./Dashboard.css"
import useUserData from './../../hooks/useUserData';

const drawerWidth = 240;
const pages = ['Products', 'Pricing', 'Blog'];


const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

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
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function MiniDrawer() {
    const { user, singOutUsers } = useAuth()
    const { userData } = useUserData()
    console.log(userData)

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h4'>DS</Typography>

                    <Link to="/">
                        <Button


                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Home
                        </Button>
                    </Link>
                    <Link to="/about">
                        <Button


                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            About Us
                        </Button>
                    </Link>

                    {user.email ? <Link to="/login">
                        <Button onClick={singOutUsers}


                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Logout
                        </Button>
                    </Link> : <Link to="/login">
                        <Button


                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Login
                        </Button>
                    </Link>}


                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>

                </DrawerHeader>
                <Divider />
                <List>
                    <div className='imgDiv'>
                        <img className='imgStyle' src={user.photoURL} alt="" />

                    </div>
                    <div className='imgDiv'>
                        <h3>{user.displayName}</h3><br /><br /><br />
                        <hr />
                        <p>({userData.role})</p>

                    </div>


                    {/* {[, 'QuizExam', "AddTeachers", "AddStudent", "AddLessons", "CreateAdmin"].map((text, index) => (
                        
                    ))} */}
                    {
                        (userData.role == "Student" || userData.role == "Teacher" || userData.role == "Admin") && <Link to='MYClasses'>
                            <ListItemButton
                                key='MYClasses'
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <MailIcon />
                                </ListItemIcon>
                                <ListItemText primary='MYClasses' sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </Link>
                    }
                    {
                        (userData.role == "Student" || userData.role == "Teacher" || userData.role == "Admin") && <Link to='AnnounceMent'>
                            <ListItemButton
                                key='AnnounceMent'
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <MailIcon />
                                </ListItemIcon>
                                <ListItemText primary='AnnounceMent' sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </Link>
                    }
                    {
                        (userData.role == "Student" || userData.role == "Teacher" || userData.role == "Admin") && <Link to='QuizExam'>
                            <ListItemButton
                                key='QuizExam'
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <MailIcon />
                                </ListItemIcon>
                                <ListItemText primary='QuizExam' sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </Link>
                    }
                    {
                        (userData.role == "Teacher" || userData.role == "Admin") &&
                        <Link to='AddLEQ'>
                            <ListItemButton
                                key='AddLEQ'
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <MailIcon />
                                </ListItemIcon>
                                <ListItemText primary='AddLEQ' sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </Link>
                    }
                    {
                        (userData.role == "Teacher" || userData.role == "Admin") &&
                        <Link to='AddStudent'>
                            <ListItemButton
                                key='AddStudent'
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <MailIcon />
                                </ListItemIcon>
                                <ListItemText primary='AddStudent' sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </Link>
                    }
                    {
                        (userData.role == "Admin") &&
                        <Link to='AddTeachers'>
                            <ListItemButton
                                key='AddTeachers'
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <MailIcon />
                                </ListItemIcon>
                                <ListItemText primary='AddTeachers' sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </Link>
                    }



                    {
                        userData.role == "Admin" && <Link to='CreateAdmin'>
                            <ListItemButton
                                key='CreateAdmin'
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <MailIcon />
                                </ListItemIcon>
                                <ListItemText primary='CreateAdmin' sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </Link>
                    }

                    <Button onClick={singOutUsers} fullWidth variant='contained'>LOgout</Button>

                </List>



            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

                <Outlet>

                </Outlet>


            </Box>
        </Box>
    );
}
