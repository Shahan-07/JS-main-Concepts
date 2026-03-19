import express from 'express';

const app = express();

const port = process.env.PORT || 3000;

app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
            id:1,
            title : 'A joke',
            content : 'this is a joke'
        },
        {
            id:2,
            title : 'A joke',
            content : 'this is a joke'
        },
        {
            id:3,
            title : 'A joke',
            content : 'this is a joke'
        }
    ];

    res.send(jokes)
});

app.get('/',(req,res)=>{
    res.send('server is ready')
});

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
})