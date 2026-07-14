import React from 'react'
import Navbar from '../../components/Navbar'
import HeroSectionService from '../../components/HeroSectionService'
import SynexeraServices from "../../components/SynexeraServices";
import WhyChooseUs from '../../components/WhyChooseUs';
import RingAnimation from '../../components/RingAnimation';
import Contact from '../../pages/Contact';
import Footer from '../Footer';
export default function DevOps() {
  return (
    
    <div className="relative">
      <div className="absolute top-4 left-4 sm:left-8 z-20 flex items-center gap-2 sm:gap-3">
        <img src="/images/synexera.svg" alt="Synexera" className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 object-contain" />
        <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">Synexera</span>
      </div>
      <HeroSectionService 
       heading1=" Optimize Workflow "
      heading2="Transforming Workflows "
      heading3="into Scalable "
      heading4= "Cloud Realities"
      subtext="We bridge the gap between development and operations, replacing manual friction with automated, secure, and resilient deployment engines"
      Image="/images/DevImage.png"
      />
      <SynexeraServices 
       heading= "Our  DevOps Services"
        card1title= "CI/CD Pipeline Automation"
         card1description="Automate your build, test, and deployment workflows for rapid, reliable delivery."
         card1image="/images/CI_CD.png"
          card2title="Infrastructure as Code "
          card2description="Manage, version, and provision your cloud infrastructure safely and reliably using code."
          card2image="/images/InfrastructureAsCode.png"
          card3title="DevSecOps & Compliance"
          card3description="Integrate automated security testing and vulnerability scanning directly into your delivery cycle."
          card3image="/images/DevSecOps.png"
         />

      <WhyChooseUs 
      heading1="Why Choose"
      heading2="Synexera"
      heading3="for"
      heading4="DevOps"
      heading5="Automation?"
      headingDescription="We don’t just manage infrastructure — we build scalable DevOps solutions with automation, cloud-native workflows, and reliable deployment pipelines that grow with your business."
      card1title="Continuous Monitoring"
      card1description="Real-time visibility into system health, automated logging, and proactive alerting."
      card2title="Cloud-Agnostic Expertise" 
      card2description="Seamless architectures designed for AWS, Google Cloud, Azure, or hybrid environments."
      card3title="Reduced Time-to-Market"
      card3description="Cut your software release cycles down from weeks to minutes with smart automation."
      card4title="High Availability"
      card4description="Self-healing infrastructures engineered to automatically recover from failures and traffic spikes."
      card5title="Zero-Downtime Deployments"
      card5description="Implement blue-green, canary, and rolling deployment strategies smoothly."
      card6title="Modern Tooling Stack"
      card6description="Deep expertise in Docker, Kubernetes, Terraform, AWS, and GitHub Actions."
      />
      <RingAnimation 
        heading1="Ready to Streamline Your"
        heading2="Infrastructure?"
        subtext="Let's build a smarter pipeline."
      />
      <Contact />
      <Footer />
    </div>

  )
}
    