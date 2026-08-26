import React, { useState } from 'react'
import NavBarother from '../../components/NavBarother'
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
      <NavBarother />
      
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