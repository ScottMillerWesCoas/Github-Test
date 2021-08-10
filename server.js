const express = require ('express'); 

const app = express(); 

const path = require('path');

app.use(express.static(path.join(__dirname + '/')));

app.get('/', async (req,res) => {
	res.sendFile(path.join(__dirname, './views/index.html') )
})


app.listen(3000, () => console.log('listening on old 3k wee bay')); 