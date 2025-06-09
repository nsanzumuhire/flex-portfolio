import React from 'react';
import Link from 'next/link';

// Import resume data
import resumeData from '../../public/assets/resume.json';

const Resume = () => {
  const { 
    employment_history, 
    skills, 
    languages, 
    education 
  } = resumeData;

  return (
    <div>
      <div className="row">
        {/* Employment History Section */}
        <div className="col-md-8 col-sm-12 section__resume resume-list">
          <h2 id="resume_header" className="section__title">Resume_</h2>
          <h3 className="resume-list_title">Employment History</h3>

          {employment_history.map((job, index) => (
            <div key={index} className="resume-list__block">
              <p className="resume-list__block-title">
                {job.company} - {job.title}
              </p>
              <p className="resume-list__block-date">{job.date}</p>
              <p className="text-sm mb-3">{job.description}</p>
              
              {job.projects && job.projects.length > 0 && (
                <>
                  <p className="resume-list__block-date my-2">Notable Projects</p>
                  <div className="overflow-x-auto text-xs">
                    <table className="table-auto w-full border-collapse border border-gray-200">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-200 p-2 text-left">Project Name</th>
                          <th className="border border-gray-200 p-2 text-left">Role</th>
                          <th className="border border-gray-200 p-2 text-left">Access</th>
                        </tr>
                      </thead>
                      <tbody>
                        {job.projects.map((project, idx) => (
                          <tr key={idx} className="hover:bg-gray-50">
                            <td className="border border-gray-200 p-2 font-medium">{project.name}</td>
                            <td className="border border-gray-200 p-2">{project.role}</td>
                            <td className="border border-gray-200 p-2">
                              {project.access.includes('http') ? (
                                <Link
                                  className="underline text-blue-600"
                                  target="_blank"
                                  href={project.access}
                                  passHref
                                >
                                  {project.access.replace(/https?:\/\//, '')}
                                </Link>
                              ) : (
                                <span className="text-gray-500 text-xs">
                                  Not available
                                </span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="col-md-4 col-sm-12 flex flex-col space-y-4 section__resume mt-8">
          <h2 id="skills_header" className="section__title">Skills_</h2>
          
          {/* Technical Skills */}
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="resume-list__block text-sm">
              <p className="resume-list__block-title capitalize">{category}</p>
              <div className="grid grid-cols-2 gap-2">
                {items.map((skill, index) => (
                  <div
                    key={index}
                    className="flex border border-2 rounded border-black p-2 text-xs"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Languages */}
          <div className="resume-list__block text-sm">
            <p className="resume-list__block-title">Languages</p>
            <div className="grid grid-cols-2 gap-2">
              {languages.map((language, index) => (
                <div
                  key={index}
                  className="flex border border-2 rounded border-black p-2 text-xs"
                >
                  {language}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="row">
        <div className="col-md-8 section__resume resume-list">
          <h3 className="resume-list_title">Education</h3>
          {education.map((edu, index) => (
            <div key={index} className="resume-list__block">
              <p className="resume-list__block-title">{edu.institution}</p>
              <p className="resume-list__block-date">{edu.date}</p>
              <p className="text-sm">{edu.degree}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
