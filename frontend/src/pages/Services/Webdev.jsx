import React from 'react'
import NavBarother from '../../components/NavBarother'
import HeroSectionService from '../../components/HeroSectionService'
import SynexeraServices from "../../components/SynexeraServices";
import WhyChooseUs from '../../components/WhyChooseUs';
import RingAnimation from '../../components/RingAnimation';
import Contact from '../../pages/Contact';
import Footer from '../Footer';
export default function Webdev () {
  return (
    
    <div className="relative">
      <NavBarother />
      <HeroSectionService 
       heading1=" Our Web Framework"
      heading2="Transforming Ideas"
      heading3="into Powerful Web "
      heading4= "Experience"
      subtext="We deliver high-performance web applications tailored to your goals. Our team handles the technical complexity so you can focus on growing your business. "
      Image="/images/WebDev.png"
      />
      <SynexeraServices 
       heading="Our Web Development Services"
        card1title="Custom Web App Development "
         card1description="We build scalable and secure web applications tailored to your business needs, ensuring optimal performance and user experience."
         card1image="/images/WebApp.png"
          card2title="Progressive Web Apps"
          card2description="High-speed, installable web experiences that look and feel like native mobile apps on any device."
          card2image="/images/PWA.png"
          card3title="CMS & API Integration"
          card3description="Seamlessly connect your web app with third-party tools and easy-to-use content management systems."
          card3image="/images/CMS.png"
         />

      <WhyChooseUs 
      heading1="Why Choose"
      heading2="Synexera"
      heading3="for"
      heading4="Web "
      heading5="Development?"
      headingDescription="We don't just design websites — we architect high-conversion digital platforms with expert engineers, streamlined workflows, and a future-proof tech stack that ensures your web presence grows as fast as your business."
      card1title="Modern Tech Stack"
      card1description="We use the latest frameworks like React, Next.js, and Node.js for fast, future-proof applications."
      card2title="Responsive by Design" 
      card2description="Your web app will look and function perfectly across desktops, tablets, and smartphones."
      card3title="SEO & Speed Optimized"
      card3description="Clean code and optimized architecture to ensure fast load times and better search engine rankings"
      card4title="Enterprise-Grade Security"
      card4description="Seamless connectivity with your existing CRM, ERP, or Cloud backend."
      card5title="Scalable Architecture"
      card5description="Applications designed to handle traffic spikes and grow alongside your user base."
      card6title="Agile Methodology"
      card6description="Transparent development with regular updates and iterative improvements based on your feedback."
      />
      <RingAnimation 
        heading1="Ready to Launch Your"
        heading2="Web Application?"
        subtext="Let’s turn your browser-based vision into a digital reality."
      />
      <Contact />
      <Footer />
    </div>

  )
}
