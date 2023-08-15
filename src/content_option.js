const logotext = "SB";

const firstName = 'Suresh';
const lastName = 'Bhandari';
const fullName = `${firstName} ${lastName}`;
const meta = {
    title: `${fullName}`,
    description: `I'm ${fullName}, a technologist and cybersecurity enthuist.`,
};

const imageList = [
    "https://present.readthedocs.io/en/latest/_images/welcome-to-coding.gif"
]

const introdata = {
    title: `Hi, I'm ${fullName}`,
    animated: {
        first: "Technologist",
        second: "Visionary",
        third: "Software Engineer",
        fourth: "Programmer",
        fifth: "Analyst",
        // add more if you'd like but make sure to update /src/pages/home/index.js Line 29
    },
    description: "Dedicated technology enthusiast with an insatiable curiosity for unraveling the complexities of our digital world.",
    your_img_url: imageList[Math.floor(Math.random() * imageList.length)],
};


const dataabout = {
    title: "Who am I?",
    aboutme: `Experienced software development engineer with a demonstrated history of working in the computer software industry.
    Skilled in backend and front-end development, cloud computing, project management, and team leadership.
    Successfully developed and maintained various systems, including an AI-based gaming system and a dynamic CMS.
    Utilized various technologies, such as Node, ReactJS, Fast API, and Django, to enhance system functionality and
    performance. Recognized for consistently delivering exceptional results and receiving multiple Employee of the Month
    awards.`,
} ;

const worktimeline = [{
        jobtitle: "SDE",
        where: "Stride Ahead",
        date: "March 2021 - December 2021",
    },
    {
        jobtitle: "Senior SDE",
        where: "Stride Ahead",
        date: "January 2022 - March 2023",
    },
    {
        jobtitle: "System Engineer",
        where: "Gridlogic",
        date: "March 2023 - Present",
    },
];

const skills = [{
        name: "Python",
    },
    
    {
        name: "Javascript",
    },
    
    {
        name: "Java",
    },
    
    {
        name: "Bash",
    },

    {
        name: "Linux",
    },

    {
        name: "Reverse Engineering",
    },

    {
        name: "Web-Exploitation",
    },

    {
        name: "Network Exploitation",
    },
];

const dataportfolio = [{
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/800/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },

    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/550/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "suresh.37x@gmail.com",
    description: "Looking forward to hearing from you!",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "SERVICE_ID",
    YOUR_TEMPLATE_ID: "TEMPLATE_ID",
    YOUR_USER_ID: "USER_ID (PUBLIC_KEY)",
};

const socialprofils = {
    github: "https://github.com/suresh-3x",
    linkedin: "https://linkedin.com/in/suresh-3x",
    twitter: "https://twitter.com/suresh_3x"
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};