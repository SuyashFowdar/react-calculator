import React from 'react';
import renderer from 'react-test-renderer';
import Display from '../../components/Display';

it('renders correctly', () => {
  const tree = renderer
    .create(<Display result="1" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
