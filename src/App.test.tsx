import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

beforeEach(() => {
	render(<App />);
});

test('renders rules button', () => {
	const rulesButton = screen.getByRole('button', { name: /rules/i });
	userEvent.click(rulesButton);
});

test('does not show rules modal by default', () => {
	expect(screen.queryByText('rules/i')).not.toBeInTheDocument();
});
