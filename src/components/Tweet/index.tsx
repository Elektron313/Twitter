import React from 'react';
import {Avatar, Grid, IconButton, Paper, Typography} from '@material-ui/core';
import classNames from 'classnames';
import CommentIcon from '@material-ui/icons/ChatBubbleOutline';
import {homeStyles} from '../../pages/home';
import RepostIcon from '@material-ui/icons/Repeat';
import LikeIcon from '@material-ui/icons/FavoriteBorder';
import ReplyIcon from '@material-ui/icons/Reply';

type Props = {
    text: string;
    classes: ReturnType<typeof homeStyles>;
    user: {
        userName: string;
        fullName: string;
        avatar: string;
    };
}

const Tweet: React.FC<Props> = ({classes, user: { userName, fullName, avatar }, text}) => {

    return (
        <div>
            <Paper variant={'elevation'}  className={classNames(classes.tweetHeader, classes.tweet)}>
                <Grid container>
                    <Grid item xs={1}>
                        <Avatar
                            className={classes.tweetAvatar}
                            alt="User Avatar"
                            src={avatar} />
                    </Grid>
                    <Grid item xs={11}>
                        <Typography><b>{fullName}</b> <span className={classes.tweetsUserName}>{userName}</span><span>1 ч</span></Typography>
                        <Typography gutterBottom >
                            <span>{text}</span>
                        </Typography>
                        <div className={classes.tweetFooter}>
                            <div>
                                <IconButton>
                                    <CommentIcon className={classes.tweetFooterIcon}/>
                                </IconButton>
                                <span>1</span>
                            </div>
                            <div>
                                <IconButton>
                                    <RepostIcon className={classes.tweetFooterIcon}/>
                                </IconButton>
                            </div>
                            <div>
                                <IconButton>
                                    <LikeIcon className={classes.tweetFooterIcon}/>
                                </IconButton>
                            </div>
                            <div>
                                <IconButton>
                                    <ReplyIcon className={classes.tweetFooterIcon}/>
                                </IconButton>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
};

export default Tweet;
