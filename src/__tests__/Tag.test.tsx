import React from 'react';
import { Tag } from '../components/Tag/Tag';
import { render } from '@testing-library/react';

test('renders component', async () => {
  const { getByText } = render(<Tag label="text" />);

  expect(getByText('text')).toBeInTheDocument();
});
