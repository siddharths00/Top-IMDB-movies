const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const { type } = require("os");


// var elements = JSON.parse(data);
const express = require("express");
const app = express();
  
// To solve the cors issue
const cors=require('cors');
   
app.listen(5000, 
    () => console.log("Server Started at the Port 5000"));
   
app.use(express.static('public'));
app.use(cors());


app.get('/movie', alldata);
  
async function alldata(request, response) {
      
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    let listItems = $("#main > div > span > div > div > div.lister > table > tbody > tr > td.titleColumn");
    const movies = [];
    listItems.each((idx, el) => {
      const movie = { name: "", date: "" };
      movie.name = $(el).children("a").text();
      movie.date = $(el).children("span").text();

      movies.push(movie);

    });
    
    response.send(movies);
}


// URL of the page we want to scrape
const url1 = "https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3";
const url = "https://www.imdb.com/chart/top/";

// Async function which scrapes the data
async function scrapeData() {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const listItems = $("#main > div > span > div > div > div.lister > table > tbody > tr > td.titleColumn");
    const movies = [];
    listItems.each((idx, el) => {
      const movie = { name: "", date: "" };
      movie.name = $(el).children("a").text();
      movie.date = $(el).children("span").text();
      movies.push(movie);
    });
    
    console.log(movies);
    fs.writeFile("movies.json", JSON.stringify(movies, null, 2), (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("Successfully written data to file");
    });
  } catch (err) {
    console.error(err);
  }
}
