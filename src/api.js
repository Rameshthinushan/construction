import axios from "axios";

const Request = async(data) => {
  const REQUEST_URL = 'http://127.0.0.1:8000/api';
  let headers = {
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin' : '*',
    ...data.headers
  }

  const method = data.method || (data.body ? 'POST' : 'GET');
  const axiosConfig = {
    url: REQUEST_URL + data.url,
    method,
    headers
  };
  if (data.body) {
    axiosConfig.data = data.body;
  }

  try {
    const response = await axios(axiosConfig);
    return response.data;
  } catch (e) {
    return Promise.reject(e); 
  }
}

export default Request