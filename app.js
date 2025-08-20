const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (_req, res) => {
  res.send('✅ It works! Deployed via Docker + GitHub Actions to EC2.');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

