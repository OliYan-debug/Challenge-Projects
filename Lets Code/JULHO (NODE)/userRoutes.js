const express = require("express");
const axios = require("axios");

const BASE_URL = "https://swapi.dev/api";
const router = express.Router();

async function getData(url){
  let response = await axios.get(url);
  return response.data
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


router.get("/", async (req,res) => {
  let startshipsData = await getData(BASE_URL+"/starships/3")
  let startshipsMovies = startshipsData.films
  // let startshipName = startshipsData.name
  let movies = []
  async function getFilmsNames(item){
    let info = await getData(item)
    movies.push(info.title)
    if(movies.length == startshipsMovies.length){
      res.render("pages/index", {data:startshipsData, films:movies})

    }
  }
  startshipsMovies.forEach(getFilmsNames)

})


router.get("/about", (req,res) => {
  res.render("pages/about")
})

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
