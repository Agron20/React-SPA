import React, { Component } from "react";
import { Routes, Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
// import Contact from "./Contact";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "Agron Cepi" };
  }

  render() {
    return (
      <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">Stuff</NavLink></li>
          </ul>

          <div className="content">
            <Routes>
              <Route index element={<Home />} />
              <Route path="/stuff" element={<Stuff name={this.state.name} />} />
            </Routes>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;



// import React, { Component } from "react";
// import {
//   Routes,
//   Route,
//   NavLink,
//   HashRouter
// } from "react-router-dom";
// import Home from "./Home";
// import Stuff from "./Stuff";
// import Contact from "./Contact";

// class Main extends Component {
//   render() {
//     return (

//       <HashRouter>
//         <div>
//           <h1>Simple SPA</h1>
//           <ul className="header">
//             <li><NavLink exact to="/">Home</NavLink></li>
//             <li><NavLink to="/stuff">Stuff</NavLink></li>
//             <li><NavLink to="/contact">Contact</NavLink></li>
//           </ul>

//           <div className="content">
//             <Routes>
//               {/* <Route exact path="/" component={<Home />}> */}
//               <Route index element={<Home />} />
//               <Route path="stuff" element={<Stuff />} />
//               <Route path="contact" element={<Contact />} />

//             </Routes>
//           </div>

//         </div>
//       </HashRouter>
//     );
//   }
// }
// export default Main;


