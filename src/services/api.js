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
    return error.message;
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
    return error.message;
  }
};

export const fetchTopRatedData = async (medium) => {
  console.log(medium);
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
    return error.message;
  }
};
