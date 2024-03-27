import webDevelopment from "../../assets/website-development.webp"
import AppDevelopment from "../../assets/mobile-app-development.webp"
import seo from "../../assets/seo-services-carousel.webp"
import sde from "../../assets/softwareDevelopment.webp"
    const slides = [
        {
          title1: "WELCOME TO",
          title2: "DevVerse",
          description: "Leading top software house in Pakistan. We offer our services in web designing, CRM systems, digital marketing, and mobile apps.",
          buttonLink: "https://www.example.com/apps", 

          rightImageSrc: "devPulse-frontend/src/assets/firstSlideBg.MP4",
        },
       
        {
        
          title1: "Web Development",
          title2: "Responsive & Reliable",
          description: "We plan, design your website from start to finish, ensuring a high ROI for clients. Our major concern is client satisfaction.",
          buttonText: "READ MORE",
          rightImageSrc: webDevelopment, 
          backgroundColor:"#e5e4e2 ",
          buttonLink: '/web-development'
        },

        {
          title1: "Mobile Apps Development",
          title2: "We Build Awesome Apps",
          description: "We know how to build Apps that will help you increase business.",
          buttonText: "READ MORE",
          rightImageSrc: AppDevelopment,
          backgroundColor:"#f2f3f4",
          buttonLink: "/mobile-apps" 
        },

        {
        
          title1: "Software Development",
          title2: "We Focus on Quality ",
          description: "We work together with our Clients to build a Compelling Product that provide lasting excitement and value to our customers, We have Passionate, Creative, Experienced Developers.",
          buttonText: "READ MORE",
          rightImageSrc: sde,
          backgroundColor:"#e5e4e2 ",
          buttonLink: "/services",
        },
        {
          title1: "Search Engine",
          title2: "Optimization",
          description: "We start the SEO process with a full website audit and recommendations report. Our team will review your key metrics, perform keyword research, analyze your competitors, your linkscape, and key pages of your website, and create a detailed implementation plan.",
          buttonText: "READ MORE",
          rightImageSrc: seo,
          backgroundColor:"#bebebe  ",
          buttonLink: "/seo-services",
        },
        
      ];
      export default slides;