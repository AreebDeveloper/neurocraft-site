import React from "react"
import buss from '../bussiness.png'
import ecom from '../ecom.png'
import port from '../port.png'

const projects = [
  {
    title: "Lunaris Consulting",
    type: "Business Website",
    tech: "React + Tailwind",
    summary: "Elegant and high-conversion business website for a global consulting firm.",
    image: buss,
    link: "https://v0-professional-react-website-eight.vercel.app/"
  },
  {
    title: "NovaCommerce",
    type: "E-commerce Store",
    tech: "Next.js + Stripe",
    summary: "A minimal, fast-loading store with sleek UI and Stripe payments integration.",
    image: ecom,
    link: "https://nova.store"
  },
  {
    title: "Vanta Portfolio",
    type: "Creative Portfolio",
    tech: "React + Framer Motion",
    summary: "A smooth animated portfolio for a digital creator with dark glassy design.",
    image: port,
    link: "https://vanta.design"
  }
]

export default function ProjectsSection() {
  return (
        
    <section 
    id="project"
    className="py-16 px-4 sm:px-8 bg-gradient-to-b from-[#1f1f47] via-[#2a225f] to-[#1a1a2e]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Projects</h2>
        <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mb-12">
          We build sleek and scalable digital experiences—from business websites to advanced e-commerce solutions.
        </p>

        <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-2xl p-4 shadow-lg backdrop-blur-md transition hover:shadow-purple-600/30"
            >
              <div className="rounded-xl overflow-hidden mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-44 object-cover rounded-xl hover:scale-[1.02] transition"
                />
              </div>
              <div className="text-left space-y-1">
                <h3 className="text-white text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-indigo-300">{project.type} • {project.tech}</p>
                <p className="text-sm text-gray-400">{project.summary}</p>
              </div>
              <a
                href={project.link}
                target="_blank"
                className="block mt-4 text-sm text-purple-400 hover:underline"
              >
                Visit Live →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
