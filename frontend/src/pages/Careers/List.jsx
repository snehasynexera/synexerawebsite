import React, { useState } from 'react'
import HeroSectionCareer from '../../components/HeroSectionCareer'
import CareerList from '../../components/CareerList'
import KnowMoreCareer from '../../components/KnowMoreCareer'
import Footer from '../Footer'
import { jobsData } from '../../data/jobsData'

export default function List() {
  const [searchQuery, setSearchQuery] = useState({ keyword: '', location: '' })

  const filteredJobs = jobsData.filter((job) => {
    const kw = searchQuery.keyword.trim().toLowerCase()
    const loc = searchQuery.location.trim().toLowerCase()

    const matchesKeyword =
      !kw ||
      job.title?.toLowerCase().includes(kw) ||
      job.category?.toLowerCase().includes(kw) ||
      job.description?.toLowerCase().includes(kw) ||
      job.department?.toLowerCase().includes(kw) ||
      job.requirements?.some((req) => req.toLowerCase().includes(kw)) ||
      job.responsibilities?.some((resp) => resp.toLowerCase().includes(kw))

    const matchesLocation =
      !loc ||
      job.location?.toLowerCase().includes(loc) ||
      job.type?.toLowerCase().includes(loc)

    return matchesKeyword && matchesLocation
  })

  const handleSearch = (keyword, location) => {
    setSearchQuery({ keyword, location })
  }

  const handleResetSearch = () => {
    setSearchQuery({ keyword: '', location: '' })
  }

  return (
    <div className="relative">
      <div className="absolute top-4 left-4 sm:left-8 z-20 flex items-center gap-2 sm:gap-3">
        <img src="/images/synexera.svg" alt="Synexera" className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 object-contain" />
        <span className="text-lg sm:text-xl md:text-2xl font-bold text-blue">Synexera</span>
      </div>
      
      <HeroSectionCareer
        Number={jobsData.length}
        onSearch={handleSearch}
        activeKeyword={searchQuery.keyword}
        activeLocation={searchQuery.location}
      />
      <CareerList
        filteredJobs={filteredJobs}
        onResetSearch={handleResetSearch}
        searchKeyword={searchQuery.keyword}
        searchLocation={searchQuery.location}
      />
      <KnowMoreCareer />
      <Footer />
    </div>
  )
}