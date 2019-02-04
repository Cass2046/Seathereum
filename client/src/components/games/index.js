import Aquarium from './aquarium/Aquarium';
import Inkfish from './aquarium/Inkfish';
import Menu from './Menu';
import {removeWhiteSpace} from '../../util';

const games = [
  {
    name: 'swimmy fish',
    component: Inkfish
  },
  {
    name: 'aquarium',
    component: Aquarium
  }
];

const routes = {
  component: Menu,
  path: '/games',
  routes: games.map(({name, ...rest}) => ({
    path: `/${removeWhiteSpace(name)}`,
    ...rest
  }))
};

export {games, routes};
