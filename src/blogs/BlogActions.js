import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getBlogDetails = createAsyncThunk("blog-details", async() => {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=fac1827912944b14b4e9c25bd57c4489`);
    return response.data;
});
