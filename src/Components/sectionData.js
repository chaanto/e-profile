import * as FaIcons from 'react-icons/fa';
import * as HiIcons from 'react-icons/hi';

let dob = '2000-04-05'

const ageNumber = (dob) => {
    let today = new Date();
    let birthdate = new Date(dob);
    let age = today.getFullYear() - birthdate.getFullYear();
    let month = today.getMonth() - birthdate.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    } else {
        return age
    }

}

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'About',
    headline: 'Charlie',
    description: `The 23 age programmer love coding and accompanied by a cup of coffee. Have a good problem solving knowledge and high curiosity on programming.\
    Coder who live in Batam that near with singapore and have determination to become a world class developer.`,
    imgStart: false,
    img: require('../images/project1.svg').default,
    alt: 'Human',
    dark: true,
    primary: true,
    darkText: false,
    buttonLogo: [ < FaIcons.FaWhatsapp / > , < HiIcons.HiOutlineMail / > ],
    buttonLabel: ['Whatsapp', 'Email'],

}