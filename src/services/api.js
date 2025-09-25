// aspect ratio of 0.667
import axios from "axios";
const apiKey = import.meta.env.VITE_API_READ_ACCESS_TOKEN;

export const fetchTrendingMediaData = async (timeDuration) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/trending/all/${timeDuration}?region=IN`,
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    },
  );

  return data?.results;
};

export const fetchWhatsPopularData = async (medium, filters) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/discover/${medium}?${filters.join("&")}`,
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    },
  );

  return data?.results;
};

export const fetchTopRatedData = async (medium) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/${medium}/top_rated`,
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    },
  );

  return data?.results;
};

export const fetchPopularData = async (param, page = 1) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/${param}/popular?page=${page}`,
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    },
  );

  return data?.results;
};

export const fetchMovieOrTVData = async (medium, param, page = 1) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/${medium}/${param}?page=${page}`,
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    },
  );

  return data?.results;
};

export const fetchPersonDetails = async (id) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/person/${id}`,
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    },
  );

  return data;
};

export const fetchPersonProfiles = async (id) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/person/${id}/external_ids`,
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    },
  );

  return data;
};

export const fetchCombinedCredits = async (id) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/person/${id}/combined_credits`,
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    },
  );

  return data;
};
