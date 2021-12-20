import styled from "styled-components";

export const AboutMeHeaderLogo = styled.img`
position: relative;
width: 80px;
`

export const ResumeLink = styled.a`
color: red;
text-decoration: none;
`

export const ButtonDiv = styled.div`
border-radius: 50px;
background: ${({ primary }) => (primary ? '#4063FF' : '#010606')};
white-space: nowrap;
padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
color: ${({ dark }) => (dark ? '#010606' : '#fff')};
font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transistion: all 0.2s ease-in-out;

&:hover{
    transition: all 0.2 ease-in-out;
    background: ${({ primary }) => (primary ? '#fff' : '#4063FF')};
}
`