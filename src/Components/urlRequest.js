import axios from "axios";

export const getData = url => {
  return axios.get(url).then(({ data }) => {
    return data;
  });
};

export const patchData = url => {
  return axios.patch(url).then(({ data }) => {
    return data;
  });
};

export const postData = (url, newstudent) => {
  return axios.post(url, newstudent).then(({ data }) => {
    return data;
  });
};
