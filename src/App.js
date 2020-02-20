import React, { Component } from 'react';
import './App.css';
import Form from './Form'
import api from './services/api';
import SimpleTable  from './SimpleTable';
class App extends Component {
  constructor(props)
  {
    super(props);
  this.state={
    fields:{},
    response: []
  }
}
onSubmit=fields=>{
  api.post('api', fields)
            .then(res => {});
  api.get('api/get')
            .then(res => {
              let json_data = [];
              for (var i =0;i <  res.data.table.length; i++)
              {
                var strobj  = JSON.stringify(res.data.table[i]);
                var parseobj = JSON.parse(strobj);
                json_data.push(JSON.parse(res.data.table[i]));
              }
               this.setState({response: json_data});
            });       
  }
  render(){
  return (
    <div className="page-background">
      <Form  onSubmit={fields=>this.onSubmit(fields)}/>
      <SimpleTable rowData={this.state.response}/>
          
    </div>
  );
}
}
export default App;