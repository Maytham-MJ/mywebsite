import {
    mobile,
    backend,
    b,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    sql,
    git,
    spring,
    docker,
    code,
    toucan,
    ibm,
    cars,
    MQ,
    java,
    freelancer,
    flashbot,
    ody,
    mapit, 
    R, 
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    // {
    //   title: "BlockChain Developer",
    //   icon: b,
    // },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MySQL",
      icon: sql,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "spring",
      icon: spring,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    // {
    //   title: "Java Full Stack  Developer",
    //   company_name: "IBM",
    //   icon: ibm,
    //   iconBg: "#383E56",
    //   date: "March 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using Java, Spring Boot, React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    {
      title: "Full Stack Developer",
      company_name: "FreeLancer",
      icon: freelancer,
      iconBg: "#E6DEDD",
      date: "Feb 2022 - Present",
      points: [
        "Developed a scalable and secure RESTful WebAPI using Java, SpringBoot, and MySQL to enable car dealers to add, update, and delete cars on their inventory management system with 99% uptime.",
        "Integrated Microsoft Azure and SQL database to the API, resulting in real-time data access to over 100 employees, leading to a reduction of up to 15% in reimbursement errors.",
        "Implemented Git and GitHub as the primary version control system, reducing up to 70% in code conflicts and errors.",
      ],
    },
    {
      title: "React Front-End Developer",
      company_name: "Toucan",
      icon: toucan,
      iconBg: "#383E56",
      date: "Nov 2021 - Feb 2022",
      points: [
        "Developed and maintained web applications using React.js and other related technologies.",
        "Developed Web Applications in an Agile environment using Trello resulting in fast and reliable deployment.",
        "Implemented a one-view approach to streamline website navigation, leading to a 45% increase in page load speed.",
        "Used React library alongside JavaScript to develop interactive web applications while leveraging API integration to manage data",
        "fellow.",
      ],
    },
    {
      title: "Blockchain  Developer",
      company_name: "FlashBot",
      icon: flashbot,
      iconBg: "#E6DEDD",
      date: "May 2021 - Oct 2021",
      points: [
        "Collaborated with a team of developers to integrate smart contracts developed in Solidity into an existing application, to increase transaction speed, democratize access to MEV revenue, and bring transparency to MEV activity.",
        "Wrote technical documentation to communicate key points about protocols.",
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Odysee",
      icon: ody,
      iconBg: "#E6DEDD",
      date: "Nov 2020 - April 2021",
      points: [
        "Actively developed and maintained web applications using HTML, CSS, JS, and Angular while pushing new codes using Git and GitHub.",
        "Corroborate with a team of UI/UX developers to insure smooth user interaction while updating the code base.",
        "Actively tested API functionality and scalability with every new function on the front end and made sure to communicate clearly",
        "with the backend team.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but M.J proved me wrong.",
      name: "Sara Lee",
      designation: "Team Lead",
      company: "Odysee",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a Software Engineer who truly cares about their clients' success like M.J does.",
      name: "Chris Banon",
      designation: "Project Manager",
      company: "SoftCode",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After M.J optimized our website, our traffic increased by 50%. We can't thank him enough!",
      name: "Kameelah Butler",
      designation: "CTO",
      company: "Toucan",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car DealerShip",
      description:
        "Restful Web API for a Car Dealership using Java, Spring Boot, Java Bean, MySQL, IntelliJ, and Postman. The API allows the dealership to have full control over their inventory by providing the ability to create, update, and delete cars.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "white-text-gradient",
        },
        {
          name: "Java",
          color: "pink-text-gradient",
        },
        {
          name: "SpringBoot",
          color: "green-text-gradient",
        },
        
      ],
      image: cars,
      source_code: "https://github.com/Maytham-MJ/Car-Dealer-Restful-API",

    },
    {
      name: "Cyber Bank",
      description:
        "Cyber Bank is fun project that mimic real world online bank application with all its functions. This application is using set of JS functions as well as vanilla CSS and HTML ",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: MQ,
      demo_site: "https://foamy-ground.surge.sh",
      source_code: 'https://github.com/Maytham-MJ/CyberBank',
    },


    {
      name: "Map It",
      description:
        "Gelocation App to track and log your workouts. This application uses Google gelocation API to fetch data on the map. Dveloped using JS, HTML and vanilla CSS",
      tags: [
        {
          name: "JavaScript",
          color: "yellow-text-gradient",
        },
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image:mapit,
      demo_site: 'https://ambiguous-meat.surge.sh',
      source_code: "https://github.com/Maytham-MJ/mapit",
    },


    {
      name: "Interactive Command Line Website",
      description:
        "Dynamic and Interactive Command Line Website that breaks the norm. This project utilizes vanilla JavaScript, and CSS",
      tags: [
        {
          name: "JavaScript",
          color: "yellow-text-gradient",
        },
        {
          name: "",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: code,
      demo_site: 'https://boisterous-tulumba-96a575.netlify.app',
      source_code: "https://github.com/Maytham-MJ/mjcodes",
    },


    {
      name: "R-Game",
      description:
        "R-Game is a web application designed for discovering new and exciting video games. With R-Game, users can search for games based on various criteria such as platform, genre, and more. The app utilizes the RAWG API to fetch game data and provide users with a seamless and enjoyable gaming experience.",
      tags: [
        {
          name: "TypeScript",
          color: "blue-text-gradient",
        },
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Chakra ui",
          color: "green-text-gradient",
        },
      ],
      image: R,
      demo_site: 'https://well-groomed-able.surge.sh/',
      source_code: "https://github.com/Maytham-MJ/R-Game",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };