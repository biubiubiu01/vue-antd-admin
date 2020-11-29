const req = require.context('../../icons/svg', false, /\.svg$/);
const requireAll = requireContext => requireContext.keys();

const re = /\.\/(.*)\.svg/;
const noShow = ['backTop', 'close', 'dierming', 'disanming', 'diyi', 'sale', 'visit'];

var svgIcons = requireAll(req).map(i => {
  if (noShow.indexOf(i.match(re)[1]) == -1) {
    return i.match(re)[1];
  }
});

svgIcons = svgIcons.filter(item => item);

export default svgIcons;
