import React from 'react';
import { populate, register } from 'react-abode';

import Overlay from './Overlay';

register('Overlay', () => React.memo(Overlay));

// Use it, accepts options
populate();
