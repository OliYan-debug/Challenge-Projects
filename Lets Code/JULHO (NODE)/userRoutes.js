const express = require("express");
const axios = require("axios");

const BASE_URL = "https://swapi.dev/api";
const router = express.Router();

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
