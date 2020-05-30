import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import initialState from '@mocks/state.json';
import { FormikField as Field } from './index';

describe('Component: Brands', () => {
  let wrapper;
  let store;
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <Field />
        </MemoryRouter>
      </Provider>
    );
  });
  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('label to render', () => {
    expect(1).toBe(2);
  });
});
