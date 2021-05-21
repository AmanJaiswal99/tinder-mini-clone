import React from 'react'
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton'
import '../css/swipebuttons.css'

function SwipeButtons() {
    return (
        <div className='buttons'>
            <IconButton>
                <ReplayIcon className="repeat" fontSize="large"/>
            </IconButton>
            <IconButton>
                <CloseIcon className='left' fontSize="large"/>
            </IconButton>
            <IconButton>
                <StarRateIcon className='star' fontSize="large"/>
            </IconButton>
            <IconButton>
                <FavoriteIcon className='right' fontSize="large"/>
            </IconButton>
            <IconButton>
                <FlashOnIcon className='lighting' fontSize="large"/>
            </IconButton>
           
        </div>
    )
}

export default SwipeButtons
