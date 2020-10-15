import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';
import DashboardView from '../views/DashboardView';
import ProvidersView from '../views/ProvidersView';
import WorkersView from '../views/WorkersView';
import LoginView from '../views/LoginView';
import RegisterView from '../views/RegisterView';
import ReportView from '../views/ReportView';

export default function routes(){
    return(
        <Fragment>
            <Route exact path="/" component={DashboardView}/>
            <Route exact path="/lista-proveedores" component={ProvidersView} />
            <Route exact path="/lista-trabajadores" component={WorkersView} />
            <Route exact path="/login" component={LoginView} />
            <Route exact path="/register" component={RegisterView} />
            <Route exact path="/marcaje" component={ReportView} />
        </Fragment>
    
    )
}