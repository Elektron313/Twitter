import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {
    Button,
    Typography,
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    DialogActions
} from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: 'calc(100% - 88px)',

    },
    blueSide: {
        backgroundColor: '#71C9F8',
        flex: '0 0 50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'relative',
    },
    blueSideBigIcon: {
        position: 'absolute',
        top: '53%',
        left: '50%',
        width: '350%',
        height: '350%',
        transform: 'translate(-50%, -50%)'
    },
    blueSideListInfo: {
        position: 'relative',
        listStyle: 'none',
        padding: 0,
        margin: 0,
        '& h6': {
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            fontWeight: 700,
            fontSize: 20,
        },
    },
    blueSideListInfoItem: {
        marginBottom: 40,
    },
    blueSideListIcon: {
        fontSize: 30,
        marginRight: 10,

    },
    loginSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 50%',
    },
    twitterIcon: {
        fontSize: 48,
    },
    loginSideWrapper: {
        width: 380,
    },
    loginSideTittle: {
        fontWeight: 700,
        fontSize: 32,
        marginBottom: 45,
    },
    loginSideField: {
        marginBottom: 20,
    },
}));

const SignIn: React.FC = () => {
    const classes = useStyles();

    const [open, setOpen] = React.useState<'signIn' | 'register'>();

    const handleClickOpenSignIn = () => {
        setOpen('signIn');
    };

    const handleClickOpenRegister = () => {
        setOpen('register');
    };

    const handleClose = () => {
        setOpen(undefined);
    };

    return (
        <div className={classes.wrapper}>
            <section className={classes.blueSide}>
                <TwitterIcon  className={classes.blueSideBigIcon}  color={'primary'}/>
                <ul className={classes.blueSideListInfo}>
                    <li>
                        <Typography   variant={'h6'} className={classes.blueSideListInfoItem}>
                            <SearchIcon className={classes.blueSideListIcon}/>
                            Читайте о том, что вам интересно.
                        </Typography>
                    </li>
                    <li>
                        <Typography  variant={'h6'} className={classes.blueSideListInfoItem}>
                            <PeopleOutlineIcon className={classes.blueSideListIcon} />
                            Узнайте, о чем говорят в мире.
                        </Typography>
                    </li>
                    <li>
                        <Typography  variant={'h6'} className={classes.blueSideListInfoItem}>
                            <ModeCommentOutlinedIcon className={classes.blueSideListIcon} />
                            Присоединяйтесь к общению.
                        </Typography>
                    </li>
                </ul>
            </section>
            <section className={classes.loginSide}>
                <div className={classes.loginSideWrapper}>
                    <TwitterIcon  className={classes.twitterIcon}  color={'primary'}/>
                    <Typography variant={'h4'}   className={classes.loginSideTittle}>Узнайте, что происходит в мире прямо сейчас</Typography>
                    <Typography >Присоединяйтесь к Твиттеру прямо сейчас!</Typography>
                    <br/>
                    <Button color={'primary'} style={{ marginBottom: 20 }} variant={'contained'} fullWidth onClick={handleClickOpenRegister}>Зарегистрироваться</Button>
                    <Button variant={'outlined'} fullWidth onClick={handleClickOpenSignIn}>Войти</Button>
                </div>
            </section>
            <Dialog open={open === 'signIn'} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Войти в Твиттер</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        label="Email Address"
                        type="email"
                        fullWidth
                        className={classes.loginSideField}
                />
                    <TextField
                        label="Password"
                        type="password"
                        fullWidth
                        className={classes.loginSideField}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Отменить
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Войти
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog open={open === 'register'} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Создайте учетную запись</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Имя"
                        fullWidth
                        className={classes.loginSideField}
                    />
                    <TextField
                        autoFocus
                        label="Email Address"
                        type="email"
                        fullWidth
                        className={classes.loginSideField}
                    />
                    <TextField
                        label="Пароль"
                        type="password"
                        fullWidth
                        className={classes.loginSideField}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Отменить
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Далее
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
};

export default SignIn;
