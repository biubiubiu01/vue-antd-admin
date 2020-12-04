let callbacks = [];

export default function(url, callback) {
  const isScript = document.getElementById(url);
  const cb = callback || function() {};
  if (!isScript) {
    const script = document.createElement('script');
    script.src = url;
    script.id = url;
    document.body.appendChild(script);
    callbacks.push(cb);
    console.log(script);
  }
}
