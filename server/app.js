const express = require('express');
const dataRoutes = require('./routes/dataRoutes');

const app = express();
app.use(express.json());

//routes
app.use('/', dataRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
