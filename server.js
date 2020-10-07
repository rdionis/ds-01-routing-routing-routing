const express = require("express");

const dciModules = require("./data");

const app = express();

const port = 5000;

app.get("/", (req, res) => {
  res.send(`<h1>DCI modules as...</h1> 
      <p><a href="/html">HTML</a></p>
      <p><a href="/array">Array</a></p>
      <p><a href="/string">String</a></p>
      <p><a href="/list">List</a></p>

  `);
});

app.listen(port, () => {
  console.log(`server initiated with success on port ${port}`);
});

app.get("/html", (req, res) => {
  res.send(`<h1>Welcome, I am HTML</h1>
  <button><a href="/">Home</a></button>`);
});

app.get("/array", (req, res) => {
  console.log("requested entire array");
  res.send(dciModules);
});

const modulesString = dciModules.join(", ");

app.get("/string", (req, res) => {
  console.log("requested whole array as string");
  res.send(`<button><a href="/">Home</a></button></br>${modulesString}`);
});

app.get("/list", (req, res) => {
  let modulesHtml = dciModules.map((module) => {
    return (
      "<li>" + (module == "Data Server" ? `<b>${module}</b>` : module) + "</li>"
    );
  });
  res.send(
    `<button><a href="/">Home</a></button><br/><ul>${modulesHtml.join("")}</ul>`
  );
});
