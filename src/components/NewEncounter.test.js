import React from 'react';
import ReactDOM from 'react-dom';
import NewEncounter from './NewEncounter';

describe('<NewEncounter />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NewEncounter />, div);
  });
});
