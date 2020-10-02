import React, {useState} from 'react';
import {Button, Hidden, IconButton, Typography} from '@material-ui/core';
import { homeStyles } from '../../pages/home';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MessageIcon from '@material-ui/icons/MailOutline';
import ListIcon from '@material-ui/icons/List';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ListAltIcon from '@material-ui/icons/ListAlt';
import CreateIcon from '@material-ui/icons/Create';
import ModalBlock from '../ModalBlock';
import AddTweetForm from '../AddTweetForm';
import {useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';

type SideMenuProps = {
    classes: ReturnType<typeof homeStyles>,
}

const SideMenu: React.FC<SideMenuProps> = ({ classes }) => {
    const dispatch = useDispatch();
    const [visibleAddTweet, setVisibleAddTweet] = useState(false);

    const handleModal = () => {
        setVisibleAddTweet(!visibleAddTweet)
    };

    return (
        <ul className={classes.sideMenuList}>
            <li>
                <Link to={'/home'}>
                    <IconButton>
                        <TwitterIcon color={'primary'} className={classes.logo}/>
                    </IconButton>
                </Link>

            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <SearchIcon className={classes.sideMenuListItemIcon}/>
                    <Hidden smDown>
                        <Typography variant={'h6'} className={classes.sideMenuListItemLabel}>Поиск</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <NotificationsNoneIcon className={classes.sideMenuListItemIcon}/>
                    <Hidden smDown>
                        <Typography variant={'h6'} className={classes.sideMenuListItemLabel}>Уведомление</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <MessageIcon className={classes.sideMenuListItemIcon}/>
                    <Hidden smDown>
                        <Typography variant={'h6'} className={classes.sideMenuListItemLabel}>Сообщения</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <ListIcon className={classes.sideMenuListItemIcon}/>
                    <Hidden smDown>
                        <Typography variant={'h6'} className={classes.sideMenuListItemLabel}>Закладки</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <ListAltIcon className={classes.sideMenuListItemIcon}/>
                    <Hidden smDown>
                        <Typography variant={'h6'} className={classes.sideMenuListItemLabel}>Список</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <PermIdentityIcon className={classes.sideMenuListItemIcon}/>
                    <Hidden smDown>
                        <Typography variant={'h6'} className={classes.sideMenuListItemLabel}>Профиль</Typography>
                    </Hidden>
                </div>
            </li>
            <li>
                <Button
                    fullWidth
                    color={'primary'}
                    variant={'contained'}
                    className={classes.sideMenuTweetButton}
                    onClick = {handleModal}
                >
                    <Hidden smDown>
                        Твитнуть
                    </Hidden>
                    <Hidden mdUp>
                        <CreateIcon />
                    </Hidden>
                </Button>
                <ModalBlock
                    title={''}
                    visible={visibleAddTweet}
                    onOpen={handleModal}
                    classes={classes}
                >
                    <div style={{ width: 500 }}>
                        <AddTweetForm classes={classes} maxRows={15} />
                    </div>
                </ModalBlock>
            </li>
        </ul>
    )
};
export default SideMenu;
