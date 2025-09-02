// aspect ratio of 0.667
import axios from "axios";
const apiKey = import.meta.env.VITE_API_READ_ACCESS_TOKEN;

export const fetchTrendingMediaData = async (timeDuration) => {
  try {
    const { data } = await axios.get(
      `http://api.themoviedb.org/3/trending/all/${timeDuration}?region=IN`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    return data?.results;
  } catch (error) {
    throw error;
  }
};

export const fetchWhatsPopularData = async (medium, filters) => {
  try {
    const { data } = await axios.get(
      `http://api.themoviedb.org/3/discover/${medium}?${filters.join("&")}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    return data?.results;
  } catch (error) {
    throw error;
  }
};

export const fetchTopRatedData = async (medium) => {
  try {
    const { data } = await axios.get(
      `http://api.themoviedb.org/3/${medium}/top_rated`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    return data?.results;
  } catch (error) {
    throw error;
  }
};

export const fetchPopularData = async (param, page = 1) => {
  try {
    const { data } = await axios.get(
      `http://api.themoviedb.org/3/${param}/popular?page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    return data?.results;
  } catch (error) {
    throw error;
  }
};

export const fetchPersonDetails = async (id) => {
  try {
    const { data } = await axios.get(
      `http://api.themoviedb.org/3/person/${id}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchPersonProfiles = async (id) => {
  try {
    const { data } = await axios.get(
      `http://api.themoviedb.org/3/person/${id}/external_ids`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    return data;
  } catch (error) {
    throw error;
  }
};
