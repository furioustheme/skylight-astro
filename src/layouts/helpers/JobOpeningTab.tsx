import config from "@/config/config.json";
import React, { useState } from "react";
import CareerCard from "./CareerCard";
import AllSVG from "./svg/AllSVG";
import DesignSVG from "./svg/DesignSVG";
import DevSVG from "./svg/DevSVG";
import SeoSVG from "./svg/SeoSVG";
const { default_language } = config.settings;

const JobTabs = ({
  departments,
  jobs,
  lang = default_language
}: {
  departments: string[];
  jobs: any;
  lang: string;
}) => {

  const departmentIcons: { [key: string]: React.FC } = {
    All: AllSVG,
    SEO: SeoSVG,
    Ui: DesignSVG,
    Development: DevSVG,
  };

  const [activeDepartment, setActiveDepartment] = useState("All");

  const handleTabClick = (department: string) => {
    setActiveDepartment(department);
  };

  const filteredJobs =
    activeDepartment === "All"
      ? jobs
      : jobs.filter((job: any) =>
        job.data.department.includes(activeDepartment),
      );

  return (
    <div className="tab" data-tab-group="tab-group-name">
      <ul
        className="tab-nav bg-white p-2 mb-14"
        data-tab-nav=""
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {["All", ...departments].map((label, index) => {
          const Icon = departmentIcons[label] || departmentIcons.All;
          return (
            <li
              key={index}
              className={`tab-nav-item tab-nav-border ${activeDepartment === label ? "active" : ""
                }`}
              onClick={() => handleTabClick(label)}
            >
              <Icon />
              <span>{label}</span>
            </li>
          );
        })}
      </ul>
      <div
        className="tab-content"
        data-aos="fade-up"
        data-aos-delay="150"
        data-tab-content
      >
        <div className="tab-content-panel active">
          <div className="row g-4">
            {filteredJobs.map((job: any, index: number) => {
              const slugParts = job.slug.split("/");
              slugParts[0] = "";
              const modifiedSlug = slugParts.join("/");
              job.slug = modifiedSlug;
              return (
                <div key={index} className="lg:col-6">
                  <CareerCard job={job} lang={lang} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobTabs;
