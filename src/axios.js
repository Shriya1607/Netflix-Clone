import axios from "axios";

const object = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default object;

/* in this file we store the base url in object , baseURL is keyword in axios , 
axios is used for sending request to a website for accepting data, 
we install axios by npm i axios*/