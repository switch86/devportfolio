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
    bio1: `I'm a dedicated developer with a mission to build practical and user-friendly technologies that enhance the lives of diverse audiences.`, 
    
    bio2:`My ability to comprehend complex problems intuitively has been instrumental in my pursuit of web development, and I tackle every project with a deep passion for problem-solving and a playful sense of curiosity.`,
    
    bio3: `For me, each bug represents a puzzle waiting to be solved, and every project is an opportunity for creative exploration. My adaptability, determination, and collaborative skills enable me to prioritize the user's needs and devise intuitive solutions that promote inclusion and equity.` ,
    
    bio4: `Let's team up and create something remarkable that has a positive impact!`,

    skills:
        {
            proficientWith: ['javascript', 'react', 'express', 'mongoDB', 'node.js', 'github', 'gpt3','whisper', 'HTML5/CSS3', 'bootstrapCSS'],
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
        }
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
    //         title: "Travel Journal",
    //         live: "https://traveljournalnkb.surge.sh/",
    //         source: "https://github.com/switch86/assignments/travelJournal",
    //         skills: ["JS", "React", "HTML", "CSS", "html5" ],
    //         image: traveljournal
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