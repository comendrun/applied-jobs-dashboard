import React from "react";
import threeDots from "../images/icon-ellipsis.svg";
import "./Card.css";

import { randomStyle } from "../styles";
import { Link } from "react-router-dom";

export default function CardList({ jobs }) {
  if (jobs.length === 0) {
    return (
      <div className="error">
        Unfortunately, theres no job application to show.
      </div>
    );
  }

  return (
    <>
      {jobs.map((job) => {
        return (
          <div key={job.id} className="card" style={randomStyle().card}>
            <div
              className="card-header flex px-4"
              style={randomStyle().cardHeader}
            >
              <div className="category-placeholder flex flex-row gap-2 items-center w-full">
                <h2 className="text-lg capitalize"> {job.title}</h2>
                <img
                  alt=""
                  src={threeDots}
                  className="more cursor-pointer opacity-100 hover:opacity-70 duration-150 ease-in"
                />
              </div>
            </div>
            <div className="body">
              <div className="job-info overflow-auto flex flex-col  text-sm font-light ">
                <div className="flex flex-col gap-3">
                  <ul className="flex flex-col gap-2">
                    <li className="job-details flex items-center justify-between pr-1">
                      <p className="text-sm">Date (Applied):</p>
                      <p className="text-base"> {job.date} </p>
                    </li>

                    <li className="job-details flex items-center justify-between pr-1">
                      <p className="text-sm">Company:</p>
                      <p className="text-base"> {job.company} </p>
                    </li>

                    <li className="job-details flex items-center justify-between pr-1">
                      <p className="text-sm">Location</p>
                      <p className="text-base"> {job.jobLoc} </p>
                    </li>

                    <li className="job-details flex items-center justify-between pr-1">
                      <p className="text-sm">Working Condition</p>
                      <p className="text-base"> {job.workCondition} </p>
                    </li>

                    <li className="job-details flex items-center justify-between pr-1">
                      <p className="text-sm">Status:</p>
                      <p className="text-base">{job.status} </p>
                    </li>
                  </ul>
                  <div>
                    <p className="text-sm opacity-80 mb-2">Job Description:</p>
                    <p className="leading-6 text-base">
                      {job.jobDescription.substring(0, 100)}
                      {job.jobDescription.length > 100 && "..."}
                    </p>
                    <Link
                      className="text-base font-bold text-blue-500 hover:text-white duration-200 ease-in flex justify-end pr-2"
                      to={`/Applied-Jobs-Dashboard/jobs/${job.id}`}
                    >
                      More Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}