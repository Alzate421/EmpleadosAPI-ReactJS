import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import EmployeeDetail from './pages/EmployeeDetail';
import Header from './molecules/Header';
import Footer from './molecules/Footer';

const App = () => {
  return (
    <div>
      <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/employee/:id" component={EmployeeDetail} />
        </Switch>
      <Footer/>
    </div>
  );
};

export default App;
