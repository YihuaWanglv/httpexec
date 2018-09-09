const express = require('express')
const shell = require("shelljs");

const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/cmd', (req, res) => {
	shell.exec("/d/datas/temp/shelltest.sh");
	res.send('exec ok!')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))