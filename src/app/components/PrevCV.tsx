"use client"
import React from 'react'
import { useCVInfo } from '../store/CVStore'

export const PrevCV = () =>
{
  const { fullname, email, address, phoneNumber } = useCVInfo(state => state.personalInfo)
  const educationInfo = useCVInfo(state => state.educationInfo)
  const experienceInfo = useCVInfo(state => state.experienceInfo)
  return (
    <div>
      <div className='bg-blue-900 h-40 text-center p-4'>
        <h1 className='capitalize text-xl m-2 font-bold'>{fullname}</h1>
        <div className='flex gap-5 justify-center p-2 text-xl'>
          <p>{email}</p>
          <p>{phoneNumber}</p>
        </div>
        <p className='p-2'>
          {address}
        </p>
      </div>
      <div>
        <div className='bg-zinc-300 m-4 text-center capitalize text-2xl p-2 text-primary font-semibold'>
          <h1>Education</h1>
        </div>
        <div>
          {educationInfo.map((education) => (
            <div className='text-black flex gap-5 justify-center md:text-xl px-6 my-4' key={education.id}>
              <div>
                <p>
                  {education.startDate} - {education.endDate}
                </p>
              </div>
              <div>
                <p className='font-bold'>
                  {education.school}
                </p>
                <p>
                  {education.degree}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className='bg-zinc-300 m-4 text-center capitalize text-2xl p-2 text-primary font-semibold'>
          <h1>Experiences</h1>
        </div>
        <div>
          {experienceInfo.map((experience) => (
            <div className='text-black flex gap-5 justify-center md:text-xl px-6 my-4' key={experience.id}>
              <div>
                <p>{experience.startDate} - {experience.endDate}</p>
              </div>
              <div>
                <p className='font-bold'>
                  {experience.company}
                </p>
                <p>
                  {experience.position}
                </p>
                {experience.description && <p>{experience.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
