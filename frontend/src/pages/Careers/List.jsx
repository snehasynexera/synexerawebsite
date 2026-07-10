 import React from 'react'
 import HeroSectionCareer from '../../components/HeroSectionCareer'
import CareerList from '../../components/CareerList' 
import KnowMoreCareer from '../../components/KnowMoreCareer'
import Footer from '../Footer'
export default function List() {
  return (
<div className="relative  ">
  
      <div className="absolute top-4 left-4 sm:left-8 z-20 flex items-center gap-2 sm:gap-3">
        <img src="/images/synexera.svg" alt="Synexera" className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 object-contain" />
        <span className="text-lg sm:text-xl md:text-2xl font-bold text-blue">Synexera</span>
        
      </div>
      
      <HeroSectionCareer />
      <CareerList/>
    <KnowMoreCareer/>
    <Footer/>
      </div>
        )}