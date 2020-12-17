import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import PrivateRoute from '../utils/PrivateRoute';
import Village from '../Village/Village.component.js';
import VillageForm from '../Village/VillageForm.js';
import Schools from '../School/Schools.component.js';
import SchoolForm from '../School/SchoolForm.js';
import TestComponent from './TestComponent';

const HeadmasterRoutes = () => {
  return (
    <div>
      <Switch>
        <Route path="/mentor-pairings" component={TestComponent} />
        <Route path="/mentor-advisor" />
        <Route path="/school-village">
          <Village />
          <Schools />
        </Route>
        <Route exact path="/village/edit/:villageId" component={VillageForm} />
        <Route exact path="/school/edit/:schoolId" component={SchoolForm} />
        <Route path="/library" />
      </Switch>
    </div>
  );
};

export default HeadmasterRoutes;
