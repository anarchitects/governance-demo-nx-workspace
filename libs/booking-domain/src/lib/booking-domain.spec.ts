import { Booking, createBooking } from './booking-domain';

describe('bookingDomain', () => {
  const booking: Booking = {
    id: 'booking-1',
    customerId: 'customer-1',
    startsAt: new Date('2026-06-01T10:00:00.000Z'),
    endsAt: new Date('2026-06-01T12:00:00.000Z')
  };
  it('should work', () => {
    expect(createBooking(booking)).toEqual(booking);
  });
});
