import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestRenderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import EncounterList from './EncounterList';


describe('<App />', () => {
  it('does not have functioning tests...', () => {
    expect(true).toEqual(true);
  });

  it('renders', () => {
    const encounters = [{
      Person: 'Tony Stark',
      Date: '2008-05-02',
      Event: 'Iron Man premiere',
      Location: 'LA',
      Topics: 'armor, ego',
    }];

    const renderer = ReactTestRenderer.create(
      <EncounterList encounters={encounters} />
    );
  });

//   it('renders without crashing', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<EncounterList />, div);
//   });

//   it('should render its children', () => {
//     const children = (<h1>Test</h1>);
//     const wrapper = shallow(
//       <EncounterList>
//         {children}
//       </EncounterList>,
//     );
//     expect(wrapper.contains(children)).toEqual(true);
//   });
});
