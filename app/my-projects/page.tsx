"use client"

import ProjectCard from '@/components/ProjectCard'
import { Projects } from '@/constants/Index'
import React from 'react'

const Page = () => {
  return (
    <div
    style={{backgroundImage: "url(/mountains.jpg)"}}
     className='w-screen h-screen flex flex-wrap items-center justify-center bg-center bg-cover'>
      <div className='pt-[80px] justify-center items-center grid grid-cols-2 gap-5 max-w-[90%] max-h-[90%]'>
        {Projects.map((project, index) => (
          <ProjectCard
              key={index}
              title={project.title}
              text={project.text}
              image={project.src}
          />
        ))}
      </div>
    </div>
  )
}

export default Page