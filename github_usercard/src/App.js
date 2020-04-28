import React from 'react';
import axios from 'axios';
import FirstCard from "./components/Cards";
import CardContent from './components/CardContent';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      followers: []
    };

  }
  componentDidMount() {
    axios
      .get(`https://api.github.com/users/J0rgeTayl0r`)
      .then((res) => this.setState({ data: res.data }))
      .catch((err) => console.log("error!", err));
    axios
      .get(`https://api.github.com/users/J0rgeTayl0r/followers`)
      .then((res) => this.setState({ followers: res.data }))
      .catch((err) => console.log('err', err)); 
  }
  render() {
    console.log('Data:',this.state.data, 'followers:', this.state.followers)
    return (
      <div>
        <FirstCard cardProps={this.state.data} />
        <CardContent cardConProps={this.state.followers} />
      </div>
    );
  }
  
}
export default App;