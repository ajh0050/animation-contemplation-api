const express = require('express');
const app = express();
app.set('port', process.env.PORT || 3000);
const characters = require('./data/characters');

app.locals = {
    title: 'Animation Contemplation Api',
    characters: characters
}
app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});

app.get('/characters', (request, response) => {
    response.status(200).json(app.locals.characters);
});

