import React from 'react'
import Navbar from '../../components/Navbar'
import HeroSectionService from '../../components/HeroSectionService'
import SynexeraServices from "../../components/SynexeraServices";
import WhyChooseUs from '../../components/WhyChooseUs';
import RingAnimation from '../../components/RingAnimation';
import Contact from '../../pages/Contact';
import Footer from '../Footer';
export default function CloudOptimization() {
  return (
    
    <div className="relative">
      {/* Logo — overlays hero section */}
      <div className="absolute top-4 left-4 sm:left-8 z-20 flex items-center gap-2 sm:gap-3">
        <img
          src="/images/synexera.svg"
          alt="Synexera"
          className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 object-contain"
        />
        <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">
          Synexera
        </span>
      </div>
      <HeroSectionService 
       heading1="Our Optimization Services"
      heading2="Transforming Your"
      heading3="Cloud Costs Into"
      heading4= "Savings"
      subtext="We slash your AWS, Azure, & GCP bills by 30% or more Guaranteed. Reclaim your budget without sacrificing performance."
      Image="/images/Cloud.png"
      />
      <SynexeraServices 
       heading="Our Cloud Optimization Services"
        card1title="Infrastructure Rightsizing"
         card1description="Align your compute and storage to exactly fit your needs – no waste, pure efficiency."
         card1image="/images/infrastructrue.png"
          card2title="Reserved Instances & Savings Plans"
          card2description="Strategic long-term purchasing for consolidated pricing excellence."
          card2image="/images/Reserved.png"
          card3title="Cost Allocation & Tagging"
          card3description="Implement effective cost allocation strategies to track and manage cloud expenses."
          card3image="/images/AutomatedScaling.png"
         />

      <WhyChooseUs 
      heading1="Why Choose"
      heading2="Synexera for"
      heading3="Cloud"
      heading4="Optimization"
      heading5="Services?"
      headingDescription="We don't just report on your cloud spend — we actively reduce it with certified experts, proven automation, and a no-surprise billing model."
      card1title="Automated Intelligent Scaling"
      card1description="Instant resource adjustment that scales up for traffic spikes and scales down to save costs during downtime."
      card2title="Security-First Focus" 
      card2description="Maintain total compliance and data safety while streamlining your cloud architecture for efficiency."
      card3title="Real-Time Insights"
      card3description="Track every penny and performance metric via a unified dashboard with granular, live data."
      card4title="Optimal AI-Rightsizing"
      card4description="Eliminate waste by automatically resizing or removing underutilized instances to match your actual workload."
      card5title="Zero-Downtime Tweaks"
      card5description="Implement performance and cost optimizations seamlessly without a second of service interruption."
      card6title="Secure Efficiency"
      card6description="Enterprise-grade security baked into every cost-saving measure."
      />
      <RingAnimation 
        heading1="Ready to Optimize Your"
        heading2="Cloud Costs?"
        subtext="Join hundreds of companies saving millions on cloud infrastructure"
      />
      <Contact />
      <Footer />
    </div>

  )
}
