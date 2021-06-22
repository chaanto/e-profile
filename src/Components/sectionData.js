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
    description: `The ${ageNumber(dob)} age programmer love coding and accompanied by a cup of coffee. Have a good problem solving knowledge and big interest on ReactJs, Django, MongoDB and React Native.\
    Coder who live in Batam, Indonesia with the determination to become a fullstack developer.`,
    imgStart: false,
    img: require('../images/project1.svg').default,
    alt: 'Human',
    dark: true,
    primary: true,
    darkText: false,
    // buttonProps :{buttonLogo : [< FaIcons.FaWhatsapp / > , < HiIcons.HiOutlineMail / >],  buttonLabel :},
    // buttonLogo: [ < FaIcons.FaWhatsapp / > , < HiIcons.HiOutlineMail / > ],
    buttonLabel: 'Whatsapp',
    // buttonLabel: ['Whatsapp', 'Email'],
    // buttonColor: [ , 'Email'],

}