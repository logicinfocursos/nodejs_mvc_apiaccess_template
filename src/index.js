import express from 'express';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import path from 'path';

const require = createRequire(import.meta.url);

require('dotenv').config();

const port = process.env.PORT || 3111;

const app = express();

app.set('view engine', 'ejs');

// Get the current directory name
const dirname = path.dirname(fileURLToPath(import.meta.url));
app.set('views', path.join(dirname, 'views')); // Set the views directory

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});