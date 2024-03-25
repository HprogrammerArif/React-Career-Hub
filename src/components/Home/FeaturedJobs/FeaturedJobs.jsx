import { useEffect, useState } from "react";
import Job from "../../Job/Job";


const FeaturedJobs = () => {

  const [jobs, setJobs] = useState([]);
  //this is not the best way to load show all data
  const [dataLength, SetDadaLength] = useState(4);

  useEffect( () => {
    fetch('jobs.json')
    .then(res => res.json())
    .then (data => setJobs(data))
  }, [])



  return (
    <div>
      <div className="text-center">
      <h2 className="text-5xl">Featured Jobs: {jobs.length}</h2>
      <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-2">
        {
          jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
        }
        <div className={`text-center ${dataLength === jobs.length && 'hidden'}`}>
          <button onClick={() => SetDadaLength(jobs.length)} className="btn btn-primary">Show All Jobs</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;