import React from 'react';
import {render} from 'react-dom';
import { provider , hashHistory } from 'react-router-dom'
import Routers from './routers';
render(
    <Routers/>,
    document.getElementById('root')
);