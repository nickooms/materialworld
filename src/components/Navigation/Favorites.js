import React from 'react';
import StarIcon from 'material-ui-icons/StarBorder';

import SubMenu from './SubMenu';
import Street from './Street';

const Favorites = () => (
  <SubMenu name="Favorites" icon={<StarIcon />}>
    <Street id={7338} name="Markt" city="Stabroek" />
    <Street id={5514} name="Papenboslaan" city="Kapellen" />
  </SubMenu>
);

export default Favorites;
