import React from 'react'
import '../css/header.css'
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import HomeIcon from '@material-ui/icons/Home';

function Header() {
    return (
        <div className='header'>
           
            <IconButton>
            <PersonIcon fontSize='large' className="header_icon"/>
            </IconButton>
            <IconButton  >
            <HomeIcon fontSize='large' className="header_icon"/>
            </IconButton>
           
            <IconButton>
            <ChatBubbleOutlineIcon  fontSize='large' className="header_icon" />
            </IconButton>

           
        </div>
    )
}

export default Header
