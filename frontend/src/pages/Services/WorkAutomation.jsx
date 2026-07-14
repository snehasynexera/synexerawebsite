import React from 'react'
import Navbar from '../../components/Navbar'
import HeroSectionService from '../../components/HeroSectionService'
import SynexeraServices from "../../components/SynexeraServices";
import WhyChooseUs from '../../components/WhyChooseUs';
import RingAnimation from '../../components/RingAnimation';
import Contact from '../../pages/Contact';
import Footer from '../Footer';
export default function WorkAutomation() {
  return (
    
    <div className="relative">
      <div className="absolute top-4 left-4 sm:left-8 z-20 flex items-center gap-2 sm:gap-3">
        <img src="/images/synexera.svg" alt="Synexera" className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 object-contain" />
        <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">Synexera</span>
      </div>
      <HeroSectionService 
       heading1="Systems You Can Rely On"
      heading2="Transforming Workflows"
      heading3="into Effortless "
      heading4= "Flow"
      subtext="Automate workflows and eliminate repetitive tasks. Work smarter, faster, and more efficiently."
      Image="/images/WorkflowAutomation.png"
      />
      <SynexeraServices 
       heading= "Our Automation Services"
        card1title= "Business Process Mapping"
         card1description="We analyze your current manual workflows to identify bottlenecks and design high-efficiency automated paths."
         card1image="/images/BusinessMapping.png"
          card2title="App & API Integration"
          card2description="Connect your favorite tools—from CRM and ERP to Slack and Gmail—creating a unified, automated ecosystem."
          card2image="/images/API.png"
          card3title="AI-Powered Workflows"
          card3description="Leverage Large Language Models and Machine Learning to automate complex decision-making and data processing"
          card3image="/images/AiWorkflow.png"
         />

      <WhyChooseUs 
      heading1="Why Choose"
      heading2="Synexera"
      heading3="for"
      heading4="Workflow  "
      heading5="Automation?"
      headingDescription="We don’t just link apps — we architect autonomous operational ecosystems with certified integration specialists, proven logic-validation workflows, and a zero-redundancy model that ensures your business processes run flawlessly."
      card1title="Error Reduction"
      card1description="Eliminate the risks of manual data entry and human oversight with precision-coded triggers."
      card2title="High Performance" 
      card2description="Our automations run 24/7, ensuring tasks are completed instantly without delays."
      card3title="Scalable Architecture"
      card3description="Future-proof systems built to handle increasing volumes of data as your business grows."
      card4title="Agile Implementation"
      card4description="Quick deployment of automation recipes with iterative improvements based on your team's feedback."
      card5title="Security First"
      card5description="Enterprise-grade encryption and secure authentication to keep your sensitive business data safe."
      card6title="Ongoing Optimization"
      card6description="Continuous monitoring and updates to ensure your workflows remain compatible with software updates."
      />
      <RingAnimation 
        heading1="Ready to Automate Your"
        heading2="Success?"
        subtext="Let’s turn your manual bottlenecks into a powerful, hands-free experience."
      />
      <Contact />
      <Footer />
    </div>

  )
}
    