import Form from '../form'
import Doc from '../doc'
import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });





it('renders  <Doc /> components', () => {
    const wrapper = shallow(<Doc />);
    const appDoc = wrapper.find("[data-test='test-doc']");
    expect(appDoc.length).toBe(1);
});

it('renders  <Form /> components', () => {
    const wrapper = shallow(<Form />);
    const appForm = wrapper.find("[data-test='form-test']");
    expect(appForm.length).toBe(1);
});


it('Test click event', () => {
    const callBack = jest.fn();

    const button = shallow(<Form />);
    const buttonClick = button.find("[data-test='test-button']");
    buttonClick.simulate('click', { preventDefault: callBack });

});

