const express = require("express")
const app = express();
app.use(express.static('./public'));
app.listen(3000, function(){
    console.log("Server is running...")
});

const budget = require("./models/budget.js")
const bankAccount = 


// app.use((req, res, next) => {
//     console.log("I run for all routes")
//     next()
//   })
app.use(express.urlencoded({extended: false }));


app.get("/budgets/new", (req, res)=>{
    res.render("new.ejs")
  })

app.post("/budgets", (req, res) => {
    budget.push(req.body)
    res.redirect("/budgets");
  })

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



