const Reservation = require('../models/reservationModel');

exports.createReservation = async (req, res) => {
    try {
        const newReservation = new Reservation(req.body);
        await newReservation.save();
        res.status(201).json(newReservation);
    } catch (error) {
        res.status(500).json({ error: 'Error creating reservation' });
    }
};
