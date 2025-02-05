import React from 'react';
import Link from 'next/link';

const Resume = () => {
  const backendSkills = [
    "ExpressJS",
    "NestJS",
    "Strapi",
    "SpringBoot",
    "Laravel",
    "REST API",
    "SOAP API",
    "GraphQL",
    "gRPC",
  ];

  const frontEndSkills = [
    "Angular",
    "React",
    "Next.js",
    "Redux/vuex",
    "Vue.js",
    'Nuxt.js',
    "Flutter",
    "React-Native",
    "Bootstrap",
    "Tailwind",
    "Bulma",
    "Webpack",
    "esBuild",
    "Vite",
    "Grunt/Gulp",
    "HTML",
    "CSS3",
    "SCSS",
  ];

  const databaseSkills = [
    "MariaDB",
    "PostgreSQL",
    "MongoDB",
    "Miracle",
    "Redis",
    "GraphDB",
    "Neo4J"
  ];

  const toolingSkills = [
    "Nginx",
    "GigaSpace",
    "Elasticsearch",
    "RabbitMQ",
    "Prometheus",
    "Apache",
    "Docker",
    "AWS",
    "Git",
    "CI/CD",
    "Jira",
    "Terraform"
  ];

  return (
    <div>
      <div className="row">
        <div className="col-md-8 col-sm-12 section__resume resume-list">
          <h2 id="resume_header" className="section__title">Resume_</h2>
          <h3 className="resume-list_title">employment</h3>

          {/* Self employed block */}
          <div className="resume-list__block">
            <p className="resume-list__block-title">
              Self employed - Software Engineer &amp; Team lead
            </p>
            <p className="resume-list__block-date">04/2021 - Present</p>
            <p className="text-sm">
              As a seasoned software engineer and Lead, I am committed to spearheading the development of four critical applications: The 2022 Commonwealth Heads of Government Meeting (CHOGM 2022) app, the REPZ properties system for Zimbabwe, the Social Registry system for identifying eligible social protection households, and IRPV - The Institute of Real Property Valuers in Rwanda. Leveraging my extensive experience and leadership abilities, I guided the team in delivering innovative, efficient, and reliable solutions for each application, ensuring they successfully fulfill their respective purposes and contribute to their industries' growth and advancement.
            </p>
            <p className="resume-list__block-date my-2">Projects</p>
            <div className="overflow-x-auto text-xs">
              <table className="table-auto w-full border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-2">Project name</th>
                    <th className="p-2">role</th>
                    <th className="p-2">Access</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2">MINALOC social registry 2.0 (SR-IS)</td>
                    <td className="p-2">Frontend lead</td>
                    <td className="p-2">private access</td>
                  </tr>
                  <tr>
                    <td className="p-2">
                      CHOGM22 Event Managment system web,iOS and Android Apps
                    </td>
                    <td className="p-2">Backend Lead and Frontend support</td>
                    <td className="p-2">private access</td>
                  </tr>
                  <tr>
                    <td className="p-2">IRPV (Igenacaciro - Web system)</td>
                    <td className="p-2">Frontend lead</td>
                    <td className="p-2">
                      <Link className="underline" target="_blank" href="https://igenagaciro.irpv.rw/" passHref>
                          igenagaciro.irpv.rw
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2">IRPV (Igenacaciro - Android App)</td>
                    <td className="p-2">Frontend lead</td>
                    <td className="p-2">
                      <Link className="underline" target="_blank"  href="https://play.google.com/store/apps/details?id=rw.irpv.ui&hl=en_US&pli=1" passHref>
                          Download
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2">REPZ V2 (Real estate portal of zimbabwe)</td>
                    <td className="p-2">frontend lead</td>
                    <td className="p-2">private access</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* QT Software LTD block */}
          <div className="resume-list__block">
            <p className="resume-list__block-title">
              QT Software LTD - Senior Software Engineer
            </p>
            <p className="resume-list__block-date">04/2021 - 10/2023</p>
            <p className="text-sm">
              Worked as a lead software engineer to launch the GESB system and currently working with the main focus of maintaining GESB and supporting the RISA team.
            </p>
            <p className="resume-list__block-date my-2">Projects</p>
            <div className="overflow-x-auto text-xs">
              <table className="table-auto w-full border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-2">Project name</th>
                    <th className="p-2">role</th>
                    <th className="p-2">Access</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2">GESB (Government service bus of RWANDA)</td>
                    <td className="p-2">Senior Backend Engineer</td>
                    <td className="p-2">private access</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Codeland S.r.i block */}
          <div className="resume-list__block">
            <p className="resume-list__block-title">
              Codeland S.r.i - Frontend developer
            </p>
            <p className="resume-list__block-date">09/2021 - 03/2023</p>
            <p className="text-sm">
              CodeLand is a System Integrator focused on the design and development of web solutions and has delivered successful results in lots of Adobe CQ/AEM projects, ranging from banking to sales industries. Our team includes professionals who have years of experience in Adobe technologies, providing a flexible support designed to meet our client needs. Worked as a frontend software engineer with the main focus of supporting production web apps such PRADA.COM a known brand for men and women luxury clothing, shoes and accessories, Martinelli ginetto an Italian fabrics products website and Domus a historical magazine of architecture website.
            </p>
            <p className="resume-list__block-date my-2">Projects</p>
            <div className="overflow-x-auto text-xs">
              <table className="table-auto w-full border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-2">Project name</th>
                    <th className="p-2">role</th>
                    <th className="p-2">Access</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2">PRADA</td>
                    <td className="p-2">Frontend engineer</td>
                    <td className="p-2">
                      <Link className="underline" target="_blank" href="https://www.prada.com" passHref>
                          www.prada.com
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2">Martinelli ginetto</td>
                    <td className="p-2">Frontend engineer</td>
                    <td className="p-2">
                      <Link className="underline" target="_blank" href="https://www.martinelliginettogroup.it/en/home.html" passHref>
                          www.martinelliginettogroup.it
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2">Domus Web</td>
                    <td className="p-2">Frontend engineer</td>
                    <td className="p-2">N/A</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* IREMBO LTD block */}
          <div className="resume-list__block">
            <p className="resume-list__block-title">IREMBO LTD - Software Engineer</p>
            <p className="resume-list__block-date">09/2018 - 04/2021</p>
            <p className="text-sm">
              Irembo is a technology company that helps organisation deliver online services and create world-class customer experiences. The company has a profound understanding of local needs and capabilities of the community to access services. Worked as a founding software engineer at irembo playing a big role in migrating e-Government services from 1.0 to 2.0 with the objective of helping citizens to access public services seamlessly, Architected and built fundamental components of irembo 2.0 frontend to ensure high scalability and performance.
            </p>
            <p className="resume-list__block-date my-2">Projects</p>
            <div className="overflow-x-auto text-xs">
              <table className="table-auto w-full border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-2">Project name</th>
                    <th className="p-2">role</th>
                    <th className="p-2">Access</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2">IremboGov</td>
                    <td className="p-2">Frontend engineer</td>
                    <td className="p-2">
                      <Link className="underline" target="_blank" href="https://irembo.gov.rw/" passHref>
                          www.irembo.gov.rw
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2">Irembo support system</td>
                    <td className="p-2">Frontend engineer</td>
                    <td className="p-2">
                      <Link className="underline" target="_blank" href="https://support.irembo.gov.rw/" passHref>
                          support.irembo.gov.rw

                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* AEGIS CONSULT LTD block */}
          <div className="resume-list__block">
            <p className="resume-list__block-title">
              AEGIS CONSULT LTD - Software Engineer (Consultancy)
            </p>
            <p className="resume-list__block-date">11/2019 - 02/2021</p>
            <p className="text-sm">
              I have worked on more than four projects including a system that connects users and property owners focusing on better user experience to make it easy and seamless for users to discover and filter properties based on location and their needs. This project made it easy for property agencies to have clear visibility of property requests and listings. Skills Communication Skills Analytical Skills Critical Thinking Skills, languages JavaScript TypeScript NodeJS Java PHP Dart With the usage of map features such as geo-tagging and GIS technologies, this project helped stakeholders in data mining for future uses and outcome predictions such as increasing revenues, cutting costs, improving customer relationships, reducing risks, and more.
            </p>
            <p className="resume-list__block-date my-2">Projects</p>
            <div className="overflow-x-auto text-xs">
              <table className="table-auto w-full border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-2">Project name</th>
                    <th className="p-2">role</th>
                    <th className="p-2">Access</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2">REPZ V1 (Real estate portal of zimbabwe)</td>
                    <td className="p-2">Frontend engineer</td>
                    <td className="p-2">N/A</td>
                  </tr>
                  <tr>
                    <td className="p-2">RWANDAPEDIA</td>
                    <td className="p-2">Frontend engineer</td>
                    <td className="p-2">
                      <Link className="underline" target="_blank" href="https://rwandapedia.rw/" passHref>
                          rwandapedia.rw
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* TRANSAX LTD block */}
          <div className="resume-list__block">
            <p className="resume-list__block-title">
              TRANSAX LTD - Backend Engineer (Consultancy)
            </p>
            <p className="resume-list__block-date">07/2018 - 08/2019</p>
            <p className="text-sm">
              Worked as the main backend developer of an e-wallet application (IKOFI) with payment integrations such as PayPal, stripe, and momo. Developed the backend and dashboard portal of women leaders in global health conference 2019’s apps with four thousand concurrent users support in a short period.
            </p>
            <p className="resume-list__block-date my-2">Projects</p>
            <div className="overflow-x-auto text-xs">
              <table className="table-auto w-full border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-2">Project name</th>
                    <th className="p-2">role</th>
                    <th className="p-2">Access</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2">IKOFI</td>
                    <td className="p-2">Backend engineer</td>
                    <td className="p-2">N/A</td>
                  </tr>
                  <tr>
                    <td className="p-2">WLGH 2019</td>
                    <td className="p-2">Backend engineer</td>
                    <td className="p-2">
                      <Link className="underline" target="_blank" href="https://ughe.org/" passHref>
                          WLGH 2019
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* OnTime Services LTD block */}
          <div className="resume-list__block">
            <p className="resume-list__block-title">
              OnTime Services LTD - Software Engineer
            </p>
            <p className="resume-list__block-date">09/2017 - 09/2018</p>
            <p className="text-sm">
              I was one of the leads to implement cross-platform applications such as rides sharing apps (OnTime) and Banking app(yQueue) that were focused on removing queues on banks. I was in charge of architecting, prototyping, and designing patterns of the backend system. I also integrated 3rd party payment APIs such as Stripe and PayPal in both backend, iOS, and Android applications.
            </p>
            <p className="resume-list__block-date my-2">Projects</p>
            <div className="overflow-x-auto text-xs">
              <table className="table-auto w-full border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-2">Project name</th>
                    <th className="p-2">role</th>
                    <th className="p-2">Access</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2">OnTime (Backend and Android app)</td>
                    <td className="p-2">Fullstack developer</td>
                    <td className="p-2">N/A</td>
                  </tr>
                  <tr>
                    <td className="p-2">yQueue (Backend and Android app)</td>
                    <td className="p-2">Fullstack developer</td>
                    <td className="p-2">N/A</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ASI-D block */}
          <div className="resume-list__block">
            <p className="resume-list__block-title">ASI-D - Software Engineer</p>
            <p className="resume-list__block-date">11/2016 - 02/2017</p>
            <p className="text-sm">
              Developed security/visitors management system rich in features such as 1. synchronized/distributed databases (able to work offline and online seamlessly on master and slave DBS). 2. Generating visitor cards. Developed an attendance system with the following features (i). integrated external electronic devices to read different types of QR codes. 3. multiple formats data imports and exports (reports)
            </p>
            <p className="resume-list__block-date my-2">Projects</p>
            <div className="overflow-x-auto text-xs">
              <table className="table-auto w-full border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-2">Project name</th>
                    <th className="p-2">role</th>
                    <th className="p-2">Access</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2">Visitor/Attendance Managment system</td>
                    <td className="p-2">Fullstack developer</td>
                    <td className="p-2">N/A</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Skills Column */}
        <div className="col-md-4 col-sm-12 flex flex-col space-y-4 section__resume mt-8">
          <h2 id="resume_header" className="section__title">Skills_</h2>
          <div className="resume-list__block text-sm">
            <p className="resume-list__block-title">Frontend</p>
            <div className="grid grid-cols-3 gap-2">
              {frontEndSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex border border-2 rounded border-black p-2"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <div className="resume-list__block text-sm">
            <p className="resume-list__block-title">Backend</p>
            <div className="grid grid-cols-3 gap-2">
              {backendSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex border border-2 rounded border-black p-2"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <div className="resume-list__block text-sm">
            <p className="resume-list__block-title">Database</p>
            <div className="grid grid-cols-3 gap-2">
              {databaseSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex border border-2 rounded border-black p-2"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <div className="resume-list__block text-sm">
            <p className="resume-list__block-title">Tools and technologies</p>
            <div className="grid grid-cols-3 gap-2">
              {toolingSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex border border-2 rounded border-black p-2"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="row">
        <div className="col-md-8 section__resume resume-list">
          <h3 className="resume-list_title">education</h3>
          <div className="resume-list__block">
            <p className="resume-list__block-title">University of Rwanda (UR-CST)</p>
            <p className="resume-list__block-date">2014 - 2018</p>
            <p className="text-sm">
              Bachelor of Science in Computer Engineering (hons in Software Engineering).
            </p>
          </div>
          <div className="resume-list__block">
            <p className="resume-list__block-title">Ecole Technique de Save (ET Save)</p>
            <p className="resume-list__block-date">2010 - 2013</p>
            <p className="text-sm">
              A level in computer electronics and Finished as second in national exams in computer electronics option.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;