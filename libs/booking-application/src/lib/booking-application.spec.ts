import { CreateBookingUseCase } from './booking-application';

describe('CreateBookingUseCase', () => {
  it('should work', () => {
    const useCase = new CreateBookingUseCase();
    expect(useCase.execute()).toEqual({
      id: 'booking-1',
      customerId: 'customer-1',
      startsAt: new Date('2026-06-01T10:00:00.000Z'),
      endsAt: new Date('2026-06-01T12:00:00.000Z')
    });
  });
});
