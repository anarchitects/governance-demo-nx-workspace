import { CreateBookingUseCase } from '@nx-workspace/booking-application';

export class BookingController {
  constructor(
    private readonly createBookingUseCase = new CreateBookingUseCase()
  ) {}

  createBooking() {
    return this.createBookingUseCase.execute();
  }
}
