const express = require('express')
const app = express();
const router = express.Router();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use('/api', router);

app.get('/', (req, res) => {
    res.send('Hello World!')
}).post('/estado', (req, res) => {

});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})