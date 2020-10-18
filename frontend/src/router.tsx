import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from './pages/Landing'
import OrphanegesMap from './pages/OrphanagesMap'
import Orphanege from './pages/Orphanage'
import CreateOrphanege from './pages/CreateOrphanage'


function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/app" exact component={OrphanegesMap} />
            <Route path="/orphanages/create" exact component={CreateOrphanege} />
            <Route path="/orphanages/:id" exact component={Orphanege} />
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;