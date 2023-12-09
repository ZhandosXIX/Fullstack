import axios from "axios";

export const getPosts = async () => {
    const response = await axios.get('http://localhost:8080/api/v1/showAllPosts');
    return response.data;
}

