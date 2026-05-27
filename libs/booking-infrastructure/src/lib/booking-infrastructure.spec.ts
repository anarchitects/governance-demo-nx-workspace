import { InMemoryBookingRepository } from './booking-infrastructure';

describe('bookingInfrastructure', () => {
  it('should work', () => {
    const repository = new InMemoryBookingRepository();
    expect(repository).toBeInstanceOf(InMemoryBookingRepository);
  });
});
