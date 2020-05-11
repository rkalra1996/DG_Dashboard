const config = require('dotenv').config('./.env');

const express = require('express');
const app = express();
const bp = require('body-parser');
const fetch = require('node-fetch');
const cors = require('cors');
const path = require('path');

const PORT = +process.env.DG_CLIENT_DASHBOARD_PORT || +process.env.PORT || 4000;

app.use(cors());
app.use(bp.json());

app.use(express.static(path.join(__dirname, './../dist/DG-Dashboard')));

app.get('/api/v1/json/:jsonCode',(req,res,next)=> {console.log('api captured ', req.url);next();}, async (req,res) => {
    const url = 'https://extendsclass.com/api/json-storage/bin/' + req.params.jsonCode;
    console.log('hitting url ', url);
    const final = await fetch(url).then(result => result.json());
    res.status(200).send({...final})
});

app.use('*', (req, res, next) => { 
    res.sendFile(path.join(__dirname, './../dist/DG-Dashboard/index.html'));
});

app.listen(PORT, () => {
    console.log('server up and running on port --> ', +PORT);
});