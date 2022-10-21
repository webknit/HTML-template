import React from 'react';
import { populate, register } from 'react-abode';

import SearchToggle from './SearchToggle';

register('SearchToggle', () => React.memo(SearchToggle));

// Use it, accepts options
populate();
