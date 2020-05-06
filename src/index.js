import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

if(process.env.NODE_ENV !== 'production') {
  require("./hot");
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
serviceWorker.register({
  onUpdate: function(registration) {
    // notification.open({
    //   message: "更新提示！",
    //   description: "缓存已更新，页面即将刷新！",
    //   duration: 0,
    //   icon: <Icon type="info-circle" style={{ color: "#108ee9" }} />,
    //   className: "server-worker-notify"
    // });
    registration.waiting.postMessage({ type: "SKIP_WAITING" });

    setTimeout(() => {
      window.location.reload();
    }, 3 * 1000);
  }
});

