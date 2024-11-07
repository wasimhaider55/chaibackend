import express from 'express'
import cors from "cors"
const app = express();

// app.get('/', (req, res) => {
//     res.send('server is ready');
// });

app.use(cors())
// get a list 5 jokes

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'this is a joke'
        },
        {
            id: 2,
            title: 'Another joke',
            content: 'this is another joke'
        },
        {
            id: 3,
            title: 'A third joke',
            content: 'this is a thrid joke'
        },
        {
            id: 4,
            title: 'A forth joke',
            content: 'this is a forth joke'
        },
        {
            id: 5,
            title: 'A fith joke',
            content: 'this is a fifth joke'
        },
        
    ];
    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server is ready http://localhost:${port}`)
})