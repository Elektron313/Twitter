import React from 'react';
import {Grid, Container, TextField, Paper, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {grey} from '@material-ui/core/colors';
import Tweet from '../components/Tweet';
import SideMenu from '../components/SideMenu';

export const homeStyles = makeStyles((theme) => ({
    sideMenuList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        width: 230,
    },
    logo: {
        fontSize: 36,
    },
    sideMenuListItem: {
        '& > div': {
            display: 'inline-flex',
            alignItems: 'center',
            padding: '0 25px 0 20px',
            borderRadius: 30,
            height: 50,
            marginLeft: -10,
            marginBottom: 15,
            cursor: 'pointer',
            transition: 'background-color 0,1s ease-in-out',
            '&:hover': {
                backgroundColor: 'rgba(29, 161, 242, 0.1)',
                '& h6': {
                    color: theme.palette.primary.main,
                },
                '& svg path': {
                    fill: theme.palette.primary.main,
                },
            }
        }

    },
    sideMenuTweetButton: {
        padding: theme.spacing(3),
        marginTop: theme.spacing(2),
    },
    sideMenuListItemLabel: {
        fontWeight: 700,
        fontSize: 20,
        marginLeft: 15,
    },
    sideMenuListItemIcon: {
        fontSize: 32,
    },
    wrapper: {
        height: '100vh',
    },
    tweetsWrapper: {
        borderRadius: 0,
        height: '100%',
        borderTop: '0',
        borderBottom: '0',
    },
    tweetHeader: {
        borderTop: '0',
        borderLeft: '0',
        borderRight: '0',
        padding: '10px 15px',

        '& h6': {
            fontWeight: 800,
        }
    },
    tweet: {
        paddingTop: 15,
        paddingLeft: 20,
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'rgb(245,248,250)',
        }
    },
    tweetAvatar: {
        width: theme.spacing(5),
        height: theme.spacing(5),
    },
    tweetFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        width: 450,
        position: 'relative',
        left: -10,
    },
    tweetFooterIcon: {
        fontSize: '20px'
    },
    tweetsUserName: {
        color: grey[500],
    }
}));

const Home: React.FC = () => {

    const classes = homeStyles();

    return (
        <Container maxWidth={'lg'} className={classes.wrapper}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <SideMenu classes={classes}/>
                </Grid>
                <Grid item xs={6}>

                    <Paper variant={'outlined'} className={classes.tweetsWrapper}>
                        <Paper variant={'outlined'}  className={classes.tweetHeader}>
                            <Typography variant={'h6'}>Главная</Typography>
                        </Paper>
                        {new Array(20).fill(
                            <Tweet
                                text={'гыук'}
                                classes={classes}
                                user={
                                    {
                                        userName: 'mashA',
                                        fullName: 'Andrew Shmelev',
                                        avatar: 'https://u.kanobu.ru/articles/pics/7e6dc974-43f4-4ad0-9a55-2465566e9662.jpg',
                                    }}
                            />
                        )}
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        label={'Поиск в твиттере'}
                    >
                    </TextField>
                </Grid>
            </Grid>
        </Container>
    )
};

export default Home;
