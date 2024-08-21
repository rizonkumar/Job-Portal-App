import { getJobs } from "@/api/jobs";
import useFetch from "@/hooks/useFetch";
import { useEffect } from "react";

const JobListing = () => {
  const {
    fn: fnJobs,
    data: dataJobs,
    loading: loadingJobs,
  } = useFetch(getJobs, {});

  useEffect(() => {
    fnJobs();
  }, []);
  return <div></div>;
};

export default JobListing;
