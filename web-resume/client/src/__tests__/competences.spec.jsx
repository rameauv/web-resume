import React from 'react';
import * as enzyme from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import Competences from '../components/competences';
import { findByTestAttr } from '../utils/findByTestAttr';
import { CompetencesDto } from '../repositories/apiRepository/apiDtos';

enzyme.configure({ adapter: new ReactSixteenAdapter() });

function setUp(props) {
  const component = enzyme.shallow(<Competences {...props} />);
  return component;
}

describe('\'competences\' component', () => {
  describe('when there is props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp({});
    });
    it('should not render the component', () => {
      const component = findByTestAttr(wrapper, 'CompetencesComponent');
      expect(component.length).toBe(0);
    });
  });
  describe('when there is props', () => {
    let wrapper;
    beforeEach(() => {
      const competencesDto = [];
      const props = { competencesDto };
      wrapper = setUp(props);
    });
    it('should render the component', () => {
      const component = findByTestAttr(wrapper, 'CompetencesComponent');
      expect(component.length).toBe(1);
    });
  });
});
