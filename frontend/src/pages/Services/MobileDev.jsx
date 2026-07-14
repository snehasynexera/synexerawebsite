import React from 'react'
import Navbar from '../../components/Navbar'
import HeroSectionService from '../../components/HeroSectionService'
import SynexeraServices from "../../components/SynexeraServices";
import WhyChooseUs from '../../components/WhyChooseUs';
import RingAnimation from '../../components/RingAnimation';
import Contact from '../../pages/Contact';
import Footer from '../Footer';
export default function MobileDev() {
  return (
    
    <div className="relative">
      <div className="absolute top-4 left-4 sm:left-8 z-20 flex items-center gap-2 sm:gap-3">
        <img src="/images/synexera.svg" alt="Synexera" className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 object-contain" />
        <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">Synexera</span>
      </div>
      <HeroSectionService 
       heading1="Our Mobile Ecosystem"
      heading2="Transforming Your"
      heading3="Mobile App Ideas"
      heading4= "into Reality"
      subtext="We create high-performance mobile applications tailored to your business needs using cutting-edge technologies and user-first design."
      Image="/images/MobileDev.png"
      />
      <SynexeraServices 
       heading="Our App Development Services"
        card1title="Android App Development "
         card1description="Align your compute and storage to exactly fit your needs – no waste, pure efficiency."
         card1image="/images/AndroidApp.png"
          card2title="Reserved Instances & Savings Plans"
          card2description="Strategic long-term purchasing for  consolidated pricing excellence."
          card2image="/images/SavingPlan.png"
          card3title="Automated Scaling"
          card3description="Optimize performance by intelligently utilizing resources ensuring maximum efficiency and minimal waste. your compute and storage to exactly fit your needs – no waste, pure efficiency."
          card3image="/images/AS.png"
         />

      <WhyChooseUs 
      heading1="Why Choose"
      heading2="Synexera"
      heading3="for"
      heading4="Mobile "
      heading5="Development?"
      headingDescription="We don't just build apps — we engineer scalable mobile ecosystems with certified developers, performance-driven code, and a launch-ready model that ensures your product succeeds on day one."
      card1title=" Performance First"
      card1description="Apps optimized for speed, low battery consumption, and offline capability"
      card2title="Security-By-Design" 
      card2description="Enterprise-grade encryption and biometric authentication as standard."
      card3title="Agile Delivery"
      card3description="Rapid prototyping and bi-weekly sprints to get you to market faster."
      card4title="API Integration"
      card4description="Seamless connectivity with your existing CRM, ERP, or Cloud backend."
      card5title="Scalable Architecture"
      card5description="Code built to handle 10 users or 10 million without breaking."
      card6title="Post-Launch Support"
      card6description="Continuous monitoring and OS updates to keep your app relevant."
      />
      <RingAnimation 
        heading1="Ready to Build Your "
        heading2="Mobile App?"
        subtext=" Let’s turn your idea into a powerful mobile experience."
      />
      <Contact />
      <Footer />
    </div>

  )
}
