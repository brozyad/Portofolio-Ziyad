import React from 'react';

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of project one.',
  },
  {
    title: 'Project Two',
    description: 'A brief description of project two.',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-100 p-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
