const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 3001 || env.process.PORT;

app.use(cors({origin: "https://sme-dev-portfolio.netlify.app",}));
app.use(express.json());

const portfolio_data = [
    {
        navbar_items: [
            { title: "Home", url: "#" },
            { title: "About", url: "#about" },
            { title: "Projects", url: "#projects" },
            { title: "Contact", url: "#contact" },
        ],
        first_text: "In my portfolio, I'm Saif Maher Elsmahy (SME DEV), I'm a website developer....",
        about_me: [
            "Hello, I'm Saif Maher Elsmahy (SME DEV). I'm 14 years old, and I'm from Egypt. I'm a website developer, and I have created many websites, such as a chatting website, a website for sharing posts, and game websites like a Rock Paper Scissors website and a game called SME Detective Game. I have also developed a to-do list website.",
            "I have learned HTML, CSS, JavaScript, Express.js for APIs (Application Programming Interfaces), Firebase, and React.js and I started learning MySQL. Additionally, I have created a website for a game development team, and I am part of this team.",
            "Thank you for visiting my portfolio! 💖"
        ],
        websites: [
                {
                    logo: "/SME DEV.png",
                    website_name: "SME DEV Portfolio",
                    description: "SME DEV Portfolio is a website that provides information about me, including my age, name, and location. It contains all my projects and social links like GitHub, Instagram, LinkedIn, and X (Twitter). You can also contact me through the contact section below.",
                    website_link: "https://sme-dev-portfolio.netlify.app",
                    programming_languages: ["React JS", "CSS", "Express JS", "MySQL"],
                },
                {
                    logo: "https://sme-rock-paper-scissors-game.netlify.app/SME  Rock Paper Scissors.png",
                    website_name: "SME | Rock Paper Scissors",
                    description: "Rock Paper Scissors is a classic hand game played worldwide. Two players simultaneously choose rock, paper, or scissors. Rock crushes scissors, scissors cut paper, and paper covers rock. It's a quick, fun way to make decisions or settle friendly disputes.",
                    website_link: "https://sme-rock-paper-scissors-game.netlify.app",
                    programming_languages: ["React JS", "CSS", "Firebase"],
                },
                {
                    logo: "website",
                    website_name: "Team Snipers",
                    description: "Team Snipers is a team from developing games consists of 4 members and this team is from Egypt and we use Godot to make out games and we have a website and the website developer is me and there you will find our games and you can download it from there.",
                    website_link: "https://team-snipers.netlify.app",
                    programming_languages: ["React JS", "CSS", "Express JS"],
                },
                {
                    logo: "https://sme-up.netlify.app/posts%20page/SME%20UP%20Logo.png",
                    website_name: "SME UP",
                    description: "This website allows you to share posts with others, including images and text. You can chat with people you follow and who follow you, and react to other posts by liking or commenting.",
                    website_link: "https://sme-up.netlify.app",
                    programming_languages: ["HTML", "CSS", "JavaScript", "Firebase"],
                },
                {
                    logo: "website",
                    website_name: "SME Detective Game",
                    description: "SME Detective Game is a multiplayer game requiring a minimum of 3 players and a maximum of 7 players. You receive a code from the website to share with friends, allowing them to join the game room.",
                    website_link: "https://sme-detective-game.netlify.app",
                    programming_languages: ["HTML", "CSS", "JavaScript", "Firebase"],
                },
                {
                    logo: "website",
                    website_name: "SME Guess Film Name",
                    description: "SME Guess Film Name Game is a multiplayer game where you and your friends form two teams. The game selects a player from a team to act out a film, and their team must guess the film's name to score a point while the other team waits for the timer to end.",
                    website_link: "https://sme4-guess-film-name-game.netlify.app",
                    programming_languages: ["HTML", "CSS", "JavaScript"],
                },
                {
                    logo: "website",
                    website_name: "SME Quizzes",
                    description: "This website allows you to create or take quizzes from your teacher or friends. Each quiz has a minimum of 3 questions, and your score is visible to all users who have taken or will take the quiz.",
                    website_link: "https://sme4-quizzes.netlify.app",
                    programming_languages: ["HTML", "CSS", "JavaScript", "Firebase"],
                },
                {
                    logo: "website",
                    website_name: "SME Chat App",
                    description: "This website allows you to chat with friends or anyone on the platform by sending a friend request, which must be accepted to start chatting. You can block friends and search for them using the search bar.",
                    website_link: "https://sme-chat-app.netlify.app",
                    programming_languages: ["HTML", "CSS", "JavaScript", "Firebase"],
                },
                {
                    logo: "website",
                    website_name: "SME XO Game",
                    description: "SME XO Game is a simple game where you play with a friend. One player takes X and the other O. The first player to align 3 Xs or Os in a row (vertically, horizontally, or diagonally) wins.",
                    website_link: "https://sme4-xo-game.netlify.app",
                    programming_languages: ["HTML", "CSS", "JavaScript"],
                },
                {
                    logo: "https://sme-todo-list-app.netlify.app/sme todo list app logo.png",
                    website_name: "SME | To-Do List App",
                    description: "SME To-Do List App is a website in which you can add your tasks in it and you can add some tasks that appears on a certain day (sutarday , sunday,....) and you can delete and update tasks and check any task as completed.",
                    website_link: "https://sme-todo-list-app.netlify.app",
                    programming_languages: ["ReactJS", "CSS"],
                }
        ],
        social_links: {
            instagram: "https://instagram.com/sme.dev",
            facebook: null,
            youtube: null,
            tiktok: null,
            twitter: "https://x.com/sme_dev212",
            linkedin: "https://www.linkedin.com/in/sme-dev-5036a5350/",
            github: "https://github.com/sme4web",
        },
        footer_text: "© " + new Date().getFullYear() + " SME DEV portfolio. All rights reserved.",
    }
];

app.get("/portfolio-data" , (req , res) => {
    res.json(portfolio_data);
})

app.listen(PORT , (req , res) => {
    console.log(`Server running on port ${PORT}. http://localhost:3001`);
})