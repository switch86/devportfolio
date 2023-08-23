import self from "../img/self.png"
import colorgradient from "../img/colorgradient.jpg"
import namebadge from "../img/namebadge.jpg"
import mariopest from "../img/mariopest.jpg"
import memegenerator from "../img/memegenerator.jpg"
import traveljournal from "../img/traveljournal.jpg"
import ajsbodywork from "../img/ajsbodywork.jpg"
import zengarden from "../img/zengarden.jpg"
import nationalparks from "../img/nationalparks.JPG"
import aita from "../img/aita.JPG"
import mlphotography from "../img/MikeLPhotographer.jpg"

export let colors = ["rgb(247, 189, 255)", "rgb(82, 174, 255)"];

export const info = {
    firstName: "Noah",
    lastName: "Berlove",
    initials: "NB",
    position: "a Full Stack Developer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '🌎',
            text: 'Based in the US'
        },
        {
            emoji: "💼",
            text: "Full Stack Developer"
        },
        {
            emoji: "📧",
            text: "Noah.Berlove@gmail.com"
        }
    ],
    socials: [
        // {
        //     link: "https://facebook.com/noahberlove",
        //     icon: 'fa fa-facebook',
        //     label: 'facebook'
        // },
        // {
        //     link: "https://instagram.com",
        //     icon: 'fa fa-instagram',
        //     label: 'instagram'
        // },
        {
            link: "https://github.com/switch86",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com/in/berloven",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/_switch86",
            icon: "fa fa-twitter",
            label: 'twitter'
        }

    ],

    title1: `About Me:`,
    bio1: `Hey there! I'm Noah Berlove, a passionate and creative developer with a unique perspective shaped by my journey as a queer nonbinary trans man and being raised by deaf parents. My expertise lies in web and software development, where I merge my technical skills with my commitment to social progress. I'm dedicated to making the digital landscape a more equitable space for everyone by prioritizing accessibility, inclusivity, and equity in all of my work. Through technology we have the power to create inclusive and transformative experiences that reflect our diverse world.`, 
    title2: `Background:`,
    bio2:` My development journey began at a young age, learning HTML and CSS to build my neopets store. With a strong foundation in JavaScript, I've expanded my skillset to include various frameworks, languages, and tools. As someone who identifies as many things outside of the "norm" - queer, nonbinary, trans and neurodivergent to name a few - I understand firsthand the importance of representation and inclusivity. Accessibility, Equity, and Inclusion are core values that drive all of my work. From design to retrospective, I prioritize universal design and user experience.`,
    
    
    title3: `Advocacy and Impact:`,
    bio3: `I am a strong advocate for open-source development and collaboration, always seeking ways to give back to the developer community, particularly folks who are underrepresented in our field. I understand firsthand the importance of diversity and representation in the tech industry and STEM fields as a whole - we need everyone working together to build the future. Whether through my work on digital projects, providing interpreting services, or my involvement in community initiatives, I strive to create positive change in the tech industry and beyond.` ,
    
    title4: `Let's Connect:`,
    bio4: `I'm always excited to connect with fellow developers, creators, and advocates who share my passion for using technology to drive social progress. Feel free to reach out for collaborations, discussions, or just a friendly chat!`,

    skills:
        {
            proficientWith: ['javascript', 'react', 'express', 'mongoDB', 'node.js', 'github', 'gpt','whisper', 'HTML5/CSS3', 'bootstrapCSS'],
            exposedTo: ['algorithms','data science', 'python', 'docker', 'three.js']
        }
    ,
    hobbies: [
        {
            label: 'plants!',
            emoji: '🌿'
        },
        {
            label: 'gamified learning',
            emoji: '🎮'
        },
        {
            label: 'camping',
            emoji: '🏕️'
        },
        {
            label: 'rock climbing',
            emoji: '🧗🏻'
        }

    ],
    portfolio: [
        {
            title: "National Parks",
            live: "https://nationalparks.onrender.com/", 
            source: "https://github.com/switch86/nationalparks",
            skills: ["JS", "CSS", "bootstrap", "axios", "React", "reactRouter", "cors", "bcrypt", "JWT", "mongoose", "morgan", "express JWT", "dotenv", "Express", "Node"],
            image: nationalparks
        },
        {
            title: "Mike Lindwasser Photography",
            live: "https://www.mikelindwasserphotography.com/", 
            source: "https://www.shopify.com/",
            skills: ["JS", "liquid", "shopify"],
            image: mlphotography
        },
        {
            title: "Travel Journal",
            live: "https://traveljournalnkb.surge.sh/",
            source: "https://github.com/switch86/assignments/travelJournal",
            skills: ["JS", "React", "HTML", "CSS", "html5" ],
            image: traveljournal
        },
        // {
        //     title: "Social Blog Site",
        //     live: "https://aita.onrender.com",
        //     source: "https://github.com/switch86/rtv",
        //     skills: ["JS", "CSS", "axios", "React", "reactRouter", "cors", "bcrypt", "JWT", "mongoose", "morgan", "express JWT", "dotenv", "Express", "Node"],
        //     image: aita
        // }
        // {
        //     title: "AJS BodyWork",
        //     live: "https://ajsbodywork.surge.sh/", 
        //     source: "https://github.com/switch86/assignments/tree/main/ajsBodywork",
        //     skills: ["JS", "CSS", "html5"],
        //     image: ajsbodywork
        // },
    //    {
    //         title: "Color Gradient CSS",
    //         live: "https://gradientreactappnkb.surge.sh/",
    //         source:  "https://github.com/switch86/gradientGenerator", 
    //         skills: ["JS", "CSS", 'React'],
    //         image: colorgradient
    //     },
    //     {
    //         title: "Name Badge Creator",
    //         live: "https://namebadgegeneratornb.surge.sh",
    //         source: "https://github.com/switch86/nameBadge",
    //         skills: ["JS", "CSS", "React"],
    //         image: namebadge
    //     },
    //     {
    //         title: "Mario Coin Counter",
    //         live: "https://marionkb.surge.sh/",
    //         source: "https://github.com/switch86/assignments/marioPestControl",
    //         skills: ["JS", "CSS"],
    //         image: mariopest
    //     },
    //     {
    //         title: "Meme Generator",
    //         live: "",
    //         source: "",
    //         skills: ["JS", "CSS", "HTML", "html5", "react", "forms"],
    //         image: memegenerator
    //     },
    //     {
    //         title: "Zen Garden",
    //         live: "https://zengardennkb.surge.sh",
    //         source: "https://github.com/switch86/assignments/zenGarden",
    //         skills: ["JS", "HTML", "CSS", "html5"],
    //         image: zengarden
    //     }
    ]
}