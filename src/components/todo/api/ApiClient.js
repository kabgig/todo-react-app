import axios from "axios";

export const apiClient = axios.create(
    {
        //baseURL: 'http://localhost:5000'
        baseURL: 'http://kabgig3.us-east-2.elasticbeanstalk.com/'
    }
);