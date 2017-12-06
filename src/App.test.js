import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';


describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  // it('renders welcome message', () => {
  //   const wrapper = shallow(<App />);
  //   const welcome = <h2>Welcome to React</h2>;
  //   expect(wrapper.contains(welcome)).toEqual(true);
  // });

  // it('should render its children', () => {
  //   const children = (<h1>Test</h1>);
  //   const wrapper = shallow(
  //     <App>
  //       {children}
  //     </App>,
  //   );
  //   expect(wrapper.contains(children)).toEqual(true);
  // });
});
