import { render, screen } from '@testing-library/react';
import { CaseStudyLayout } from './CaseStudyLayout';

describe('CaseStudyLayout', () => {
  it('renders its content inside an article', () => {
    render(
      <CaseStudyLayout>
        <p>Content</p>
      </CaseStudyLayout>,
    );
    expect(screen.getByRole('article')).toHaveTextContent('Content');
  });
});
