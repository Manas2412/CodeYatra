import bookingSchema from '../Booking';

const Booking = connection => connection.model('Booking', bookingSchema);

export default Booking;