const express = require("express")
const app = express();
app.use(express.static('./public'));
app.listen(3000, function(){
    console.log("Server is running...")
});

const budget = require("./models/budget.js")

app.get("/", (req, res)=>{
    res.send("Budgtr App");
});

app.get("/budgets", (req, res)=>{
    res.render("index.ejs", {
        budget,
    })
})

app.get("/budgets/:id", (req, res)=>{
    res.render("show.ejs", {
      budget: budget[req.params.id]
    });
});



