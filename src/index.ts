import Server from './services/server';

const port = process.env.PORT || 8000;

Server.listen(port, () => console.log(`Server up port: ${port}`))


