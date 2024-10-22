import axios from 'axios';

const submitReservation = async (data) => {
    try {
        const response = await axios.post('http://localhost:5000/api/reservations', data);
        console.log('Reservation successful', response.data);
    } catch (error) {
        console.error('Error submitting reservation', error);
    }
};
