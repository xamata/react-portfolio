import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';


export const HeroContainer = styled.div`
    id: 'navhome'; 
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height:1080px;
    position: relative;
    z-index: 1;
    /* top: -80px; */
    

    /* :before{
        content: '';
        position: center;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 100%), linear-gradient(180deg, rgba(0,0,0,0.1) 0%, transparent 100%);
        z-index: 2; */
    }

    /* @media screen and (max-width:768px) {
        width: 630px;
        margin-right:0px;
    } */
`

export const HeroBackground = styled.div`
margin:0;
position: absolute;
top: 0;
right: 0; 
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
`

// export const VideoBg = styled.video`
// width: 100%;
// height: 100%;
// -o-object-fit: cover;
// object-fit: cover;
// background: #232a34;
// margin:0;
// `


export const ImageBackground = styled.img`
    /* fill in background position */
    width: 100%;
    height: auto;
    object-fit: contain;    
    /* -o-object-fit: cover; */
    position: relative;
    /* top:-80px; */
    /* img positioning */
    /* position: relative; */
    /* margin-left: -80px; */
    

    @media screen and (max-width: 1080px){
        /* object-fit:none;   */
        /* height: 100%; */
        object-fit: none;
        position: relative;
        height: 100%;
    }
`

export const HeroContent = styled.div`
z-index: 3;
max-width: 1200px;
position: absolute;
padding: 40px 24px;
display: flex;
flex-direction: column;
align-items: start;
margin-left: 25%;
top:25%;
/* margin-left:auto;
margin-right:auto; */
/* margin-left: 450px; */

@media screen and (max-width: 960px){
    margin-left: 0;
} 

@media screen and (max-width: 768px){
    align-items: center;
    margin-left: 0;
}

@media screen and (max-width: 480px){
    align-items:center;
    margin-left: 0;
} 
`

export const HeroH1 = styled.h1`
color: #000;
font-size: 48px;
text-align: start;
position: relative;

@media screen and (max-width: 768px){
    font-size: 40px;
    text-align: center;
}

@media screen and (max-width: 480px){
    font-size: 30px;
    text-align: center;
}
`

export const HeroP = styled.p`
margin-top: 10px;
color: #000;
font-size: 24px;
text-align: start;
max-width: 600px;
position: relative;

@media screen and (max-width: 768px){
    font-size: 24px;
    text-align: center;
}

@media screen and (max-width: 480px){
    font-size: 18px;
    text-align: center;
}
`

// export const HeroContent = styled.div`
//     /* scaling */
//     max-width: 800px;
//     /* position */
//     position: absolute;
//     left: 630px;
//     top: -200;
//     z-index: 3;
//     padding: 8px 24px; 
//     display: flex;
//     flex-direction: column; 

//     @media screen and (max-width:810px) {

//         position: center;
//         left:    5%
//     }
// `

// export const HeroH1 = styled.h1`
//     color: #000;
//     font-size: 70px;
//     margin-top: -80px;
//     position: absolute;
//     font-family: 'Source Sans 3','Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande','Lucida Sans', Arial, sans-serif;
//     /* position: sticky; */

//     @media screen and (max-width: 250px) {
//         font-size: 60px;
//         margin-top: -100px;
//         position: relative; 
//         width: 100px;  
//         /* margin-left: -300px */
//     } 

//     @media screen and (max-width: 810px) {
//         font-size: 60px;
//         margin-top: -100px;
//         position: relative;   
//         /* margin-left: -300px */
//     } 

// `

// export const HeroP = styled.p`
//     margin-top: -10px;
//     /* width: 650px; */
//     color: #000;
//     font-size: 30px;
//     font-family: 'Source Sans 3','Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande','Lucida Sans', Arial, sans-serif;

//     @media screen and (max-width: 810px) {
//         font-size: 24px;
//         align-items: center

//         /* margin-left: -300px; */
//     }

// `

export const HeroBtnWrapper = styled.div`
margin-top: 25px;
display:flex;
flex-direction: column;
align-items: center;

`

// You can find the Button in ..//ButtonElement
// export const Button = styled.button`
// margin-left: 8px;
// font-size:20px;
// `


export const ArrowForward = styled(MdArrowForward)`
margin-left: 8px;
font-size:20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left: 8px;
font-size:20px;
`