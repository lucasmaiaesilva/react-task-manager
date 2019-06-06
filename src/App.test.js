import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

describe('Testando App', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  xit('teste de troca de colunas dos itens', () => {
    const tasks = [
      { id: 1, status: 'To Do', description: 'Jogar CS' },
      { id: 2, status: 'Done', description: 'Beber água' },
      { id: 3, status: 'Done', description: 'Estudar' },
    ];
    const wrapper = mount(<App />);
    wrapper.setState({
      tasks,
    });
    wrapper.find('li input').simulate('change', { target: {checked: true} });
    expect(wrapper.state().items[0].status).toBe('Done');
  })
})
