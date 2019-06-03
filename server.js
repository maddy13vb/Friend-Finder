const express = require('express')

const app = express()
let PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require('./app/routing/apiRoutes.js')(app)
require('./app/routing/htmlRoutes.js')(app)

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`)
})
