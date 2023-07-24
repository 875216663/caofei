//main server
import app from './app/app.js'

const port = 8000;

app.listen(port, () => console.log(`Server listening at ${port}`));