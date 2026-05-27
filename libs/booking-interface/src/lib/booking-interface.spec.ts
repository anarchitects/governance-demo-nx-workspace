import { BookingController } from './booking-interface';

describe('bookingInterface', () => {
  it('should work', () => {
    const controller = new BookingController();
    expect(controller).toBeInstanceOf(BookingController);
  });
});
