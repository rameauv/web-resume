import React from 'react';
import * as enzyme from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import Competence from '../view/components/Competence';
import findByTestAttr from './utils/findByTestAttr';

enzyme.configure({ adapter: new ReactSixteenAdapter() });

function setUp(props) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const component = enzyme.shallow(<Competence {...props} />);
  return component;
}

describe('\'competence\' component', () => {
  describe('when there is no props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp({});
    });
    it('should not render the component', () => {
      const component = findByTestAttr(wrapper, 'CompetenceComponent');
      expect(component.length).toBe(0);
    });
  });
  describe('when there is props', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        rate: 50,
        title: 'my competence',
      };
      wrapper = setUp(props);
    });
    it('should render the component', () => {
      const component = findByTestAttr(wrapper, 'CompetenceComponent');
      expect(component.length).toBe(1);
    });
    it('should render the title', () => {
      const component = findByTestAttr(wrapper, 'title');
      expect(component.length).toBe(1);
    });
    it('should render the title', () => {
      const component = findByTestAttr(wrapper, 'rate');
      expect(component.length).toBe(1);
    });
  });
});
