import React, { Component } from 'react';


class Dosen extends Component{
  constructor(){
  super();
  this.state={
     hits: [],
     isLoading: false,
     error: null,
   }
}

componentDidMount(){
  this.setState({
     isLoading: true
    })
  fetch('http://localhost:8000/api/v1/dosen')
  .then(response => {
       if(response.ok){
       return response.json()
      }else{
      throw new Error('Something went wrong...')
    }
 })
  .then(dosen => this.setState({
    dosen: dosen.dosen,
    isLoading: false
  }))
  .catch(error => this.setState({
     error: null, 
     isLoading: false
  }))
 }



render(){
const {dosen, isLoading, error} = this.state;

    if(isLoading){
      return <p>Loading ... </p>
    }
    if(error){
      return <p>{error.message}</p>
     }
     
for (var i = 1; i <0; i++) {
    // note: we add a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    // rows.push(<rows key={i} />);
}
return(

<table border="1">
     
     <tr>
      <td><b><center>No</center></b></td>
      <td><b><center>NIDN</center></b></td>
      <td><b><center>user_id</center></b></td>
      <td><b><center>Delete</center></b></td>
      <td><b><center>Edit</center></b></td>
    </tr>
        {
          dosen && dosen.map(dosen => 
          <tr key={dosen.nidn}>   
          
            <td>{i++}</td>
  <td>{dosen.nidn}</td>
  <td>{dosen.user_id}</td>
    <td>
      <center>
        <a href="" onclick="javascript: return confirm('Anda Yakin Hapus?');">Delete</a>
      </center>
      </td>
    <td>
      <center>
        <a href="">Edit</a>
      </center>
    </td>
          </tr> 
        )}
   </table>

   )
  }
}
export default Dosen;