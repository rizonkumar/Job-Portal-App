import { getJobs } from "@/api/jobs";
import { useSession } from "@clerk/clerk-react";
import { useEffect } from "react";

const JobListing = () => {
  const { session } = useSession();

  const fetchJobs = async () => {
    const supabaseAccessToken = await session.getToken({
      template: "supabase",
    });
    const data = await getJobs(supabaseAccessToken);
    console.log("Data", data);
  };

  useEffect(() => {
    fetchJobs();
  });
  return <div></div>;
};

export default JobListing;
