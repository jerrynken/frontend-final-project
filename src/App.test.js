import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './components/BookingForm';

test('updates selectedTime state on time selection', () => {
  render(<BookingForm />);

  // Simulate selecting a time
  const timeInput = screen.getByLabelText(/Choose time/i);
  fireEvent.change(timeInput, { target: { value: '18:00' } });

  // Check if the selectedTime state has been updated
  expect(timeInput.value).toBe('18:00');
});
