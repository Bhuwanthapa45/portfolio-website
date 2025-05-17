const navLinks = [
    {
      name: "Work",
      link: "#work",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Ongoing Projects",
      link: "#testimonials",
    },
  ];
  
  const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
  ];
  
  const counterItems = [
    { value: 1, suffix: "+", label: "Years of Experience" },
    { value: 10, suffix: "+", label: "Passion Project Buit and Deployed" },
    { value: 30, suffix: "+", label: "Github Repo with Open-source Contribution" },
    { value: 10, suffix: "+", label: "College Project" },
  ];
  
  const logoIconsList = [
    {
      imgPath: "/images/logos/company-logo-1.png",
    },
    {
      imgPath: "/images/logos/company-logo-2.png",
    },
    {
      imgPath: "/images/logos/company-logo-3.png",
    },
    {
      imgPath: "/images/logos/company-logo-4.png",
    },
    {
      imgPath: "/images/logos/company-logo-5.png",
    },
    {
      imgPath: "/images/logos/company-logo-6.png",
    },
    {
      imgPath: "/images/logos/company-logo-7.png",
    },
    {
      imgPath: "/images/logos/company-logo-8.png",
    },
    {
      imgPath: "/images/logos/company-logo-9.png",
    },
    {
      imgPath: "/images/logos/company-logo-10.png",
    },
    {
      imgPath: "/images/logos/company-logo-11.png",
    },
  ];
  
  const abilities = [
    {
      imgPath: "/images/seo.png",
      title: "Quality Focus",
      desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
      imgPath: "/images/chat.png",
      title: "Reliable Communication",
      desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
      imgPath: "/images/time.png",
      title: "On-Time Delivery",
      desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
  ];
  
  const techStackImgs = [
    {
      name: "NextJS",
      imgPath: "/images/logos/NextJsWhite.png",
    },
    {
      name: "Mongo DB",
      imgPath: "/images/logos/MongoDBLogo.svg",
    },
    {
      name: "Zustand",
      imgPath: "/images/logos/ZustandLogo.png",
    },
    {
      name: "LangChain",
      imgPath: "/images/logos/LangChainLogo.png",
    },
    {
      name: "AWS",
      imgPath: "/images/logos/aws.png",
    },
  ];
  
  const techStackIcons = [
    {
      name: "React Developer",
      modelPath: "/models/react_logo-transformed.glb",
      scale: 1,
      rotation: [0, 0, 0],
    },
    {
      name: "Python Developer",
      modelPath: "/models/python-transformed.glb",
      scale: 0.8,
      rotation: [0, 0, 0],
    },
    {
      name: "Node JS Backend Developer",
      modelPath: "/models/node-transformed.glb",
      scale: 5,
      rotation: [0, -Math.PI / 2, 0],
    },
    {
      name: "Interactive Developer",
      modelPath: "/models/three.js-transformed.glb",
      scale: 0.05,
      rotation: [0, 0, 0],
    },
    {
      name: "Git/ Github",
      modelPath: "/models/git-svg-transformed.glb",
      scale: 0.05,
      rotation: [0, -Math.PI / 4, 0],
    },
  ];
  
  const expCards = [
    {
      review:
        "Bhuwan conducted in-depth reviews of several tech products for the company, contributing to a noticeable increase in their sales performance on the website.",
      imgPath: "/images/CompanyLogoOneSmall.png",
      logoPath: "/images/CompanyLogoOneSmall.png",
      title: "Tech Reviewer and Data Entry Clerk",
      date: "Jun 2022 - Oct 2022",
      responsibilities: [
        "Reviewed multiple tech products to support product visibility and performance.",
        "Collaborated with the development team as a Data Entry Intern to identify and report potential website bugs.",
        "Assisted in optimizing and automating the manual data entry process, improving overall workflow efficiency.",
      ],
    },
    {
      review:
        "CSRBOX IBM SkillsBuild ",
      imgPath: "/images/CompanyLogoTwo.png",
      logoPath: "/images/CompanyLogoTwoSmall.jpg",
      title: "Web Developer(Intern)",
      date: "June 2024 - August 2024",
      responsibilities: [
        "Collaborated with backend teams to integrate APIs and maintain a seamless user experience.",
        "Developed reusable React components for a scholarship scraping educational platform, improving code efficiency and UI consistency integrated RESTful APIs to ensure efficient data handling.",
        "Contributed to open-source projects ",
      ],
    },
    // {
    //   review:
    //     "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    //   imgPath: "/images/exp3.png",
    //   logoPath: "/images/logo3.png",
    //   title: "React Native Developer",
    //   date: "March 2019 - May 2020",
    //   responsibilities: [
    //     "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
    //     "Improved app performance and user experience through code optimization and testing.",
    //     "Coordinated with the product team to implement features based on feedback.",
    //   ],
    // },
  ];
  
  const expLogos = [
    {
      name: "logo1",
      imgPath: "/images/logo1.png",
    },
    {
      name: "logo2",
      imgPath: "/images/logo2.png",
    },
    {
      name: "logo3",
      imgPath: "/images/logo3.png",
    },
  ];
  
  const testimonials = [
    {
      name: "AI Powered News Platform",
     
      review:
        "An AI-powered decentralized news platform that gathers information from multiple reliable sources and uses data-driven analysis to publish unbiased, factual news. The goal is to eliminate misinformation and bias by leveraging artificial intelligence to verify facts, cross-check narratives, and ensure transparency, offering readers a trustworthy and balanced perspective on current events",
      
    },
    {
      name: "Software for Environment Protection",
     
      review:
        "A platform that predicts contrail formation areas by analyzing data from various sources such as NASA and Contrails.org. By aggregating weather patterns, flight paths, and atmospheric conditions through public APIs and datasets, the platform aims to provide accurate, real-time predictions of contrail activity, supporting research, environmental monitoring, and public awareness about their impact.",
      
    },
    {
      name: "",
     
      review:
        "Building a LangChain-based RAG (Retrieval-Augmented Generation) application that provides real-time updates on climate activities and environmental disruption events. By retrieving data from credible sources, the app aims to raise awareness about climate change and pollution, empowering users with accurate insights to promote informed decision-making and encourage action toward environmental protection and sustainability.",
      
    },
   
    
  ];
  
  const socialImgs = [
    {
      name: "insta",
      url: "https://www.instagram.com/",
      imgPath: "/images/insta.png",
    },
   
    {
      name: "x",
      url: "https://x.com/bhuwanthapa45",
      imgPath: "/images/x.png",
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/bhuwanesh-thapa-768979209/",
      imgPath: "/images/linkedin.png",
    },
  ];
  
  export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
  };

  