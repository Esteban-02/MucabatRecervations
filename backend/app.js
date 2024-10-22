const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Importar rutas
const reservationRoutes = require('./routes/reservationRoutes');

// Usar las rutas
app.use('/api/reservations', reservationRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
