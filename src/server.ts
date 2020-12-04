/* eslint-disable no-console */
import 'dotenv/config';
import { createConnections } from 'typeorm';

import app from './app';

createConnections()
  .then((connection) => {
    connection.map((connections) => {
      return console.log(
        `Connection \x1b[32m${connections.name === 'default' ? 'postgres' : connections.name}\x1b[0m successfuly.`,
      );
    });
    app.listen(process.env.SERVER_PORT, () =>
      console.log('Successful server started on port:', '\x1b[31m', process.env.SERVER_PORT, '\x1b[0m'),
    );
  })
  .catch((reason) => console.log(`Server not started >> \x1b[31m${reason}`, '\x1b[0m'));

// app.listen(process.env.SERVER_PORT, () =>
//   console.log('Successful server started on port:\x1b[31m', process.env.SERVER_PORT, '\x1b[0m'),
// );
