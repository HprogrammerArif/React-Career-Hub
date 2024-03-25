import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/Localstorage";

const JobDetails = () => {

  const jobs = useLoaderData();
  const {id} = useParams();
  const intId = parseInt(id);

   const job = jobs.find(job => job.id === intId);
   const {job_description, job_title, salary, job_responsibility, educational_requirements, experiences, contact_information, address} = job;
  
  console.log(job);

  const handleApplyJob = () => {
    saveJobApplication(intId);
    toast('You Have Applied Successfully')
  }

  return (
    <div>
      <h2>Job Details Of: {id} </h2>
      <div className="grid md:grid-cols-4 gap-4">
        <div className="md:col-span-3 border p-7 bg-slate-50">
          <p className="mb-6"><b>Job Description:</b> {job_description}</p>
          <p className="mb-6"><b>Job Responsibility:</b> {job_responsibility}</p>
          <h2 className="mb-6"><b>Educational_Requirements:</b> <br /> {educational_requirements}</h2>
          <h2><b>Experiences:</b> <br /> {experiences}</h2>
        </div>
          <div className="border bg-[#7e8ffe72] p-5">
            <h2 className="text-2xl font-bold mb-4">Job Details</h2>
            <h2 className="mb-3">salary: {salary}</h2>
            <h2 className="mb-6">job_title: {job_title}</h2>
            <hr />
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <h4 className="mb-3">Phone: {contact_information.phone}</h4>
            <h4 className="mb-6">address: {contact_information.address}</h4>
            <hr />
            <button onClick={handleApplyJob} className="btn btn-primary">Apply Now</button>
          </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;