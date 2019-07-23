import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import User from "./User";
import Mahasiswa from "./Mahasiswa";
import Mata_praktikum from "./Mata_praktikum";
import Dosen from "./Dosen";
import Asisten from "./Asisten";
import Kepala_lab from "./Kepala_lab";
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1 className="title">Single Page Application</h1>
          <ul className="header">
            <li><NavLink to="/">User</NavLink></li>
            <li><NavLink to="/Mahasiswa">Mahasiswa</NavLink></li>
            <li><NavLink to="/Mata_praktikum">Mata Praktikum</NavLink></li>
            <li><NavLink to="/Dosen">Dosen</NavLink></li>
            <li><NavLink to="/Asisten">Asisten</NavLink></li>
            <li><NavLink to="/Kepala_lab">Kepala lab</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={User}/>
            <Route path="/Mahasiswa" component={Mahasiswa}/>
            <Route path="/Mata_praktikum" component={Mata_praktikum}/>
            <Route path="/Asisten" component={Asisten}/>
            <Route path="/Kepala_lab" component={Kepala_lab}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;