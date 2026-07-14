import React from 'react'
import Navbar from '../../components/Navbar'
import HeroSectionService from '../../components/HeroSectionService'
import SynexeraServices from "../../components/SynexeraServices";
import WhyChooseUs from '../../components/WhyChooseUs';
import RingAnimation from '../../components/RingAnimation';
import Contact from '../../pages/Contact';
import Footer from '../Footer';
export default function AiMl() {
  return (
    
    <div className="relative">
      <div className="absolute top-4 left-4 sm:left-8 z-20 flex items-center gap-2 sm:gap-3">
        <img src="/images/synexera.svg" alt="Synexera" className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 object-contain" />
        <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">Synexera</span>
      </div>
      <HeroSectionService 
       heading1= "AI Solutions"
      heading2="Transforming Data  "
      heading3="into Scalable"
      heading4= "Intelligence"
      subtext="We eliminate technological friction across your workflows to ensure your intelligent applications always deliver production-grade accuracy and enterprise-scale reliability."
      Image="/images/AIML.png"
      />
      <SynexeraServices 
       heading= " Our AI & Machine Learning Services"
        card1title= " Custom ML Model Development"
         card1description="Design, train, and deploy bespoke predictive and generative models tailored to your exact business metrics."
         card1image="/images/MlModel.png"
          card2title="Natural Language Processing  "
          card2description="Extract deep insights, automate sentiment analysis, and power intelligent conversational systems."
          card2image="/images/NLM.png"
          card3title="Computer Vision Solutions"
          card3description=" Enable real-time visual inspection, object detection, and automated image tracking capabilities."
          card3image="/images/ComputerVision.png"
         />

      <WhyChooseUs 
      heading1="Why Choose"
      heading2="Synexera"
      heading3="for"
      heading4="AI"
      heading5="Innovation?"
      headingDescription="We don't just build algorithms — we architect high-impact AI models with expert engineers, automated workflows, and a future-proof machine learning stack that ensures your cognitive intelligence scales as fast as your business."
      card1title="Production-Grade Accuracy"
      card1description="Rigorous validation, data curation, and continuous model calibration for reliable outputs."
      card2title="Enterprise Tech Stack" 
      card2description="Deep expertise using PyTorch, TensorFlow, Hugging Face, and secure cloud ML platforms."
      card3title="Real-Time Observability"
      card3description="Complete visibility into model performance, tracking metrics, data drift, and latency."
      card4title="Responsible & Secure AI"
      card4description="Privacy-first model engineering with built-in data compliance and ethical governance safety checks."
      card5title="Rapid Time-to-Insight"
      card5description="Turn raw distributed data silos into actionable, automated business decisions within minutes."
      card6title="High-Throughput Scaling"
      card6description="Distributed architectures designed to compute massive training jobs and high-concurrency inference."
      />
      <RingAnimation 
        heading1="Ready to Automate Your"
        heading2="Cognitive Workflows?"
        subtext="Let's build a smarter future."
      />
      <Contact />
      <Footer />
    </div>

  )
}
    