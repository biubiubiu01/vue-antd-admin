// export default function loadScript() {
//   return new Promise((resolve, reject) => {
//     if (window.kriging) {
//       resolve(window.kriging);
//     } else {
//       var script = document.createElement('script');
//       script.type = 'text/javascript';
//       script.async = true;
//       script.src = 'https://cdn.jsdelivr.net/npm/kriging@0.1.12/dist/kriging.js';
//       script.onerror = reject;
//       document.head.appendChild(script);
//       script.onload = function(res) {
//         // resolve(window.kriging);
//         console.log(script);
//       };
//     }
//   });
// }
