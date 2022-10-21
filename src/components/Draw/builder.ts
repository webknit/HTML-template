import React from 'react';
import { populate, register } from 'react-abode';

import Draw from './Draw';

register('Draw', () => React.memo(Draw));

// Use it, accepts options
populate();
