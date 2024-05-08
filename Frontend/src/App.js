import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './places/pages/NavBar';
import Home from './places/pages/Home';
import Homes from './places/pages/Home2'; // Import your Home component
// import About from './About'; // Import your About component
// import VehicleModel from './VehicleModel'; // Import your VehicleModel component
// import Testimonial from './Testimonial'; // Import your Testimonial component
// import OurTeam from './OurTeam'; // Import your OurTeam component
// import Contact from './Contact'; // Import your Contact component

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/about" component={About} />
          <Route path="/vehicle-model" component={VehicleModel} />
          <Route path="/testimonial" component={Testimonial} />
          <Route path="/our-team" component={OurTeam} />
          <Route path="/contact" component={Contact} /> */}
          <Route path="/home2" exact component={Homes} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
