// There are two ways of imported the files, one could be changing the location of the svg file to public and calling it using '/images/svg.svg' or using the require method, there needs to be a default right after the require('file.path').default <- as so

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topline: 'Gain Insight',
    headline: 'Who is Maximillian Mata?',
    description: 'Find out everything there is it to know about me by clicking the button down below!',
    buttonLabel: 'Find Out More',
    imgStart: false,
    img: require('../../images/svg-6.svg').default,
    alt: 'img.svg',
    dark: true,
    primary: true,
    darkText: false,
    topDarkText: false,
    page: '/aboutme'
};

export const homeObjTwo = {
    id: 'projects',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topline: 'Always Learning',
    headline: "Get a Walkthrough of My Projects",
    description: "Check out my previous school projects and the individual projects I'm currently working on",
    buttonLabel: 'Get Walkthrough',
    imgStart: true,
    img: require('../../images/svg-5.svg').default,
    alt: 'img.svg',
    dark: false,
    primary: false,
    darkText: true,
    topDarkText: true,
    page: '/aboutme'
};

export const homeObjThree = {
    id: 'contact',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topline: "Let's Chat?",
    headline: 'Contact Me',
    description: "Get access to Maximillian Mata by clicking the button below.",
    buttonLabel: 'Get Access',
    imgStart: false,
    img: require('../../images/svg-4.svg').default,
    alt: 'img.svg',
    dark: true,
    primary: true,
    darkText: false,
    topDarkText: false,
    page: '/signin'
};