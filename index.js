const express= require('express');

//To unblock the data which come from other servers
const cors= require('cors');
//For read the user data from sign-up and seller page
const bodyParser = require('body-parser');

const port = 3001;
const host = '0.0.0.0';

//seller portal route
const ScrapeRouter= require('./routes/scrape-router');


const app = express();
app.use(cors());
app.use(bodyParser.json());


app.listen(port, host,()=>{
    console.log('Service Stared on port 3001');
})


app.use('/api/scrape', ScrapeRouter);
