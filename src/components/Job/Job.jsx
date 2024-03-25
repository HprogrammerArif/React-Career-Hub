import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";

const Job = ({ job }) => {
  const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img
          src={logo}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>

        <div>
          <button className="px-4 py-2 font-extrabold border border-[#7E90FE] rounded-lg mr-4">{remote_or_onsite}</button>
          <button className="px-4 py-2 font-extrabold border border-[#7E90FE] rounded-lg mr-4">{job_type}</button>
        </div>

        <div className="mt-4 flex">
          <h2 className="flex mr-4"><IoLocationOutline className="text-2xl mr-2" /> {location}</h2>
          <h2 className="flex gap-1"><AiOutlineDollar className="text-2xl mr-2" /> {salary}</h2>
        </div>

        <div className="card-actions">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Job;
