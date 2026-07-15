import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { jobsData } from '../../../data/jobsData'
import Footer from '../../Footer'

export default function Details() {
  const { jobId } = useParams()
  const job = jobsData.find((item) => item.id === jobId) || jobsData[0]
  const emailAddress = job.applyEmail || 'hr@synexera.com'

  const [copied, setCopied] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    setCopied(false)
  }, [jobId])

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 3000)
  }

  if (!job) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
        <h1 className="text-3xl font-bold text-[#070B55]">Job Not Found</h1>
        <Link
          to="/Careers/List"
          className="mt-6 bg-[#00CED1] text-[#070B55] px-6 py-3 rounded-full font-semibold"
        >
          Back to Careers
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col justify-between pt-28 sm:pt-32">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto w-full px-6 sm:px-10 pb-20">
        {/* Navigation Back */}
        <Link
          to="/Careers/List"
          className="inline-flex items-center gap-2 text-[#070B55]/70 hover:text-[#070B55] font-medium text-sm sm:text-base transition-colors mb-8"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span>Back to All Openings</span>
        </Link>

        {/* Hero Header Card */}
        <div className="bg-[#070B55] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-64 h-64 bg-[#00CED1]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-wrap items-center justify-between gap-6 relative z-10">
            <div>
              <span className="inline-block bg-[#00CED1] text-[#070B55] text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
                {job.category} • {job.department}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-['Syne'] font-bold">
                {job.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 mt-6 text-gray-300 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-[#00CED1]">📍</span>
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#00CED1]">💼</span>
                  <span>{job.type}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#00CED1]">💰</span>
                  <span>{job.salary}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#00CED1]">⏳</span>
                  <span>{job.experience}</span>
                </div>
              </div>
            </div>

            <a
              href="#how-to-apply"
              className="bg-[#00CED1] hover:bg-[#00B2B5] text-[#070B55] font-semibold px-8 py-3.5 rounded-full shadow-lg transition-transform hover:scale-105 duration-300"
            >
              Apply via Email
            </a>
          </div>
        </div>

        {/* Job Details Section (Single Column Layout) */}
        <div className="space-y-8 mt-10">
          {/* Overview */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-['Syne'] font-bold text-[#070B55] mb-4">
              Role Overview
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              {job.overview}
            </p>
          </div>

          {/* Key Responsibilities */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-['Syne'] font-bold text-[#070B55] mb-6">
              Key Responsibilities
            </h2>
            <ul className="space-y-3.5">
              {job.responsibilities?.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-gray-600 text-sm sm:text-base"
                >
                  <span className="text-[#00CED1] font-bold mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements & Qualifications */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-['Syne'] font-bold text-[#070B55] mb-6">
              Requirements & Qualifications
            </h2>
            <ul className="space-y-3.5">
              {job.requirements?.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-gray-600 text-sm sm:text-base"
                >
                  <span className="text-[#00CED1] font-bold mt-1">★</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Perks & Benefits */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-['Syne'] font-bold text-[#070B55] mb-6">
              Perks & Benefits
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {job.benefits?.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#E9F4FE]/60 border border-blue-100 text-[#070B55] text-sm font-medium flex items-center gap-3"
                >
                  <span className="text-lg">🎁</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* How to Apply Section embedded directly in Job Details */}
          <div
            id="how-to-apply"
            className="bg-[#070B55] rounded-3xl p-8 sm:p-10 text-white shadow-xl border border-[#070B55]"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <span className="inline-block bg-[#00CED1] text-[#070B55] text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full mb-3">
                  Direct Application
                </span>
                <h2 className="text-2xl sm:text-3xl font-['Syne'] font-bold text-white mb-2">
                  How to Apply
                </h2>
                <p className="text-gray-300 text-sm sm:text-base max-w-xl leading-relaxed">
                  Interested in applying for <strong>{job.title}</strong>? Please send your resume/CV and portfolio directly to our talent team via email:
                </p>
              </div>

              <div className="flex flex-col sm:items-end gap-3 w-full sm:w-auto">
                <div className="flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2.5 rounded-2xl">
                  <span className="text-base sm:text-lg font-mono font-bold text-[#00CED1] select-all">
                    {emailAddress}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="ml-2 px-3 py-1 rounded-lg bg-white text-[#070B55] text-xs font-semibold hover:bg-[#00CED1] transition-colors"
                  >
                    {copied ? '✓ Copied' : 'Copy'}
                  </button>
                </div>

                <a
                  href={`mailto:${emailAddress}?subject=${encodeURIComponent(`Application for ${job.title}`)}`}
                  className="inline-flex items-center justify-center gap-2 bg-[#00CED1] hover:bg-[#00B2B5] text-[#070B55] font-bold px-6 py-3 rounded-2xl shadow-md transition-all duration-300 text-sm w-full sm:w-auto text-center"
                >
                  <span>✉️ Send Email Application</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
