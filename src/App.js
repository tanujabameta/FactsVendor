import React,{Component} from 'react';
import './App.css';
import Header from  './Component/Header';
import Button from  './Component/Button';
import UserInput from  './Component/UserInput';
import Fact from  './Component/Fact';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class App extends Component {

  state = {
    startDate: Date.parse(moment()),
    Fact:'Fact is loading....'
  }

  componentDidMount(){
    console.log('cdm',this.state);
    this.fetchFact(moment(this.state.startDate).format("MM/DD"));
  }

  fetchFact= arg=>{
    console.log(arg);
    fetch('https://cors-anywhere.herokuapp.com/http://numberapi.com/' + arg, {
    crossDomain:true
    })
    .then(res => res.text())
    .then(fact=> this.setState({Fact:fact}))
    .catch(e => console.log(e))
  }   
  getDate = date => {
   console.log(this.state.startDate);
   this.setState({ startDate: date}, () =>{
     this.fetchFact(moment(this.state.startDate).format("MM/DD"));
   })
  }

  getRandomFact =() => {
    this.fetchFact('random/date');
  }

  render (){
  return (<div className="App">
         <Header />
         <div className='buttons'>
         <Button getRandomFact = {this.getRandomFact} value='getRandomFact'/>
         </div>
         <h3>Or</h3>
         <h4>Please Enter your Date of Birth(Year not needed)</h4>
         <UserInput getDate={this.getDate} startDate={this.state.startDate}/>
         <Fact factResult={this.state.Fact} />
    </div>
  );
  }
}
export default App;
