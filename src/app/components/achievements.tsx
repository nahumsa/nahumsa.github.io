import React from "react";

const achievementsList = [
  {
    metric: "1st Place",
    title: "Hackovid19",
    description: "Computer vision for segmenting COVID19’s CT Scans",
    link: "https://devpost.com/software/coviseg-segmenta%C3%A7%C3%A3o-de-imagens-de-tc-para-casos-de-covid19"
  },
  {
    metric: "1st Place",
    title: "Hackathon IV Quantum Computing Workshop - UFSC",
    description: "",
    link: ""
  },
  {
    metric: "IBM",
    title: "Qiskit Advocate",
    description: "",
    link: "https://www.credly.com/badges/59917062-3aac-478b-a3c8-3aeecedb71d4"
  },
  {
    metric: "DataTalksClub",
    title: "MLOPS Zoomcamp",
    description: "",
    link: "https://certificate.datatalks.club/mlops-zoomcamp/2022/728ebcd35fe22a88b41f087d604bc43e64c7365d.pdf"
  },
  {
    metric: "DataTalksClub",
    title: "LLM Zoomcamp",
    description: "",
    link: "https://certificate.datatalks.club/llm-zoomcamp/2024/728ebcd35fe22a88b41f087d604bc43e64c7365d.pdf"
  },
  {
    metric: "Datacamp",
    title: "Data Science Professional",
    description: "",
    link: "https://www.datacamp.com/certificate/DS0011261076798"
  },
  {
    metric: "Astronomer",
    title: "Astronomer Certification DAG Authoring for Apache Airflow 3",
    description: "",
    link: "https://www.credly.com/badges/b49250bd-9cbf-4487-8771-6ccab1aacf15/linked_in_profile"
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-8 px-4 xl:px-16">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Achievements
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {achievementsList.map((achievement, index) => (
          <a href={achievement.link} key={index}>
            <div key={index} className="bg-[#181818] rounded-lg p-6 flex flex-col items-center justify-center">
              <h3 className="text-white text-3xl font-bold">{achievement.metric}</h3>
              <p className="text-[#ADB7BE] text-lg font-semibold">{achievement.title}</p>
              {achievement.description && (
                <p className="text-[#ADB7BE] text-sm text-center">{achievement.description}</p>
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;
