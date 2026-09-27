import { render, screen } from '@testing-library/react';
import { AboutIntro } from './AboutIntro';

describe('AboutIntro', () => {
  it('introduces Milijana with a described portrait', () => {
    render(<AboutIntro />);
    expect(screen.getByRole('heading', { level: 1, name: 'About me' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'Hi, I am Milijana, and' })).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAccessibleName(/Milijana sitting/);
    expect(screen.getByText(/warm, fun, clumsy, and curious/)).toBeInTheDocument();
  });
});
