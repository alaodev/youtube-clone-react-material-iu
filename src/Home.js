import React from 'react';
import {
    makeStyles,
    AppBar,
    Toolbar,
    IconButton,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Divider,
    ListItemIcon,
    Box,
    Typography,
    ListSubheader,
    Grid,
    Hidden,
    Switch
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import AddCircle from '@material-ui/icons/AddCircle';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';

import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        backgroundColor: theme.palette.background.dark,
    },
    appBar: {
        boxShadow: 'none',
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
        borderRight: 'none',
    },
    menuIcon: {
        marginRight: theme.spacing(5),
        marginLeft: theme.spacing(6),
    },
    logo: {
        height: 25,
    },
    grow: {
        flexGrow: 1,
    },
    icons: {
        marginRight: theme.spacing(5),
    },
    ListItemText: {
        fontSize: 14,
    },
    listItem: {
        paddingTop: 4,
        paddingBottom: 4,
    },
    subheader: {
        textTransform: 'uppercase',
    },
}));

const videos = [
    {
        id: 1,
        title:
            'YOUTUBE INTERFACE CLONE - React e Material UI',
        channel: 'AlaoDev',
        views: '11 mi de visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb.png',
    },
    {
        id: 2,
        title:
            'YOUTUBE INTERFACE CLONE - React e Material UI',
        channel: 'AlaoDev',
        views: '11 mi de visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb.png',
    },
    {
        id: 3,
        title:
            'YOUTUBE INTERFACE CLONE - React e Material UI',
        channel: 'AlaoDev',
        views: '11 mi de visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb.png',
    },
    {
        id: 4,
        title:
            'YOUTUBE INTERFACE CLONE - React e Material UI',
        channel: 'AlaoDev',
        views: '11 mi de visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb.png',
    },
    {
        id: 5,
        title:
            'YOUTUBE INTERFACE CLONE - React e Material UI',
        channel: 'AlaoDev',
        views: '11 mi de visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb.png',
    },
    {
        id: 6,
        title:
            'YOUTUBE INTERFACE CLONE - React e Material UI',
        channel: 'AlaoDev',
        views: '11 mi de visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb.png',
    },
    {
        id: 7,
        title:
            'YOUTUBE INTERFACE CLONE - React e Material UI',
        channel: 'AlaoDev',
        views: '11 mi de visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb.png',
    },
    {
        id: 8,
        title:
            'YOUTUBE INTERFACE CLONE - React e Material UI',
        channel: 'AlaoDev',
        views: '11 mi de visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb.png',
    },
    {
        id: 9,
        title:
            'YOUTUBE INTERFACE CLONE - React e Material UI',
        channel: 'AlaoDev',
        views: '11 mi de visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb.png',
    },
    {
        id: 10,
        title:
            'YOUTUBE INTERFACE CLONE - React e Material UI',
        channel: 'AlaoDev',
        views: '11 mi de visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb.png',
    },
    {
        id: 11,
        title:
            'YOUTUBE INTERFACE CLONE - React e Material UI',
        channel: 'AlaoDev',
        views: '11 mi de visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb.png',
    },
    {
        id: 12,
        title:
            'YOUTUBE INTERFACE CLONE - React e Material UI',
        channel: 'AlaoDev',
        views: '11 mi de visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb.png',
    },


];

