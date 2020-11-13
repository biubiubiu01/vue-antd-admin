import Vue from 'vue';

import svgIcon from '@/components/svgIcon';

Vue.component('svg-icon', svgIcon);

const req = require.context('./svg', false, /\.svg$/);
const requireAll = requireContext => requireContext.keys().map(requireContext);
requireAll(req);
