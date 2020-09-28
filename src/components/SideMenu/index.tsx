import React from 'react';
import {Button, IconButton, Typography} from '@material-ui/core';
import { homeStyles } from '../../pages/home';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MessageIcon from '@material-ui/icons/MailOutline';
import ListIcon from '@material-ui/icons/List';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ListAltIcon from '@material-ui/icons/ListAlt';

type SideMenuProps = {
    classes: ReturnType<typeof homeStyles>,
}

const SideMenu: React.FC<SideMenuProps> = ({ classes }) => {

    return (
        <ul className={classes.sideMenuList}>
            <li>
                    <IconButton>
                        <TwitterIcon color={'primary'} className={classes.logo}/>
                    </IconButton>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <SearchIcon className={classes.sideMenuListItemIcon}/>
                    <Typography variant={'h6'} className={classes.sideMenuListItemLabel}>Поиск</Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <NotificationsNoneIcon className={classes.sideMenuListItemIcon}/>
                    <Typography variant={'h6'} className={classes.sideMenuListItemLabel}>Уведомление</Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <MessageIcon className={classes.sideMenuListItemIcon}/>
                    <Typography variant={'h6'} className={classes.sideMenuListItemLabel}>Сообщения</Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <ListIcon className={classes.sideMenuListItemIcon}/>
                    <Typography variant={'h6'} className={classes.sideMenuListItemLabel}>Закладки</Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <ListAltIcon className={classes.sideMenuListItemIcon}/>
                    <Typography variant={'h6'} className={classes.sideMenuListItemLabel}>Список</Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <PermIdentityIcon className={classes.sideMenuListItemIcon}/>
                    <Typography variant={'h6'} className={classes.sideMenuListItemLabel}>Профиль</Typography>
                </div>
            </li>
            <li>
                <Button
                    fullWidth
                    color={'primary'}
                    variant={'contained'}
                    className={classes.sideMenuTweetButton}
                >
                    Твитнуть
                </Button>
            </li>
        </ul>
    )
};
export default SideMenu;
