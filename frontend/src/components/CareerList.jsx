import React from 'react'

const jobs = [
  {
    category: 'Devlopment',
    title: 'Microsoft & Full Stack Developer',
    description:
      'We are seeking a Microsoft & Full Stack Developer to join our creative team',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    category: 'BDE',
    title: ' Business Development Executive ',
    description:
      'We are seeking a Business Development Executive to join our creative team',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    category: 'Intern',
    title: 'React.js Frontend ',
    description:
      'Calling all React.js enthusiast',
    location: 'Remote',
    type: 'Full-time',
  },
]

export default function CareerList() {
  return (
    <section className="w-full bg-white py-20 lg:py-28 pl-14 sm:pl-[84px] md:pl-[92px] pr-4 sm:pr-8">
      {/* Centered Header Section */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-[#070B55] text-4xl sm:text-5xl md:text-6xl font-['Syne'] font-bold tracking-tight">
          Join our Team
        </h2>
        <p className="text-gray-400 text-xs sm:text-sm md:text-base font-medium mt-3">
          Ready to Make an impact? Join Us on Our Journey
        </p>
      </div>

      {/* Main Two-Column Content Grid */}
      <div className="w-full mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Job Openings List */}
        <div className="lg:col-span-6 space-y-8">
          {jobs.map((job, index) => (
            <div
              key={index}
              className={`pb-8 ${
                index !== jobs.length - 1 ? 'border-b border-gray-200' : 'border-b border-gray-200'
              }`}
            >
              {/* Category */}
              <div className="text-[#00CED1] text-xs sm:text-sm font-semibold tracking-wide">
                {job.category}
              </div>

              {/* Job Title */}
              <h3 className="text-[#070B55] text-2xl sm:text-3xl font-['Syne'] font-bold mt-1.5">
                {job.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-xs sm:text-sm mt-2 leading-relaxed max-w-md">
                {job.description}
              </p>

              {/* Metadata Info (Location & Job Type) */}
              <div className="flex items-center gap-6 mt-3 text-gray-400 text-xs sm:text-sm font-medium">
                <div className="flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>{job.location}</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{job.type}</span>
                </div>
              </div>

              {/* Apply CTA Button */}
              <div className="mt-5">
                <button className="inline-flex items-center gap-2 bg-[#00CED1] hover:bg-[#00B2B5] text-[#070B55] font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-full shadow-md transition-all duration-300">
                  <span>Apply</span>
                  <svg
                    className="w-4 h-4 stroke-[2.5]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Office Image Card */}
        <div className="lg:col-span-6 w-full h-full flex items-center justify-center lg:justify-end">
          <div className="w-full max-w-xl lg:max-w-none h-[420px] sm:h-[500px] lg:h-[580px] rounded-[36px] sm:rounded-[48px] overflow-hidden shadow-xl bg-gray-100">
            <img
              src="/images/sit.png"
              alt="Team working together"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
