import React from 'react'
import NavBarother from '../../components/NavBarother'
import HeroSectionService from '../../components/HeroSectionService'
import SynexeraServices from "../../components/SynexeraServices";
import WhyChooseUs from '../../components/WhyChooseUs';
import RingAnimation from '../../components/RingAnimation';
import Contact from '../../pages/Contact';
import Footer from '../Footer';
export default function ContentWriting () {
  return (
    
    <div className="relative">
      <NavBarother />
      <HeroSectionService 
       heading1=" Words That Drive Results"
      heading2="Transforming Your"
      heading3="Ideas into Compelling"
      heading4= "Stories"
      subtext="We craft high-impact content tailored to your brand’s voice using data-driven strategies and a reader-first approach. Whether you need to educate, inspire, or convert, we bring your message to life."
      Image="/images/ContentWriting.png"
      />
      <SynexeraServices 
       heading=" Our Content Writing Services"
        card1title="Blog & Article Writing "
         card1description="Build authority and drive organic traffic with SEO-optimized long-form content that provides real value to your readers."
         card1image="/images/Blog.png"
          card2title="Copywriting for Sales"
          card2description="High-conversion landing pages, email sequences, and ad copy designed to turn casual browsers into loyal customers."
          card2image="/images/CopyWriting.png"
          card3title="Social Media Content"
          card3description="Engaging, platform-specific posts that spark conversations and grow your community across LinkedIn, Instagram, and Twitter."
          card3image="/images/SocialMedia.png"
         />

      <WhyChooseUs 
      heading1="Why Choose"
      heading2="Synexera"
      heading3="for"
      heading4="Your "
      heading5="Content?"
      headingDescription="We don’t just write words — we engineer strategic narratives with expert storytellers, data-driven insights, and a performance-first model that ensures your message resonates and converts."
      card1title="SEO-Focused Strategy"
      card1description="We don’t just write—we optimize. Every piece is crafted to rank higher while staying natural and engaging."
      card2title="Original & Human-First" 
      card2description="No generic AI-filler. We provide authentic, well-researched content that resonates with human emotions and intellect."
      card3title="Consistent Brand Voice"
      card3description="We adapt to your unique tone—whether it's professional and corporate or bold and conversational."
      card4title="Data-Driven Research"
      card4description="Our writers dive deep into your niche to ensure every claim is backed by facts and current market trends."
      card5title="Flawless Quality Control"
      card5description="Applications designed to handle traffic spikes and grow alongside your user base."
      card6title="Timely Delivery"
      card6description="We value your roadmap. Our agile workflow ensures your content calendar stays on track without compromising quality."
      />
      <RingAnimation 
        heading1="Ready to Elevate Your"
        heading2="Brand Voice?"
        subtext="Let’s turn your vision into a powerful narrative."
      />
      <Contact />
      <Footer />
    </div>

  )
}
    