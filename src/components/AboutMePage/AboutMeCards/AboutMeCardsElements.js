import styled from "styled-components"
export const CardsContainer = styled.div`
max-width:1120px;
width: 90%; 
height: 860px;
align-items:center;
background: red;
position: center;
margin: auto; 
`
export const CardsH1 = styled.h1`
font-size: 3em;
text-align: center;
color: #fff;
`
export const CardsWrapper = styled.div`
position: relative;
margin: 50px 0 45px;
background: green;
/* background: green;
align-items: center;
padding: 80px;
margin: auto;
display: flex;
flex-direction: row;
flex-wrap: wrap; */
`
export const CardList = styled.ul`
/* margin-bottom:24px; */
display: flex;
flex-
margin: auto;
margin-top: auto;
background: #000;
justify-content: center;
max-width: 1200px;
width: 90%;
`

export const Card = styled.div`
max-width: 100%;
width: 90%;
height: 300px;
display: flex;
margin:24px;
background: #4063FF;
align-items:center;
padding: 24px 24px;
border-radius: 10px;
transition: all 0.2s ease-in-out;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);  

&:hover{
transition: all 0.2s ease-in-out;
transform: scale(1.02);
cursor: pointer;
}
`

export const CardImage = styled.img`
max-width: 100%;
widht: 100%;
max-height: 100%;
height: 100%
border-radius: 10px;
margin:auto;
object-fit: cover;

/* &:hover{
transition: all 0.2s ease-in-out;
ease-in-out: 0.2s;
cursor: pointer;
} */
`







    // .cards {
//         padding: 4rem;
// background: #fff;
// }

// h1 {
//     text - align: center;
// }

// .cards__container {
//     display: flex;
//     flex - flow: column;
//     align - items: center;
//     max - width: 1120px;
//     width: 90 %;
//     margin: 0 auto;
// }

// .cards__wrapper {
//     position: relative;
//     margin: 50px 0 45px;
// }

// .cards__items {
//     margin - bottom: 24px;
// }

// .cards__item {
//     display: flex;
//     flex: 1;
//     margin: 0 1rem;
//     border - radius: 10px;
// }

// cards__item__link {
//     display: flex;
//     flex - flow: column;
//     width: 100 %;
//     box - shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
//     -webkit - filter: drop - shadow(0 6px 20px rgba(56, 125, 255, 0.017));
//     filter: drop - shadow(0 6px 20px rgba(56, 125, 255, 0.017));
//     border - radius: 10px;
//     overflow: hidden;
//     text - decoration: none;
// }

// .cards__item__pic - wrap {
//     position: relative;
//     width: 100 %;
//     padding - top: 67 %;
//     overflow: hidden;
// }

// .fade - img {
//     animation - name: fade - img;
//     animation - duration: 2s;
// }

// /* Little blue 'adventure' button on cards */
// .cards__item__pic - wrap::after {
//     content: attr(data - category);
//     position: absolute;
//     bottom: 0;
//     margin - left: 10px;
//     padding: 6px 8px;
//     max - width: calc((100 %) - 60px);
//     font - size: 12px;
//     font - weight: 700;
//     color: #fff;
//     background - color: #1f98f4;
//     box - sizing: border - box;
// }

// .cards__item__img {
//     position: absolute;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     display: block;
//     width: 100 %;
//     max - width: 100 %;
//     height: 100 %;
//     max - height: 100 %;
//     object - fit: cover;
//     transition: all 0.2s linear;
// }

// .cards__item__img:hover {
//     transform: scale(1.1);
// }

// .cards__item__info {
//     padding: 20px 30px 30px;
// }

// .cards__item__text {
//     color: #252e48;
//     font - size: 18px;
//     line - height: 24px;
// }

// @media only screen and(min - width: 1200px) {
//     .content__blog__container {
//         width: 84 %;
//     }
// }

// @media only screen and(min - width: 1024px) {
//     .cards__items {
//         display: flex;
//     }
// }

// @media only screen and(max - width: 1024px) {
//     .cards__item {
//         margin - bottom: 2rem;
//     }
// }