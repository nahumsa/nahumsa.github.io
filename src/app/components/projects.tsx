import React from "react";

const projectsList = [
  {
    title: "Brazilian Soccer Championship ETL",
    description: "This project performs ETL on data from the Brasileirão (Brazilian Soccer Championship) using Dagster, SQL, DBT, and Python. It includes data quality checks and transformations using SQL and DBT, with the data being distributed into data marts for various use cases.",
    image: "/images/elt.jpg",
    link: "https://github.com/nahumsa/scrape-brasileirao-dataset",
  },
  {
    title: "Chatbot for Magic: The Gathering Rules",
    description: "I developed a question-and-answer system based on Golang for Magic: The Gathering players, using GenAI and vector search to provide quick and accurate responses to complex inquiries related to the rules, enhancing the gaming experience for both beginners and experienced players.",
    image: "/images/mtg_chatbot.jpg",
    link: "https://github.com/nahumsa/magic-rules-qa",
  },
  {
    title: "Brewery Data Lake",
    description: "The purpose of this project is to design and implement an Extract, Load, Transform (ELT) pipeline that fetches data from the Open Brewery DB and utilizes a medallion architecture within a data lake. Using Airflow, Python and DuckDB.",
    image: "/images/brewery_elt.jpg",
    link: "https://github.com/nahumsa/brewery-data-lake",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsList.map((project, index) => (
          <div key={index} className="text-white rounded-lg p-4 bg-[#181818]">
            <div
              className="h-52 md:h-72 rounded-t-xl relative group"
              style={{ backgroundImage: `url(${project.image})`, backgroundSize: "cover" }}
            >
              <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
                <a
                  href={project.link}
                  className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      d="M.458 10C3.33 4.667 6.313 2 10 2s6.67 2.667 9.542 8c-2.87 5.333-5.854 8-9.542 8S3.33 15.333.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
              <h5 className="text-xl font-semibold mb-2">{project.title}</h5>
              <p className="text-[#ADB7BE]">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
