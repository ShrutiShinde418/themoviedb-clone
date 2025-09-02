import { useEffect } from "react";
import { useQueries } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { BsFacebook } from "react-icons/bs";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { fetchPersonDetails, fetchPersonProfiles } from "../services/api";

const PersonPage = () => {
  const { id } = useParams();

  const results = useQueries({
    queries: [
      {
        queryKey: ["personDetails", id],
        queryFn: () => fetchPersonDetails(id),
        enabled: !!id,
      },
      {
        queryKey: ["personProfiles", id],
        queryFn: () => fetchPersonProfiles(id),
        enabled: !!id,
      },
    ],
  });

  const [detailsQuery, profilesQuery] = results;

  useEffect(() => {
    if (detailsQuery.error || profilesQuery.error) {
      toast.error(
        `${detailsQuery?.error?.message || profilesQuery?.error?.message}`
      );
    }

    return () => toast.dismiss();
  }, [detailsQuery.error, profilesQuery.error]);

  return (
    <div className="m-8">
      <ToastContainer />
      <div className="grid grid-cols-4 gap-8">
        <div className="flex flex-col">
          <img
            src={`http://image.tmdb.org/t/p/w200/${detailsQuery?.data?.profile_path}`}
            alt={detailsQuery?.data?.name}
            className="rounded-lg"
          />
          <div className="flex gap-4 mt-7">
            {profilesQuery?.data?.facebook_id && (
              <a
                href={`https://facebook.com/${profilesQuery?.data?.facebook_id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsFacebook className="size-7" />
              </a>
            )}
            {profilesQuery?.data?.twitter_id && (
              <a
                href={`https://x.com/${profilesQuery?.data?.twitter_id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="size-7" />
              </a>
            )}
            {profilesQuery?.data?.instagram_id && (
              <a
                href={`https://instagram.com/${profilesQuery?.data?.instagram_id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="size-7" />
              </a>
            )}
          </div>
          <h3 className="mt-7 text-xl font-semibold">Personal Info</h3>
          <div className="mt-2 flex flex-col gap-1 mb-3">
            <h4 className="font-semibold">Known For</h4>
            <p>{detailsQuery?.data?.known_for_department}</p>
          </div>
          <div className="flex flex-col gap-1 mb-3">
            <h4 className="font-semibold">Known Credits</h4>
            <p></p>
          </div>
          <div className="flex flex-col gap-1 mb-3">
            <h4 className="font-semibold">Gender</h4>
            <p></p>
          </div>
          <div className="flex flex-col gap-1 mb-3">
            <h4 className="font-semibold">Birthday</h4>
            <p>{detailsQuery?.data?.birthday}</p>
          </div>
          <div className="flex flex-col gap-1 mb-3">
            <h4 className="font-semibold">Place of Birth</h4>
            <p>{detailsQuery?.data?.place_of_birth}</p>
          </div>
          <div className="flex flex-col gap-1 mb-3">
            <h4 className="font-semibold">Also Known As</h4>
            {detailsQuery?.data?.also_known_as.map((item) => (
              <p>{item}</p>
            ))}
          </div>
        </div>
        <div className="col-span-3">
          <h5 className="text-4xl font-bold mb-6">
            {detailsQuery?.data?.name}
          </h5>
          <div className="flex flex-col">
            <h6 className="font-semibold text-2xl mb-3">Biography</h6>
            <p>{detailsQuery?.data?.biography}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonPage;
