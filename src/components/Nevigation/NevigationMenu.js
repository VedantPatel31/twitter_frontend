import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import PeopleIcon from '@mui/icons-material/People';
import ListAltIcon from '@mui/icons-material/ListAlt';
import VerifiedIcon from '@mui/icons-material/Verified';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PendingIcon from '@mui/icons-material/Pending';
export const NavigationMenu=[
    {
        title:"Home",
        icon:<HomeIcon/>,
        Path:"/home"
    },
    {
        title:"Explore",
        icon:<SearchIcon/>,
        Path:"/explore"
    },
    {
        title:"Notification",
        icon:<NotificationsIcon/>,
        Path:"/notification"
    },
    {
        title:"Message",
        icon:<MessageIcon/>,
        Path:"/message"
    },
    {
        title:"List",
        icon:<ListAltIcon/>,
        Path:"/list"
    },
    {
        title:"Communities",
        icon:<PeopleIcon/>,
        Path:"/communities"
    },
    {
        title:"Verified",
        icon:<VerifiedIcon/>,
        Path:"/verified"
    },
    {
        title:"Profile",
        icon:<AccountCircleIcon/>,
        Path:"/profile"
    },
    {
        title:"More",
        icon:<PendingIcon/>,
        Path:"/more"
    },
]