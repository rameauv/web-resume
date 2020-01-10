import React from 'react';
import * as enzyme from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import WorkingExperience from '../components/workingExperience';
import { findByTestAttr } from '../utils/findByTestAttr';
import { WorkingExperienceDto } from '../repositories/apiRepository/apiDtos';

enzyme.configure({ adapter: new ReactSixteenAdapter() });

function setUp(props) {
  const component = enzyme.shallow(<WorkingExperience {...props} />);
  return component;
}

describe('\'workingExperience\' component', () => {
  describe('when there is no props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp({});
    });
    it('should not render the component', () => {
      const component = findByTestAttr(wrapper, 'NoProps');
      expect(component.length).toBe(1);
    });
  });
  describe('when there is props', () => {
    let wrapper;
    beforeEach(() => {
      const workingExperienceDto = new WorkingExperienceDto();
      workingExperienceDto.address = 'my address';
      workingExperienceDto.company = 'my company';
      workingExperienceDto.current = true;
      workingExperienceDto.startingDate = '2018-05-15T17:01:33.000+00:00';
      workingExperienceDto.endingDate = '2018-08-16T02:02:59.000+00:00';
      workingExperienceDto.imageUrl = 'url';
      workingExperienceDto.title = 'my title';
      const props = {
        workingExperience: workingExperienceDto,
      };
      wrapper = setUp(props);
    });
    it('should render the component', () => {
      const component = findByTestAttr(wrapper, 'NoProps');
      expect(component.length).toBe(0);
    });
    it('should render the picture', () => {
      const component = findByTestAttr(wrapper, 'Picture');
      expect(component.length).toBe(1);
    });
    it('should render the title', () => {
      const component = findByTestAttr(wrapper, 'Title');
      expect(component.length).toBe(1);
    });
    it('should render the company name', () => {
      const component = findByTestAttr(wrapper, 'Company');
      expect(component.length).toBe(1);
    });
    it('should render the starting and ending dates', ()=>{
      const component = findByTestAttr(wrapper, 'Dates');
      expect(component.length).toBe(1);
    });
    it('should render the address', ()=>{
      const component = findByTestAttr(wrapper, 'Address');
      expect(component.length).toBe(1);
    });
  });
});
