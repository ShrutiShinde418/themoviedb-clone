// aspect ratio of 0.667
import axios from "axios";
const apiKey = import.meta.env.VITE_API_READ_ACCESS_TOKEN;

export const fetchTrendingMediaData = async (timeDuration) => {
  try {
    const { data } = await axios.get(
      `http://api.themoviedb.org/3/trending/all/${timeDuration}?language=en-US`,
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
