import React from 'react';
import { mount } from 'enzyme';
import Column from './Column'; 

describe('Component Column', () => {
  const setup = {
    addTask: jest.fn(),
    updateTask: jest.fn(),
    tasks: []
  }
  it('renderiza form quando titulo for To Do', () => {
    const wrapper = mount(<Column columnTitle="To Do" {...setup} />);
    expect(wrapper.find('form')).toHaveLength(1);
  })

  it('renderiza form quando titulo for Done', () => {
    const wrapper = mount(<Column columnTitle="Done" {...setup} />);
    expect(wrapper.find('form')).toHaveLength(0);
  })

  it('teste de submit', () => {
    const wrapper = mount(<Column columnTitle="To Do" {...setup} />);
    wrapper.find('form').simulate('submit');
    expect(setup.addTask).toHaveBeenCalled();
  })

})
