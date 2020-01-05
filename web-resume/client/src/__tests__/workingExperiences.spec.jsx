import React from 'react';
import * as enzyme from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import WorkingExperiences from '../components/workingExperiences';
import { findByTestAttr } from '../utils/findByTestAttr';
import { WorkingExperienceDto } from '../utils/apiDtos';

enzyme.configure({ adapter: new ReactSixteenAdapter() });

function setUp(props) {
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
