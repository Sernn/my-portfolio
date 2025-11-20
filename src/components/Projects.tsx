'use client'
import Heading from './sub/Heading'
import Project from './sub/Project'

const Projects = () => {
  return (
    <div className="min-h-screen py-20 px-80">
      <Heading text="Projects" />
      <div>
        <button>All</button>
      </div>
      <div>
        <Project />
      </div>
    </div>
  )
}

export default Projects
