const express = require('express');
const cors = require('cors');
const DB = require('./database');
const { issueRouter } = require('./routers/issues');
const app = express();
const port = 3030;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors())

DB.connectDB();

app.get('/', (req, res) => {
    res.json({
        status: 'api is running.',
    });
});

app.use('/issues', issueRouter);

app.listen(port, () => {
    console.log(`App is running at http://localhost:${port}`);
});
