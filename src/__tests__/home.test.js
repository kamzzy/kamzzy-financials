import React from 'react';
import * as router from 'react-router';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Home from '../Pages/Home';
import Details from '../Pages/Details';
import NavBar from '../Components/NavBar';

describe('Ensure app renders as expected', () => {
  const navigate = jest.fn();

  beforeEach(() => {
    jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
  });
  test('renders the home page', () => {
    render(<Provider store={store}><Home /></Provider>);
    expect(screen.findAllByText('Cryptocurrency Trading Data')).toMatchSnapshot();
  });
  test('renders the Details page', () => {
    render(<Provider store={store}><Details /></Provider>);
    expect(screen.findAllByText('Price Change:')).toMatchSnapshot();
  });
  test('renders Navbar', () => {
    render(<Provider store={store}><NavBar /></Provider>);
    expect(screen.findAllByLabelText('setting')).toMatchSnapshot();
  });
  test('renders Searchbar', () => {
    render(<Provider store={store}><Home /></Provider>);
    expect(screen.findAllByPlaceholderText('Search currency pair')).toMatchSnapshot();
  });
});
