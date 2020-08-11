import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { render } from 'react-dom';
import LoadHomepage from './component/LoadHomepage';
import LoadCreateInvoice from './component/LoadCreateInvoice';
import LoadUpdateInvoice from './component/LoadUpdateInvoice';
import LoadDisplayInvoice from './component/LoadDisplayInvoice';
import LoadAllInvoices from './component/LoadAllInvoices';
import LoadPageNotFound from './component/PageNotFound';


class App extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <LoadHomepage />
          </Route>
          <Route exact path="/createinvoice">
            <LoadCreateInvoice />
          </Route>
          <Route exact path="/updateinvoice">
            <LoadUpdateInvoice />
          </Route>
          <Route exact path="/loaddisplayinvoice">
            <LoadDisplayInvoice />
          </Route>
          <Route exact path="/allinvoices">
            <LoadAllInvoices />
          </Route>
          <Route>
            <LoadPageNotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }




}


export default App;
