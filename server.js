const express = require("express")
const app = express();

app.use(express.json())

app.use('/picked', require('./routes/pickedRouter'))

app.listen(8000, () => {
    console.log('The Server is running on port 8000')
})
