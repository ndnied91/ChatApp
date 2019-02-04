const path = require('path');
const express = require('express')
const publicPath = path.join(__dirname , '..' , "/public");
//process.env for Heroku
  const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(publicPath));


app.get('/', (req,res)=>{
  res.render('index')
})

//push up to github


//create a heroku app


app.listen(port, ()=>{
  console.log(`Server is up on port ${port}`);
})
