'use strict';

require('@babel/register')();
require("core-js/stable");
require("regenerator-runtime/runtime");
require('./server').default;
