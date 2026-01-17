import React from "react";

const SkillsSection = () => {
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">Skills</h2>
        </div>
        <div className="mt-4 md:mt-0 text-left">
          <h3 className="text-2xl font-bold text-white mb-4">Programming Languages</h3>
          <div className="flex flex-row justify-start flex-wrap">
            <span className="bg-[#181818] rounded-full px-4 py-2 mr-2 mt-2">Python</span>
            <span className="bg-[#181818] rounded-full px-4 py-2 mr-2 mt-2">Rust</span>
            <span className="bg-[#181818] rounded-full px-4 py-2 mr-2 mt-2">Go</span>
            <span className="bg-[#181818] rounded-full px-4 py-2 mr-2 mt-2">Bash</span>
            <span className="bg-[#181818] rounded-full px-4 py-2 mr-2 mt-2">SQL</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4 mt-4">Tools & Technologies</h3>
          <div className="flex flex-row justify-start flex-wrap">
            <span className="bg-[#181818] rounded-full px-4 py-2 mr-2 mt-2">Git</span>
            <span className="bg-[#181818] rounded-full px-4 py-2 mr-2 mt-2">CI/CD</span>
            <span className="bg-[#181818] rounded-full px-4 py-2 mr-2 mt-2">MongoDB</span>
            <span className="bg-[#181818] rounded-full px-4 py-2 mr-2 mt-2">Tensorflow</span>
            <span className="bg-[#181818] rounded-full px-4 py-2 mr-2 mt-2">JAX</span>
            <span className="bg-[#181818] rounded-full px-4 py-2 mr-2 mt-2">Scikit-learn</span>
            <span className="bg-[#181818] rounded-full px-4 py-2 mr-2 mt-2">MLFLOW</span>
            <span className="bg-[#181818] rounded-full px-4 py-2 mr-2 mt-2">Weight and Biases</span>
            <span className="bg-[#181818] rounded-full px-4 py-2 mr-2 mt-2">Hopsworks</span>
            <span className="bg-[#181818] rounded-full px-4 py-2 mr-2 mt-2">Airflow</span>
            <span className="bg-[#181818] rounded-full px-4 py-2 mr-2 mt-2">Dagster</span>
            <span className="bg-[#181818] rounded-full px-4 py-2 mr-2 mt-2">Kedro</span>
            <span className="bg-[#181818] rounded-full px-4 py-2 mr-2 mt-2">Spark</span>
            <span className="bg-[#181818] rounded-full px-4 py-2 mr-2 mt-2">Langchain</span>
            <span className="bg-[#181818] rounded-full px-4 py-2 mr-2 mt-2">Docker</span>
            <span className="bg-[#181818] rounded-full px-4 py-2 mr-2 mt-2">Kubernetes</span>
            <span className="bg-[#181818] rounded-full px-4 py-2 mr-2 mt-2">Terraform</span>
            <span className="bg-[#181818] rounded-full px-4 py-2 mr-2 mt-2">Cloudformation</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4 mt-4">Cloud Platforms</h3>
          <div className="flex flex-row justify-start flex-wrap">
            <span className="bg-[#181818] rounded-full px-4 py-2 mr-2 mt-2">AWS</span>
            <span className="bg-[#181818] rounded-full px-4 py-2 mr-2 mt-2">GCP</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4 mt-4">Languages</h3>
          <div className="flex flex-row justify-start flex-wrap">
            <span className="bg-[#181818] rounded-full px-4 py-2 mr-2 mt-2">English</span>
            <span className="bg-[#181818] rounded-full px-4 py-2 mr-2 mt-2">Portuguese</span>
          </div>
        </div>      </div>
    </section>
  );
};

export default SkillsSection;
