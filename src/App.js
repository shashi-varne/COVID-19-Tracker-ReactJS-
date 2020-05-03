import React, { Component } from 'react';
import styles from './App.module.css';
import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './api';

class App extends Component {
  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData })
  }
  handleCountryChange = async (country) => {
    const countryData = await fetchData(country);
    console.log(countryData)
    this.setState({ data: countryData, country: country })

  }

  render() {
    return (
      <div className='container'>
        <img src='https://i.ibb.co/7QpKsCX/image.png' className='covidImage' />
        <Cards info={this.state.data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={this.state.data} country={this.state.country} />
      </div>
    );
  }
}

export default App;
