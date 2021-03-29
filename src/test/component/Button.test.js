import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../../components/Button';

it('renders correctly', () => {
  const isWide = true;
  const tree = renderer
    .create(<Button name="0" key="0" handleClick={() => {}} wide={isWide} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
