import axios from "axios";

const Request = async(data) => {
  const REQUEST_URL = 'http://127.0.0.1:8000/api';
  const TOKEN = `e713f833781b7737f55772f709e3d59f`;

  let headers = {
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin' : '*',
    'Authorization': 'Bearer ' + TOKEN,
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