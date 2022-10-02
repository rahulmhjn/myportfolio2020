/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rahul Mahajan",
  title: "Hi all, I'm Rahul",
  subTitle: `A passionate Software Developer having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native / Angular and some other cool libraries and frameworks.`,
  resumeLink:
    "https://drive.google.com/file/d/1xl-qy9bP0wo20LM7GMvXtqFbC5EAaJyI/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/rahulmhjn",
  linkedin: "https://www.linkedin.com/in/rahul-mahajan0786/",
  gmail: "rahul.mahajan676@gmail.com",
  facebook: "https://www.facebook.com/rahul.mahajan.796569",
  medium: "https://medium.com/@rahul.mahajan676",
  stackoverflow: "https://stackoverflow.com/users/10663199/rahul-mahajan",
  instagram: "https://www.instagram.com/rahulmahajan.98/",
  twitter: "https://twitter.com/RahulMahajan676",
  letterboxd: "https://letterboxd.com/rahulmahajan/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Creating application backend in Node & Express"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    ),
    emoji("⚡ Uses PostgreSQL & MongoDB as Database")
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "mongodb -database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Shri Mata Vaishno Devi University, Katra",
      logo: require("./assets/images/smvdu.png"),
      subHeader: "Bachelor of Technology in Computer Science & Engineering",
      duration: "August 2016 - August 2020",
      desc: "CGPA: 7.91/10"
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      // ],
    },
    {
      schoolName: "KC Public School",
      logo: require("./assets/images/kcps.png"),
      subHeader: "XII, CBSE",
      duration: "April 2015 - May 2016",
      desc: "Percentage: 91.5%"
      // desc:
      //   "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"],
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend Development", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend Development",
      progressPercentage: "90%"
    },
    {
      Stack: "UI/UX",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full-Stack Developer",
      company: "GraffersID",
      companylogo: require("./assets/images/graffersid.png"),
      date: "April 2022 – Present",
      desc: "Building Fintech..."
      // descBullets: [
      //   "Inventory Management / E-Comm",
      //   "Advertisement",
      //   "Matrimonial / Matchmaking",
      //   "Business Development"
      // ]
    },
    {
      role: "Full-Stack Developer",
      company: "Eoraa&Co",
      companylogo: require("./assets/images/eoraa.png"),
      date: "August 2020 – March 2022",
      desc: "Built software systems in different domains:",
      descBullets: [
        "Inventory Management / E-Comm",
        "Advertisement",
        "Matrimonial / Matchmaking",
        "Business Development"
      ]
    },
    {
      role: "Full-Stack Developer Intern",
      company: "Ezmata Technologies",
      companylogo: require("./assets/images/ezmata.jpeg"),
      date: "Apr 2020 – June 2020 & May 2019 – July 2019",
      desc: "",
      descBullets: [
        "Built the api's for ecommerce application with node js as backend and mongodb as database.",
        "Worked on project dealing with vuejs and nodejs",
        "integrated iot devices with the web"
      ]
    },
    {
      role: "Back End Developer Freelance",
      company: "Stickman Services",
      companylogo: require("./assets/images/stickman.png"),
      date: "Sept 2019 – Nov 2019",
      desc: "Built an ecommerce website using nodejs, mongodb, ejs, and many more services like nodemailer, msg91, etc"
      // descBullets: [
      //   "Built an ecommerce website.",
      //   "Database used is Mongodb.",
      //   "Backend used is NodeJs/ ExpressJs",
      //   "Vendor can add products, his shop details and many more.",
      //   "Admin can approve vendor, can also approve/reject his product and also add various images features and also hd points to the customer.",
      //   "Customer can watch and buy products.",
      //   "Wishlist and cart included.",
      //   "Deal types also included which can be set by admin according to his interest."
      // ]
    },
    {
      role: "Full-Stack Developer Intern",
      company: "Architectica Soft. Solutions",
      companylogo: require("./assets/images/arch.png"),
      date: "Jan 2019 – Apr 2019",
      desc: "",
      descBullets: [
        "Worked on a live project named Rental WebApp.",
        "This webapp deals with the customer and vendors for the dealing of renting if bikes, cars and adventure trips.",
        "Front End Technology: Angular",
        "Back End Technology: Firebase",
        "Link: https://rental-2f319.firebaseapp.com/ "
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle:
    "PERSONAL, SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/cart.png"),
      projectName: "Shop Gateway",
      projectDesc: "Shopping cart built with MERN & Redux",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://shopgateway.herokuapp.com/"
        },
        {
          name: "Visit Code",
          url: "https://github.com/rahulmhjn/E_Commerce_Platform"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/otz.png"),
      projectName: "OTZ JAPAN",
      projectDesc: "Built this e-comm website for my japanese client",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.otzjapan.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/mushroom.jpg"),
      projectName: "Tanoshiitake",
      projectDesc:
        "A platform for the japanese farmers to sell different types/species of mushroom. Also created a seller and admin dashboard for members to manage sales and stocks.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://tanoshiitake.team-chikara.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/cvalue.png"),
      projectName: "CValue",
      projectDesc:
        "Build and generate your CV automatically by adding the your bio-data",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.cvalueindia.com/"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "MERN Stack Certification",
      subtitle: "Udemy",
      image: require("./assets/images/mern.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1gH0dXWUN6P1BKe9_kXHMS4VN7VVP91kP/view?usp=sharing"
        }
      ]
    },
    {
      title: "Angular Online Winter training, 2018",
      subtitle: "Certification",
      image: require("./assets/images/angular.png"),
      footerLink: [
        {
          name: "Internshala",
          url: "https://drive.google.com/file/d/1stDH7QIIpp1O4OTZfmyB73PX9BHi52sr/view?usp=sharing"
        },
        {
          name: "Coursera",
          url: "https://drive.google.com/file/d/1PL-4COHg-ULKXWYhh7kGwV_CXqd0lv6l/view?usp=sharing"
        }
      ]
    },
    {
      title: "Server-side Development with NodeJS, Express and MongoDB",
      subtitle: "Coursera",
      image: require("./assets/images/nodejs.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/153vQClpvHEoFBv9qveKaHwCXT4SMSsY0/view?usp=sharing"
        }
      ]
    },

    {
      title: "Python Programming",
      subtitle: "Coursera",
      image: require("./assets/images/python.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1TCh7dPsuW9AIbzIgffMp4303MMdooQg5/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    // {
    //   url: "",
    //   title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
    //   description:
    //     "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    // },
    // {
    //   url: "",
    //   title: "Why REACT is The Best?",
    //   description:
    //     "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest 2019",
      slides_url: "",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [""],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "",
  email_address: "rahul.mahajan676@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "RahulMahajan676", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
