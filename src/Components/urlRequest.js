import axios from "axios";

const baseURL = "https://nc-student-tracker.herokuapp.com/api/";

export const getData = url => {
  return axios.get(`${baseURL}${url}`).then(({ data }) => {
    return data;
  });
};

export const patchData = url => {
  return axios.patch(`${baseURL}${url}`).then(({ data }) => {
    return data;
  });
};

export const postData = (url, newstudent) => {
  return axios.post(`${baseURL}${url}`, newstudent).then(({ data }) => {
    return data;
  });
};
