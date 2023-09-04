import axios from "axios";

export const apiClient = axios.create(
    {
        //baseURL: 'http://localhost:5001'
        baseURL: 'http://kabgig.us-east-2.elasticbeanstalk.com/'
    }
);