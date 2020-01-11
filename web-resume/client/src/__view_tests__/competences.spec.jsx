import React from 'react';
import * as enzyme from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import Competences from '../view/components/Competences';
import findByTestAttr from './utils/findByTestAttr';

enzyme.configure({ adapter: new ReactSixteenAdapter() });

function setUp(props) {
  // eslint-disable-next-line react/jsx-props-no-spreading
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
