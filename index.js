import express from "express";
import bodyParser from "body-parser";
const app= express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let newItems =["Buy MilkShake", "Clean", "write a short story"];

app.get("/", (req, res) => {

  let now = new Date().toLocaleDateString('en-us', { weekday:"long", month:"long", day:"numeric"});

  res.render("index.ejs", {listTitle: now, items: newItems});
});

app.post("/submit", (req, res) => {

newItems.push(req.body["newItem"]);
res.redirect("/");

});

app.post("/delete", (req,res)=>{
  newItems.pop(req.body["newItem"]);
  res.redirect("/");
})

app.listen(port, ()=>{
    console.log(`Server is running on ${port}.` );
});

