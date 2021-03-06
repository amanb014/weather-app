import React from 'react';
import './App.scss';
import { Route, Router, Switch } from 'react-router-dom';
import {Home} from '../pages/Home/Home';
import {WeatherInfo} from '../pages/Content/WeatherInfo';
import { CityProvider } from '../stores/CityContext';
import { SearchProvider } from '../stores/SearchContext';
import {history} from './../stores/history';

function App() {
  return (
    <div className="app">
      <CityProvider>
        <Router history={history}>
          <Switch>
            <Route exact path="/">
              <SearchProvider>
                <Home />
              </SearchProvider>
            </Route>

            <Route path="/weather">
              <WeatherInfo />
            </Route>
          </Switch>
        </Router>
      </CityProvider>
    </div>
  );
}

export default App;
