const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Get a resource
app.get('/api/resources/:id', (req, res) => {
  const resourceId = req.params.id;
  console.log(`Fetching resource with ID: ${resourceId}`);
  res.json({ message: `Resource with ID: ${resourceId} fetched.` });
});

// Create a resource
app.post('/api/resources', (req, res) => {
  const newResource = req.body;
  console.log('Creating new resource:', newResource);
  res.json({ message: 'Resource created.', data: newResource });
});

// Update a resource
app.put('/api/resources/:id', (req, res) => {
  const resourceId = req.params.id;
  const updatedResource = req.body;
  console.log(`Updating resource with ID: ${resourceId}`, updatedResource);
  res.json({ message: `Resource with ID: ${resourceId} updated.`, data: updatedResource });
});

// Delete a resource
app.delete('/api/resources/:id', (req, res) => {
  const resourceId = req.params.id;
  console.log(`Deleting resource with ID: ${resourceId}`);
  res.json({ message: `Resource with ID: ${resourceId} deleted.` });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
