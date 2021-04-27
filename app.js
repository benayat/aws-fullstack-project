const express = require('express');
const port = process.env.PORT || 5000;
const app = express();
const recipesRouter = require('./routes/recipes.routes');

app.use(express.json());
app.use('/api/recipes', recipesRouter);



app.listen(port, () => console.log(`application start at ${port}`));