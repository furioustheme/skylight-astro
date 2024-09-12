import config from '@/config/config.json'
import { slugSelector } from '@/lib/utils/languageParser'
import { slugify } from '@/lib/utils/textConverter'
import React from 'react'
import ArrowSVG from './svg/ArrowSVG'
import ClockSVG from './svg/ClockSVG'
const { default_language } = config.settings;

const CareerCard = ({ job, lang = default_language }: { job: any, lang: string }) => {
  return (
    <div className="px-5 md:px-10 py-10 rounded-lg bg-white h-full">
      <a href={slugSelector(`/careers/${slugify(job.slug)}`, lang)}>
        <h3 className="pb-4 hover:text-primary transition duration-300">
          {job.data.title}
        </h3>
      </a>
      <p className="pb-5">{job.data.location}</p>
      <p className="font-secondary text-lg pb-5 flex items-center gap-2">
        <span className="-mt-1"><ClockSVG /></span>  {job.data.duration} | Salary: {job.data.salary}
      </p>
      <div className="inline-block">
        <a
          className="btn btn-outline-primary"
          href={slugSelector(`/careers/${slugify(job.slug)}`, lang)}
        >
          Apply Now
          <ArrowSVG />
        </a>
      </div>
    </div>
  )
}

export default CareerCard
