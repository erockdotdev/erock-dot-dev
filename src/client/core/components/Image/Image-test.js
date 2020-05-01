import React from '@components/CTALink/node_modules/react';
import { MemoryRouter } from '@components/CTALink/node_modules/react-router-dom';
import { Provider } from '@components/CTALink/node_modules/react-redux';
import { mount } from '@components/CTALink/node_modules/enzyme';
import thunk from '@components/CTALink/node_modules/redux-thunk';
import configureStore from '@components/CTALink/node_modules/redux-mock-store';
import initialState from '@mocks/state.json';
import CTALink from './index';

describe('Component: CTALink', () => {
  let wrapper;
  let store;
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <CTALink />
        </MemoryRouter>
      </Provider>
    );
  });
  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
