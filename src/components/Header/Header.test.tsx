import React from 'react';
import { render, screen } from '@testing-library/react';
import {HeaderComponent} from './HeaderComponent';

test('renders Header', () => {
    render(<HeaderComponent />);
    const hederElement = screen.getByRole("header");
    expect(hederElement).toHaveTextContent("Shop list")
    expect(hederElement).toBeInTheDocument();
});
