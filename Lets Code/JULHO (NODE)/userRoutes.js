const express = require("express");
const axios = require("axios");

const BASE_URL = "https://swapi.dev/api";
const router = express.Router();

async function getData(url) {
  let response = await axios.get(url);
  return response.data;
}
async function getDataArray(urlArray, params) {
  returnedArray = [];
  for (let url of urlArray) {
    response = await getData(url);
    returnedArray.push(response[params]);
  }
  return returnedArray;
}

router.get("/people/:id", (req, res) => {
  let id = req.params.id;
  axios.get(BASE_URL + "/people/" + id).then((response) => {
    res.json(response.data);
  });
});

router.get("/films/:id", (req, res) => {
  let id = req.params.id;
  axios.get(BASE_URL + "/films/" + id).then((response) => {
    res.json(response.data);
  });
});

router.get("/", async (req, res) => {
  try {
    url = BASE_URL + "/starships/3";
    let starshipsData = await getData(url);
    let films = starshipsData.films;
    let movies = await getDataArray(films, "title");
    res.render("pages/index", { data: starshipsData, films: movies });
  } catch (err) {
    if (err.response) {
      console.log(err);
    }
  }
});

router.get("/error", (req, res) => {
  res.render("pages/error");

});

router.get("/starships/:id", (req, res) => {
  let id = req.params.id;
  axios.get(BASE_URL + "/starships/" + id).then((response) => {
    res.json(response.data);
  });
});

router.get("/species/:id", (req, res) => {
  let id = req.params.id;
  axios.get(BASE_URL + "/species/" + id).then((response) => {
    res.json(response.data);
  });
});

router.get("/planets/:id", (req, res) => {
  let id = req.params.id;
  axios.get(BASE_URL + "/planets/" + id).then((response) => {
    res.json(response.data);
  });
});

module.exports = router;
