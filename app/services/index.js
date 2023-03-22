import axios from "axios";

const createAxiosConnection = axios.create({
  baseURL: "https://mtch.vibetv.mx/wp-json/wp/v2/", //url base de tu api.
  //withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    /* "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
    "cache-control": "no-cache", */
    //Authorization: "Basic S2VyWmFja0Rya0A6c25vZikzcTNATFFoY2ZkMCkoRVMkQlZt",
  },
});

export const getPosts = async ({ params = {}, headers = {}, endpoint = "/posts" }) => {
  console.log("hace llamada");

  const { data } = await createAxiosConnection.get(`${endpoint}`, {
    params,
    headers,
  });

  console.log("termina llamada");
  console.log({ data });
  /* try {
    console.log("hace llamada");
  
    const { data } = await createAxiosConnection.get(`${endpoint}`, {
      params,
      headers,
    });
  
    console.log("termina llamada");
    console.log({ data });
  } catch (error) {
    console.log("error");
    console.log(error);
  } */

  return "data";
};

export default createAxiosConnection;
