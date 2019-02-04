import React from 'react';
import {Route} from 'react-router-dom';

import Video from './components/about/Video';
import Home from './components/home/Home';
import Data from './components/test/Data';
import {routes as gameRoutes} from './components/games';
import Market from './components/market/Market';

const routes = [
  {
    component: Home,
    exact: true,
    path: '/'
  },
  {
    component: Video,
    path: '/about'
  },
  {
    component: Market,
    path: '/market'
  },
  gameRoutes,
  {
    component: Data,
    path: '/test'
  }
];

const denestRoutes = (routes) =>
  routes.reduce((acc, route) => {
    const {routes, ...rest} = route;
    acc.push({...rest});
    return routes
      ? acc.concat(
          denestRoutes(
            routes.map((sub) => {
              const {path: subpath, ...rest} = sub;
              return {...rest, path: `${route.path}${subpath}`};
            })
          )
        )
      : acc;
  }, []);

export default () => {
  return denestRoutes(routes).map(({path, component: C}, i) => (
    <Route key={i} path={path} render={(props) => <C {...props} />} />
  ));
};
