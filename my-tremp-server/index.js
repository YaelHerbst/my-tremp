
const express = require('express')
const cors = require('cors');
const app = express()
const port = 8000
app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//return the user name
app.get('/getUserName',(req,res)=>{res.send('YAEL')})



app.listen(port, () => {
  console.log(`myTremp project listening on port ${port}`)
})