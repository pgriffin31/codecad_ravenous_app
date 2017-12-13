import React from 'react';
import './App.css';
import { BusinessList } from './components/BusinessList/BusinessList';
import { SearchBar } from './components/SearchBar/SearchBar';

// eslint-disable-next-line
const clientId = 'QNpHCnwcnes0JDYB66rxpw';
// eslint-disable-next-line
const clientSecret = 'C8k4wG1s19iC1xoXHXQoDw9TMHiiDYplLXWvVEmIi9Jx8QicctmQswvFQJMk78u2';

let business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

const businesses = [
  business,
  business,
  business,
  business,
  business,
  business
];

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar />
        <BusinessList businesses={businesses} />
      </div>
    );
  }
}
