const remoteLoad = url => {
  return new Promise((resolve, reject) => {
    const existingScript = document.getElementById(url);
    //如果script不存在
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = url;
      script.src = url;
      document.body.appendChild(script);
      script.onload = function() {
        this.onerror = this.onload = null;
        resolve();
      };
      script.onerror = function() {
        this.onerror = this.onload = null;
        reject('加载失败' + url);
      };
    } else {
      setTimeout(() => {
        resolve();
      }, 500);
    }
  });
};

export default remoteLoad;
