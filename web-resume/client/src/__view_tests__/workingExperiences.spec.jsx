import React from 'react';
import * as enzyme from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import WorkingExperiences from '../view/components/WorkingExperiences';
import findByTestAttr from './utils/findByTestAttr';

enzyme.configure({ adapter: new ReactSixteenAdapter() });

function setUp(props) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const component = enzyme.shallow(<WorkingExperiences {...props} />);
  return component;
}

describe('\'WorkingExperiences\' component', () => {
  describe('when there is no props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp({});
    });
    it('should not render the component', () => {
      const component = findByTestAttr(wrapper, 'WorkingExperiencesComponent');
      expect(component.length).toBe(0);
    });
  });
  describe('when there is props', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        workingExperiences: [],
      };
      wrapper = setUp(props);
    });
    it('should render the component', () => {
      const component = findByTestAttr(wrapper, 'WorkingExperiencesComponent');
      expect(component.length).toBe(1);
    });
  });
});
