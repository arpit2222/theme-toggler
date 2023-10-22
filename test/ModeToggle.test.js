// test/ModeToggle.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useTheme } from 'next-themes';
import chai from 'chai';
import ModeToggle from '../pages/index.tsx'; // Adjust the import path
const expect = chai.expect;

describe('ModeToggle Component', () => {
  it('should toggle theme when button is clicked', () => {
    // Mock useTheme to return a spy
    useTheme.mockReturnValue({
      setTheme: chai.spy(),
    });

    const { getByText } = render(<ModeToggle />);
    const toggleButton = getByText('Toggle Theme');

    fireEvent.click(toggleButton);

    // Assert that setTheme was called
    expect(useTheme().setTheme).to.have.been.called();
  });

  it('should render dark mode icon by default', () => {
    useTheme.mockReturnValue({
      theme: 'dark',
    });

    const { getByTestId } = render(<ModeToggle />);
    const moonIcon = getByTestId('moon-icon');

    // Assert that the moon icon is rendered
    expect(moonIcon).to.exist;
  });

  it('should render light mode icon when theme is light', () => {
    useTheme.mockReturnValue({
      theme: 'light',
    });

    const { getByTestId } = render(<ModeToggle />);
    const sunIcon = getByTestId('sun-icon');

    // Assert that the sun icon is rendered
    expect(sunIcon).to.exist;
  });
});
