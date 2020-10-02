import React, {useCallback, useEffect, useState} from 'react';
import {
    Grid,
    Container,
    TextField,
    Paper,
    Typography,
    withStyles,
    Theme, InputAdornment, CircularProgress, IconButton,
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {grey} from '@material-ui/core/colors';
import Tweet from '../components/Tweet';
import SideMenu from '../components/SideMenu';
import AddTweetForm from '../components/AddTweetForm';
import {useDispatch, useSelector} from 'react-redux';
import { fetchTwits } from '../Store/Slices/twitsSlice';
import SearchIcon from '@material-ui/icons/Search';
import {AppStateType} from '../Store';
import Topics, {Tags} from '../components/Topics';
import topicsApi from '../api/topicsApi';
import { Route } from 'react-router-dom';
import BackButton from '../components/BackButton';
import FullTwit from './components/FullTwit';

export const homeStyles = makeStyles((theme) => ({
    sideMenuList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        maxWidth: 230,
    },
    logo: {
        fontSize: 36,
    },
    rightSide: {
        paddingTop: 20,
        position: 'sticky',
        top: '0',
    },
    rightSideBlock: {
        backgroundColor: '#F5F8FA',
        borderRadius: 15,
        marginTop: 20,
        '& .MuiList-root': {
            paddingTop: 0,
        },
    },
    rightSideBlockHeader: {
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        backgroundColor: 'transparent',
        padding: '13px 18px',
        '& b': {
            fontSize: 20,
            fontWeight: 800,
        },
    },
    rightSideBlockItem: {
        cursor: 'pointer',
        '& .MuiTypography-body1': {
            fontWeight: 700,
        },
        '& .MuiListItemAvatar-root': {
            minWidth: 700,
        },
        '& .MuiListItemText-root': {
            margin: 0,
        },
        '&:hover': {
            backgroundColor: '#edf3f6',
        },
        '& a' : {
            color: 'inherit',
            textDecoration: 'none',
        }
    },
    addForm: {
        padding: 20,
    },
    addFormBody: {
        display: 'flex',
        width: '100%',
    },
    addFormBottom: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    addFormBottomActions: {
        marginTop: 10,
        paddingLeft: 70,
    },
    addFormTextarea: {
        width: '100%',
        border: 0,
        fontSize: 20,
        outline: 'none',
        fontFamily: 'inherit',
        resize: 'none',
    },
    addFormBottomLine: {
        height: 12,
        backgroundColor: '#E6ECF0',
    },
    addFormCircleProgress: {
        position: 'relative',
        width: 20,
        height: 20,
        margin: '0 10px',
        '& .MuiCircularProgress-root': {
            position: 'absolute',
        },
    },
    addFormBottomRight: {
        display: 'flex',
        alignItems: 'center',
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
    twitWrapper: {
        color: 'inherit',
        textDecoration: 'none'
    },
    twitsHeader: {
        borderTop: '0',
        borderLeft: '0',
        borderRight: '0',
        padding: '10px 15px',
        display: 'flex',
        alignItems: 'center',

        '& h6': {
            fontWeight: 800,
        }
    },
    twitsHeaderBack: {
        marginRight: 15,
    },
    twitCenter: {
      display: 'flex',
      justifyContent: 'center',
      padding: '20px 0 ',
    },
    tweet: {
        display: 'flex',
        alignItems: 'flex-start',
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
        marginRight: 15,
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
    },
    fullTweet: {
        padding: 22,
    },
    fullTweetText: {
        fontSize: 24,
        marginTop: 20,
        lineHeight: 1.3125,
        wordBreak: 'break-word',
    },
    tweetsHeaderUser: {
        display: 'flex',
        alignItems: 'center',
    },
    tweetUserName: {
        color: grey[500],
    },
}));

const SearchTextField = withStyles((theme: Theme) => ({
    root: {
        '& .MuiOutlinedInput-root': {
            borderRadius: 30,
            backgroundColor: '#E6ECF0',
            padding: 0,
            paddingLeft: 15,
            '&Mui-focused': {
                backgroundColor: '#fff',
                '& fieldset':{
                    borderWidth: 1,
                    borderColor: theme.palette.primary.main,
                },
                '& svg path': {
                    fill: theme.palette.primary.main,
                },
            },
            '&:hover': {
                '& fieldset': {
                    borderColor: 'transparent'
                },
            },
            ' fieldset': {
                borderColor: 'transparent',
                borderWidth: 1,
            },
            '& MuiOutlinedInput-input': {
                padding: '12px 14px 14px 5px',
            },
        },
    },
}))(TextField);



const Home: React.FC = () => {
    const dispatch = useDispatch();
    const classes = homeStyles();
    const twits = useSelector((state: AppStateType) => state.twitReducer.items);
    const [topics, setTopics] = useState<Tags[]>([]);
    const [isLoading, toggleIsLoading] = useState(false);

    useEffect(() => {
        dispatch(fetchTwits());
    },[dispatch]);

    useEffect(() => {
        fetchTopics();
    },[]);

    const fetchTopics = async () => {
        try {
            // toggleIsLoading(true);
            const data =  await topicsApi.fetchTopics();
            setTopics(data)
        } finally {
            // toggleIsLoading(false);
        }
    };

    return (
        <Container maxWidth={'lg'} className={classes.wrapper}>
            <Grid container spacing={3}>
                <Grid item sm={1} md={3}>
                    <SideMenu classes={classes}/>
                </Grid>
                <Grid item sm={8} md={6}>
                    <Paper variant={'outlined'} className={classes.tweetsWrapper}>
                        <Paper variant={'outlined'}  className={classes.twitsHeader}>
                            <Route path={'/home/:any'}>
                               <BackButton />
                            </Route>
                            <Route path={['/home', '/home/search']} exact>
                                <Typography variant={'h6'}>Твиты</Typography>
                            </Route>
                            <Route path={'/home/twit'} >
                                <Typography variant={'h6'}>Твитнуть</Typography>
                            </Route>
                        </Paper>
                        <Route path={['/home', '/home/search']} exact>
                            <Paper>
                                <div className={classes.addForm}>
                                    <AddTweetForm classes={classes}/>
                                </div>
                                <div className={classes.addFormBottomLine}/>
                            </Paper>
                        </Route>
                        <Route path={'/home'} exact>
                            {isLoading ? (
                                <div>
                                   <CircularProgress />
                                </div>
                            ) : (
                                twits.map((twit) =>
                                    <Tweet
                                        key={twit._id}
                                        classes={classes}
                                        {...twit}
                                    />
                                )
                            )}
                        </Route>
                        <Route path={'/home/twit/:id'} exact>
                            <FullTwit classes={classes}/>
                        </Route>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <div className={classes.rightSide}>
                        <SearchTextField
                            variant={'outlined'}
                            placeholder={'Поиск по Твиттеру'}
                            fullWidth
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position={'start'}>
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Topics
                            classes={classes}
                            items={topics}
                        />
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
};

export default Home;
