import React from 'react'
import Navbar from '../../components/Navbar'
import HeroSectionService from '../../components/HeroSectionService'
import SynexeraServices from "../../components/SynexeraServices";
import WhyChooseUs from '../../components/WhyChooseUs';
import RingAnimation from '../../components/RingAnimation';
import Contact from '../../pages/Contact';
import Footer from '../Footer';
export default function DataEntry () {
  return (
    
    <div className="relative">
      <div className="absolute top-4 left-4 sm:left-8 z-20 flex items-center gap-2 sm:gap-3">
        <img src="/images/synexera.svg" alt="Synexera" className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 object-contain" />
        <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">Synexera</span>
      </div>
      <HeroSectionService 
       heading1="Data You Can Trust"
      heading2="Transforming Raw"
      heading3="Data into  Actionable "
      heading4= "Insights"
      subtext="We handle the meticulous data management and workflows, freeing you to focus entirely on your core business."
      Image="/images/DataEntry.png"
      />
      <SynexeraServices 
       heading= "Our Data Entry Services"
        card1title="Data Mining & Web Research "
         card1description="Extracting valuable information from the web to build lead lists, competitor price maps, or industry databases."
         card1image="/images/DataMining.png"
          card2title="Data Cleaning & Scrubbing"
          card2description="Organizing messy datasets by removing duplicates, correcting errors, and formatting information for better usability."
          card2image="/images/DataCleaning.png"
          card3title="Online & Offline Data Entry"
          card3description="Accurate input from physical documents, handwritten notes, or digital files into your preferred database or CRM system."
          card3image="/images/Data.png"
         />

      <WhyChooseUs 
      heading1="Why Choose"
      heading2="Synexera"
      heading3="for"
      heading4="Data "
      heading5="Management?"
      headingDescription="We don’t just move data — we architect organized information systems with certified specialists, proven validation workflows, and a zero-error model that ensures your operations run flawlessly."
      card1title="99.9% Accuracy Guarantee"
      card1description="We use multi-tier quality checks to ensure that every entry is precise, reducing the risk of costly operational errors."
      card2title="Robust Data Security" 
      card2description="Your privacy is our priority. We use encrypted transfers and strict non-disclosure protocols to keep your sensitive info safe."
      card3title="High Scalability"
      card3description="Whether you have a thousand records or a million, our team can scale up quickly to meet your project deadlines."
      card4title="Cost-Effective Solutions"
      card4description="Reduce your overhead costs by outsourcing repetitive tasks to our specialized team without sacrificing quality."
      card5title="Fast Turnaround Time"
      card5description="We work around the clock to ensure your data is processed and delivered exactly when you need it."
      card6title="Custom Format Support"
      card6description="We work with all major file types and software, from Excel and Google Sheets to custom ERP and SQL databases."
      />
      <RingAnimation 
        heading1="Ready to Organize Your"
        heading2="Business Data?"
        subtext="Let’s turn your backlog into a streamlined digital asset."
      />
      <Contact />
      <Footer />
    </div>

  )
}
    