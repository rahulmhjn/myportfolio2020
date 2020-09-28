/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Rahul Mahajan",
  title: "Hi all, I'm Rahul",
  subTitle: emoji(
    "A passionate Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native / Angular and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1qhkmhYC9u78Q66DGaiTICW75uV4DpSBM/view?usp=sharing",
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/rahulmhjn",
  linkedin: "https://www.linkedin.com/in/rahul-mahajan0786/",
  gmail: "rahul.mahajan676@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/rahul.mahajan.796569",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

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
    emoji("⚡ Uses PostgreSQL & MongoDB as Database"),
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "mongodb -database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker",
    },
  ],
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Shri Mata Vaishno Devi University, Katra",
      logo: require("./assets/images/smvdu.png"),
      subHeader: "Bachelor of Technology in Computer Science & Engineering",
      duration: "August 2016 - August 2020",
      desc: "CGPA: 7.91/10",
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
      desc: "Percentage: 91.5%",
      // desc:
      //   "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend Development", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend Development",
      progressPercentage: "90%",
    },
    {
      Stack: "UI/UX",
      progressPercentage: "60%",
    },
    {
      Stack: "Programming",
      progressPercentage: "60%",
    },
  ],
};

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full-Stack Developer (MERN)",
      company: "Eoraa&Co",
      companylogo: require("./assets/images/eoraa.png"),
      date: "August 2020 – Present",
      desc: "Working as a Full-time employee",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      // ],
    },
    {
      role: "Full-Stack Developer Intern",
      company: "Ezmata Technologies",
      companylogo: require("./assets/images/ezmata.jpeg"),
      date: "Apr 2020 – June 2020 & May 2019 – July 2019",
      desc: "",
      descBullets: [
        " Built the api's for ecommerce application with node js as backend and mongodb as database.",
        "Database used is Mongodb.",
        "Worked on project dealing with vuejs and nodejs.",
        "Worked on a project using React.",
        "Using my nodejs skills, integrated an iot device with the web using mongodb as a database.",
        "Built a variety of applications in Angular and nodejs as backend.",
      ],
    },
    {
      role: "Back End Developer Intern",
      company: "Stickman Services",
      companylogo: require("./assets/images/stickman.png"),
      date: "Sept 2019 – Nov 2019",
      desc: "",
      descBullets: [
        "Built an ecommerce website.",
        "Database used is Mongodb.",
        "Backend used is NodeJs/ ExpressJs",
        "Vendor can add products, his shop details and many more.",
        "Admin can approve vendor, can also approve/reject his product and also add various images features and also hd points to the customer.",
        "Customer can watch and buy products.",
        "Wishlist and cart included.",
        "Deal types also included which can be set by admin according to his interest.",
      ],
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
        "Link: https://rental-2f319.firebaseapp.com/ ",
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "rahulmhjn", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to false
};

// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/otz.png"),
      link: "https://www.otzjapan.com/",
    },
    {
      image: require("./assets/images/indovation.png"),
      link: "https://www.indovationindia.com/",
    },
    {
      image: require("./assets/images/cvalue.png"),
      link: "https://www.indovationindia.com/",
    },
  ],
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Angular Online Winter training, 2018",
      subtitle: "Certification",
      image: require("./assets/images/angular.png"),
      footerLink: [
        {
          name: "Internshala",
          url:
            "https://drive.google.com/file/d/1stDH7QIIpp1O4OTZfmyB73PX9BHi52sr/view?usp=sharing",
        },
        {
          name: "Coursera",
          url:
            "https://drive.google.com/file/d/1PL-4COHg-ULKXWYhh7kGwV_CXqd0lv6l/view?usp=sharing",
        },
      ],
    },
    {
      title: "Server-side Development with NodeJS, Express and MongoDB",
      subtitle: "Coursera",
      image: require("./assets/images/nodejs.png"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/153vQClpvHEoFBv9qveKaHwCXT4SMSsY0/view?usp=sharing",
        },
      ],
    },

    {
      title: "Python Programming",
      subtitle: "Coursera",
      image: require("./assets/images/python.png"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/1TCh7dPsuW9AIbzIgffMp4303MMdooQg5/view?usp=sharing",
        },
      ],
    },
  ],
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    // {
    //   url:
    //     "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
    //   title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
    //   description:
    //     "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?",
    // },
    // {
    //   url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
    //   title: "Why REACT is The Best?",
    //   description:
    //     "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
    // },
  ],
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
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/",
    },
  ],
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo",
  ],
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3243454077",
  email_address: "rahul.mahajan676@gmail.com",
};

//Twitter Section

const twitterDetails = {
  // userName: "RahulMahajan676", //Replace "twitter" with your twitter username without @
};
export {
  greeting,
  socialMediaLinks,
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
};
