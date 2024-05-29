const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

app.get('/download-vcard', (req, res) => {
  const vcf = `BEGIN:VCARD
VERSION:3.0
FN:Thymen Willemsen
TEL:+32470968413
END:VCARD`;

  res.setHeader('Content-Type', 'text/vcard; charset=utf-8');
  res.setHeader('Content-Disposition', 'attachment; filename="ThymenWillemsen.vcf"');
  res.send(vcf);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
