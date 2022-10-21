import React from 'react';
import { populate, register } from 'react-abode';
import DemoImage from './DemoImage';

register('DemoImage', () => React.memo(DemoImage));

populate();
