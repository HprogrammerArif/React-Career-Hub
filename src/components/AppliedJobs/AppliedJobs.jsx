import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/Localstorage";

const AppliedJobs = () => {

  const jobs = useLoaderData();
 
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect( () => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      //const jobsApplied = jobs.filter( job => storedJobIds.includes(job.id))

      const jobApplied = [];
      for(const id of storedJobIds){
        const job = jobs.find (job => job.id === id);
        if(job){
          jobApplied.push(job);
        }
      }
      setAppliedJobs(jobApplied);
      //console.log(jobs, storedJobIds, jobApplied);

    }
  } , [])

  return (
    <div>
      <h2 className="text-2xl">Jobs I Applied: {appliedJobs.length}</h2>

      <ul>
        {
          appliedJobs.map(job => <li key={job.id}>
            <span>{job.job_title} {job.company_name}</span>
          </li>)
        }
      </ul>
    </div>
  );
};

export default AppliedJobs;