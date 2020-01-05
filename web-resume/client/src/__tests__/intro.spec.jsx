import React from 'react';
import * as enzyme from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import { Intro, IntroDatas } from '../components/Intro';
import { findByTestAttr } from '../utils/findByTestAttr';

enzyme.configure({ adapter: new ReactSixteenAdapter() });

function setUp(props) {
  const component = enzyme.shallow(<Intro {...props} />);
  return component;
}

describe('intro component', () => {
  describe('when there is props but its null', () => {
    let wrapper;
    beforeEach(() => {
      const props = { introDatas: null };
      wrapper = setUp(props);
    });
    it('should not render', () => {
      const component = findByTestAttr(wrapper, 'IntroComponent');
      expect(component.length).toBe(0);
    });
  });
  describe('when there is props', () => {
    let wrapper;
    beforeEach(() => {
      const introDatas = new IntroDatas();
      introDatas.contact = 'my web resume';
      introDatas.firstname = 'valentin';
      introDatas.lastname = 'rameau';
      introDatas.profilePicture = 'https://avatars1.githubusercontent.com/u/4478671?v=3&s=400';
      const props = { introDatas };
      wrapper = setUp(props);
    });
    it('should render without errors', () => {
      const component = findByTestAttr(wrapper, 'IntroComponent');
      expect(component.length).toBe(1);
    });
    it('should render the profile picture', () => {
      const component = findByTestAttr(wrapper, 'ProfilePicture');
      expect(component.length).toBe(1);
    });
    it('should render the the first and last name', () => {
      const component = findByTestAttr(wrapper, 'Name');
      expect(component.length).toBe(1);
    });
    it('should render the title', () => {
      const component = findByTestAttr(wrapper, 'Title');
      expect(component.length).toBe(1);
    });
    it('should render the address', () => {
      const component = findByTestAttr(wrapper, 'Address');
      expect(component.length).toBe(1);
    });
  });
});
