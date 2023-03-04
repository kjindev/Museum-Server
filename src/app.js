const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const port = 4000;

require("dotenv").config();
const { API_KEY } = process.env;

app.use(cors());

const API_URL = `http://openapi.seoul.go.kr:8088/${API_KEY}/json/ListExhibitionOfSeoulMOAInfo/1/50/`;

const getAPI = async (request) => {
  let response;
  try {
    response = await axios.get(API_URL);
  } catch (error) {
    console.log(error);
  }
  return response;
};

app.get("/", (req, res) => {
  getAPI(req).then((response) => {
    res.json(response.data);
  });
});

app.listen(port, () => console.log("running"));
