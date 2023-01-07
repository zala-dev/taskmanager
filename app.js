const express = require('express');

const app = express();
const PORT = 3000;

// routes

app.get('/', (req, res) => {
  res.send('<h1 style="color: red;"> Task Manager App </h1>');
});

// app.get('/api/v1/tasks')         - get all the tasks
// app.post('/api/v1/tasks')        - create a new task
// app.get('/api/v1/tasks/:id')     - get single task
// app.patch('/api/v1/tasks/:id')   - update task
// app.delete('/api/v1/tasks/:id')  - delete task

// run server
app.listen(PORT, console.log(`Server is running on port: ${PORT}`));
