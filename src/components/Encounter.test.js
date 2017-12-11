import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestRenderer from 'react-test-renderer';
import Encounter from './Encounter';

describe('<Encounter />', () => {
  it('does not have functioning tests...', () => {
    expect(true).toEqual(true);
  });

  it('renders', () => {
    const renderer = ReactTestRenderer.create(
      <Encounter Person="Tony Stark" Date="2008-05-02" />
    );
  });

  //   it('renders without crashing', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<Encounter />, div);
//   });
});
