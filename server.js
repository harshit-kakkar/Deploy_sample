const app = require('express')()

const PORT = process.env.PORT || 4444

app.get('/', (req, res) => {
  res.send('Hello! This is a sample app')
})

app.get('/hi', (req, res) => {
  res.send('Hello  ' + req.query.name)
})

app.listen(PORT, () => {
  console.log('Server started ' + PORT)
})