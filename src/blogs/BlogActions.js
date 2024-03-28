import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "fac1827912944b14b4e9c25bd57c4489";

export const getBlogDetails = createAsyncThunk("blog-details", async() => {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`);
    return response.data;
});
