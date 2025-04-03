import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EventFilter from './EventFilter';

describe('EventFilter', () => {
  it('should call setFilter when selection changes', async () => {
    const mockSetFilter = jest.fn();
    render(<EventFilter filter="All" setFilter={mockSetFilter} />);

    // Open the select dropdown
    userEvent.click(screen.getByRole('combobox'));
    
    // Click on the "Music" option
    userEvent.click(screen.getByText('Music'));
    
    expect(mockSetFilter).toHaveBeenCalledWith('Music');
  });
});