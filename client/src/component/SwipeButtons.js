import styled from "styled-components";
//import "./SwipeButtons.css"
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import  FavoriteIcon  from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { IconButton } from '@mui/material';
import { Context } from "../Context";
import React , { useEffect, useState, useContext} from 'react';
import CommentIcon from '@mui/icons-material/Comment';
import {useNavigate} from "react-router-dom";
function SwipeButtons() {
const navigate = useNavigate();
    const [post,setPost] =  useContext(Context);



    function reloadPage()
{
    window.location.reload();
}

const favorite =()=>{
    
}
  return (
   // <div className='swipeButtons'>
   <SWipeButtons>
    
<IconButton  onClick={reloadPage}fontSize='large' className='swipeButtons_repeat'>
<ReplayIcon />
</IconButton>
<IconButton onClick={()=>navigate('/detail')}className='swipeButtons_left'>
<CommentIcon fontSize='large'/>
</IconButton>
<IconButton className='swipeButtons_star'>
<StarRateIcon fontSize='large'/>
</IconButton>
<IconButton className='swipeButtons_right'>
<FavoriteIcon fontSize='inherit'/>
</IconButton>
<IconButton className='swipeButtons_lightning'>
<FlashOnIcon fontSize='large'/>
</IconButton>
</SWipeButtons>
  );
}
const SWipeButtons = styled.div`
position: fixed;
    bottom: 7vh;
    display: flex;
    width: 100%;
    height:50px;
    justify-content: space-evenly;
    
    .swipeButtons_repeat{
    padding: 2vw !important;
    color: #f5b748 !important;

}
.swipeButtons_left{
    padding: 2vw !important;
    color: #e567ff !important;
    
}
.swipeButtons_star{
    padding: 2vw !important;
    color: #62b4f9 !important;
    
}
.swipeButtons_right{
    padding: 2vw !important;
    color: #76e2b3 !important;
    
}
.swipeButtons_lightning{
    padding: 2vw !important;
    color: #915dd1 !important;
    
}
.MuiIconButton-root{
    background-color:'white';
    box-shadow: rgba(247, 232, 232, 0.35) 0px 5px 15px;
    
    &:hover{
      transform:scale(1.02);
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border:#bebebe solid;

    }
}
`;
export default SwipeButtons;