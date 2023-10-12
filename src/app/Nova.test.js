import React from 'react';
import renderer from 'react-test-renderer';
import Nova from './page';

test('snapshot para  o Componente de teste', () => {
  const component = renderer.create(<Nova />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
