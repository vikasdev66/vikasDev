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
  username: "VikasDev",
  title: "Hey, I'm Vikas",
  subTitle: emoji(
    "A passionate Frontend Developer 🚀 having an experience of building Web Applications with ReactJS / TypeScript / and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1n-1vQP_vxfacg2_7xIdMoOkb0M_5RhCd/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/vikasdev66",
  linkedin: "https://www.linkedin.com/in/vikasdev/",
  gmail: "vikasmishra.webdev@gmail.com",
  hashnode: "",
  leetcode: "",
  instagram: "",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "My Selling Points?",
  subTitle: "",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your Web applications"
    ),
    emoji(
      "⚡ Web App Optimizations (including UI, UX, Network Calls, Responsiveness) using Modern Techniques"
    ),
    emoji("⚡ Developed features from scratch."),
    emoji("⚡ Built multiple reusable UI and custom hooks."),
    emoji(
      "⚡ Implementing tasks according to the requirement in React.js with TypeScript."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    }
    // {
    //   skillName: "nodejs",
    //   fontAwesomeClassname: "fab fa-node"
    // },
    // {
    //   skillName: "sql-database",
    //   fontAwesomeClassname: "fas fa-database"
    // },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Integral University",
      logo: require("./assets/images/Integral.png"),
      subHeader: "Master in Computer Application | CGPA 8.2",
      duration: "Batch 2020 - 2022",
      desc: "Have Developed Web Applications Like :-",
      descBullets: [
        "Invoice Generator for Inventory & Store Management",
        "Web Chat Application"
      ]
    },
    {
      schoolName: "Integral University",
      logo: require("./assets/images/Integral.png"),
      subHeader: "Bachelors in Computer Application",
      duration: "Batch 2017 - 2020",
      desc: "",
      descBullets: []
    }
    // {
    //   schoolName: "Lucknow University | CGPA 7",
    //   logo: require("./assets/images/Lucknow.jpg"),
    //   subHeader: "Bachelors in Computer Application",
    //   duration: "Batch 2017 - 2020",
    //   desc: "Have Developed Web Applications Like :-",
    //   descBullets: ["Local Mart Cart App"]
    // },
    // {
    //   schoolName: "Kendriya Vidyalaya IIM | CGPA 8",
    //   logo: require("./assets/images/KV.png"),
    //   subHeader: "Majors in Physics, Chemistry & Maths",
    //   duration: "Batch 2015 - 2017",
    //   desc: "",
    //   descBullets: []
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    // {
    //   Stack: "Backend",
    //   progressPercentage: "70%"
    // },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Frontend Developer",
      company: "Analytic Edge Pvt. Ltd.",
      companylogo: require("./assets/images/analyticEdge.png"),
      date: "July 2022 – November 2023",
      descBullets: [
        "Developed 2 Operational websites for oraganizations showcasing their business and capturing leads.",
        "Worked on the optimization of customer facing live websites.",
        "Have contributed in internal component libraries, by creating responsive reusable components."
      ]
    },
    {
      role: "Frontend Developer",
      company: "ANALYZE INFOTECH",
      companylogo: require("./assets/images/analyze-infotech.png"),
      date: "August 2021 – July 2022",
      descBullets: [
        "Built dynamic, interactive UIs using React and TypeScript.",
        "Developed responsive, reusable components for internal libraries.",
        "Collaborated with backend teams to integrate RESTful APIs for seamless user experiences."
      ]
    }
    // {
    //   role: "Sr. Software Engineer",
    //   company: "DePronto Infotech",
    //   companylogo: require("./assets/images/DePronto.jpg"),
    //   date: "April 2022 – Present",
    //   descBullets: [
    //     "Developed 3 customer-facing applications for ICICI Prudential & HDFC Life with React, NodeJS, and AEM with 2 million Active Users.",
    //     "Contributed in the R&D of Product enhancement and optimization, and also to streamline the process of CI/CD Pipelines.",
    //     "Have contributed in the optimizations of one of the best selling insurance product in India. (Estimate of 30%)",
    //     "Engineered a automation script that streamlines the process of creating UAT and Production ready builds.",
    //     "Took active part in Security Operations for client's infrastructure & various security migration projects to safeguard vulnerability issues.",
    //     "Lead the recurring IT Disaster Recovery Routine with the team of 4 Developers."
    //   ]
    // }
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
  title: "Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/react-interview-project-image.png"),
      projectName: "React Interview Projects",
      projectDesc:
        "Explore a React web application I developed to practice interview coding rounds. The project consolidates all UI logic-based tasks, each designed to be completed in 30 to 40 minutes. All projects are easily accessible from the navbar.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://react-interview-projects-taupe.vercel.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/invoiceImg.png"),
      projectName: "Invoice Generator",
      projectDesc:
        "An Invoice Generator built with React is a web application designed to create and manage invoices.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://invoice-generating-app.netlify.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/chat.png"),
      projectName: "Web Chat Application",
      projectDesc:
        "A web chat application made using ReactJs is a real-time communication platform that allows users to exchange messages over the internet.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://chating-application-react.netlify.app/"
        }
      ]
    },
    {
      image: require("./assets/images/weatherImg.png"),
      projectName: "Weather Forecast Application",
      projectDesc:
        "Developed a responsive weather forecasting application using React, integrating real-time weather data from a public API.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://weather-report-react.netlify.app/"
        }
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
      title: "Top 50 Scholar Student in IFERP",
      subtitle: "Institute For Educational Research and Publication (IFERP)",
      image: require("./assets/images/IFERP.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Speaker",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Mentorship",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Scholarship by CETI",
      subtitle:
        "CETI starts with objective of coaching and mentoring deserving students.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Mentorship by Google SDE",
          url: "https://www.cetigroup.org/mentors/#lg=1&slide=0"
        }
      ]
    },

    {
      title: "Hacker Rank",
      subtitle: "Completed my JavaScript Certification from Hacker Rank",
      image: require("./assets/images/HackerRank.png"),
      imageAlt: "Hacker Rank JavaScript",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://Vikasstack.hashnode.dev/top-7-aws-services-for-developers",
      title: "Top 7 AWS Services for Developers",
      description:
        "Amazon Web Services (AWS) stands out with its extensive range of services tailored to empower developers. In this article, we will delve into the top 7 AWS services that software developers should become familiar with"
    },
    {
      url: "https://Vikasstack.hashnode.dev/writing-shorter-optimize-code-in-javascript",
      title: "Writing Shorter & Optimize Code in JavaScript",
      description:
        "Writing concise and efficient code is crucial for improving readability, performance, and maintainability. One way to achieve this is by leveraging shorthand expressions, which allow you to write shorter code while maintaining clarity and efficiency."
    },
    {
      url: "https://Vikasstack.hashnode.dev/how-to-dockerize-a-reactjs-application-a-step-by-step-guide",
      title: "How to Dockerize a React.js Application: A Step-by-Step Guide",
      description:
        "Docker has become a popular choice for containerizing applications, and it can greatly simplify the deployment and distribution process. If you have a React.js application and want to containerize it using Docker, this step-by-step guide will walk you through the process."
    },
    {
      url: "https://Vikasstack.hashnode.dev/mastering-javascript-write-code-like-senior-developers",
      title: "Mastering JavaScript: Write Code Like Senior Developers",
      description:
        "As a senior JavaScript developer, it is essential to not only write code that functions correctly but also to ensure that it is maintainable, efficient, and secure. By following best practices and adhering to established code conventions, you can enhance code readability, reduce errors, and optimize performance."
    },
    {
      url: "https://Vikasstack.hashnode.dev/dockerizing-rest-api-using-nodejs",
      title: "Dockerizing REST API using NodeJS",
      description:
        "Docker has revolutionized the way we develop, deploy, and manage applications. It provides a lightweight and portable containerization platform that simplifies the process of packaging and running applications in isolated environments."
    },
    {
      url: "https://Vikasstack.hashnode.dev/securing-web-applications-best-practices",
      title: "Securing Web Applications : Best Practices",
      description:
        "Web applications have become an integral part of our lives, offering convenience and accessibility. However, the increasing dependence on web applications has also led to a rise in online attacks targeting their vulnerabilities."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Testimonial",
  subtitle: emoji("I know we all need a good word & feedback 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
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
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? Always open to opportunities.",
  number: "+91-7355633870",
  email_address: "vikasmishra.webdev@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
