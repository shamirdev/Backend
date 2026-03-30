import express from 'express';
const app = express();
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

//get 5 jokes in array object
app.get('/api/jokes', (req, res) => {
    const jokes = [
        { id: 1, joke: 'Why did the scarecrow win an award? Because he was outstanding in his field!' },
        { id: 2, joke: 'Why don’t scientists trust atoms? Because they make up everything!' },
        { id: 3, joke: 'Why did the bicycle fall over? Because it was two-tired!' },
        { id: 4, joke: 'What do you call fake spaghetti? An impasta!' },
        { id: 5, joke: 'Why did the math book look sad? Because it had too many problems!' }
    ];
    res.send(jokes);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
})