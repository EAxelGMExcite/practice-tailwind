import axios from "axios";

//axiosCookieJarSupport(axios);

const createAxiosConnection = axios.create({
  baseURL: "https://mtch.vibetv.mx/wp-json/wp/v2/", //url base de tu api.
  withCredentials: true, // <=== add here
  //timeout: 60000,
  //withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Set-Cookie": "__cf_chl_f_tk=LgAIC.y9Bi91HFOes_hYEj7Mh_LwProbTe1GfcTokTk-1679528844-0-gaNycGzNCqU",
  },
});

export const getPosts = async ({ params = {}, headers = {}, endpoint = "/posts" }) => {
  console.log("hace llamada");

  const { data } = await createAxiosConnection.get(`https://mtch.vibetv.mx/wp-json/wp/v2${endpoint}`);

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