export default function Home(props) {

    const classes = useStyles();
    const theme = useTheme();

    return (
        <div className={classes.root}>
            <AppBar color="inherit" className={classes.appBar}>
                <Toolbar>
                    <IconButton className={classes.menuIcon} >
                        <MenuIcon />
                    </IconButton>
                    <img src={theme.palette.type === 'dark' ? "/images/branco.png" : "/images/preto.png" } alt="logo" className={classes.logo} />
                    <div className={classes.grow} />
                    <Brightness4Icon style={{color: props.darkMode ? '#fff' : '#757575'}} />
                    <Switch 
                        value={props.darkMode} 
                        onChange={() => props.setDarkMode(!props.darkMode)} 
                    />
                    <Brightness7Icon style={{color: props.darkMode ? '#fff' : '#757575'}} />
                    <IconButton className={classes.icons}>
                        <VideoCallIcon />
                    </IconButton>
                    <IconButton className={classes.icons}>
                        <AppsIcon />
                    </IconButton>
                    <IconButton className={classes.icons}>
                        <MoreVertIcon />
                    </IconButton>
                    <Button startIcon={<AccountCircleIcon />} variant='outlined' color="secondary">
                        FAZER LOGIN
                    </Button>
                </Toolbar>
            </AppBar>
            <Box display="flex">

                <Hidden mdDown>
                    <Drawer

                        className={classes.drawer}
                        variant="permanent"
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        <Toolbar />
                        <div className={classes.drawerContainer}>
                            <List>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.ListItemText,
                                        }}
                                        primary={'Início'}
                                    />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<WhatshotIcon />}</ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.ListItemText,
                                        }}
                                        primary={'Em Alta'}
                                    />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.ListItemText,
                                        }}
                                        primary={'Inscrições'}
                                    />
                                </ListItem>
                            </List>
                            <Divider />
                            <List>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<VideoLibraryIcon />}</ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.ListItemText,
                                        }}
                                        primary={'Biblioteca'}
                                    />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<HistoryIcon />}</ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.ListItemText,
                                        }}
                                        primary={'Histórico'}
                                    />
                                </ListItem>
                            </List>
                            <Divider />
                            <Box p={7}>
                                <Typography variant='body2'>
                                    Faça login para curtir vídeos, comentar e inscrever.
                                </Typography>
                                <Box mt={2}>
                                    <Button
                                        variant='outlined'
                                        color='secondary'
                                        startIcon={<AccountCircleIcon />}
                                    >
                                        Fazer login
                                    </Button>
                                </Box>
                            </Box>
                            <Divider />
                            <List
                                component='nav'
                                aria-labelledby='nested-list-subheader'
                                subheader={
                                    <ListSubheader
                                        component='div'
                                        id='nested-list-subheader'
                                        className={classes.subheader}
                                    >
                                        O Melhor do youtube
                                    </ListSubheader>
                                }
                            >
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>
                                        <AddCircle />
                                    </ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.listItemText,
                                        }}
                                        primary={'Música'}
                                    />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>
                                        <AddCircle />
                                    </ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.listItemText,
                                        }}
                                        primary={'Esportes'}
                                    />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>
                                        <AddCircle />
                                    </ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.listItemText,
                                        }}
                                        primary={'Jogos'}
                                    />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>
                                        <AddCircle />
                                    </ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.listItemText,
                                        }}
                                        primary={'Filmes'}
                                    />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>
                                        <AddCircle />
                                    </ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.listItemText,
                                        }}
                                        primary={'Notícias'}
                                    />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>
                                        <AddCircle />
                                    </ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.listItemText,
                                        }}
                                        primary={'Ao vivo'}
                                    />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>
                                        <AddCircle />
                                    </ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.listItemText,
                                        }}
                                        primary={'Destaques'}
                                    />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>
                                        <AddCircle />
                                    </ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.listItemText,
                                        }}
                                        primary={'Videos 360'}
                                    />
                                </ListItem>
                            </List>
                        </div>
                    </Drawer>
                </Hidden>

                <Box p={8}>
                    <Toolbar />
                    <Typography
                        variant='h5'
                        color='textPrimary'
                        style={{ fontWeight: 600 }}
                    >
                        Recomendados
                    </Typography>

                    <Grid container spacing={3}>
                        {
                            videos.map((item, index) => (
                                <Grid item lg={3} md={4} sm={6} xs={12}>
                                    <Box>
                                        <img
                                            style={{ width: '100%' }}
                                            alt={item.title}
                                            src={item.thumb}
                                        />
                                        <Box>
                                            <Typography
                                                style={{ fontWeight: 600 }}
                                                gutterBottom
                                                variant='body1'
                                                color='textPrimary'
                                            >
                                                {item.title}
                                            </Typography>
                                            <Typography
                                                display='block'
                                                variant='body2'
                                                color='textSecondary'
                                            >
                                                {item.channel}
                                            </Typography>
                                            <Typography variant='body2' color='textSecondary'>
                                                {`${item.views} • ${item.date}`}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Box>
            </Box>
        </div>
    );
}