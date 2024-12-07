import { useRef } from "react";
import { scaleValue } from "./utils/scale.jsx";

import "./index.css"

const maxAdditionalSize = 5; 

function App() {
  const dockRef = useRef(null);

  const handleAppHover = (ev) => {
    if (!dockRef.current) return;

    const mousePosition = ev.clientX;
    const iconPositionLeft = ev.currentTarget.getBoundingClientRect().left;
    const iconWidth = ev.currentTarget.getBoundingClientRect().width;

    const cursorDistance = (mousePosition - iconPositionLeft) / iconWidth;
    const offsetPixels = scaleValue(
      cursorDistance,
      [0, 1],
      [maxAdditionalSize * -1, maxAdditionalSize]
    );

    dockRef.current.style.setProperty(
      "--dock-offset-left",
      `${offsetPixels * -1}px`
    );

    dockRef.current.style.setProperty(
      "--dock-offset-right",
      `${offsetPixels}px`
    );
  };

  return (
    <div className="page">
      <nav ref={dockRef} className="dock">
        <ul>
          <li className="app" onMouseMove={handleAppHover}>
            <a>
              <img src="./icons/arc.png" />
              <span className="more-info">Arc Browser</span>
            </a>
          </li>
          <li className="app" onMouseMove={handleAppHover}>
            <a>
              <img src="./icons/1password.png" />
              <span className="more-info">1Password</span>
            </a>
          </li>
          <li className="app" onMouseMove={handleAppHover}>
            <a>
              <img src="./icons/calendar.png" />
              <span className="more-info">Calendar</span>
            </a>
          </li>
          <li className="app" onMouseMove={handleAppHover}>
            <a>
              <img src="./icons/email.png" />
              <span className="more-info">Mail</span>
            </a>
          </li>
          <li className="app" onMouseMove={handleAppHover}>
            <a>
              <img src="./icons/signal.png" />
              <span className="more-info">Signal</span>
            </a>
          </li>
          <li className="app" onMouseMove={handleAppHover}>
            <a>
              <img src="./icons/slack.png" />
              <span className="more-info">Slack</span>
            </a>
          </li>
          <li className="app" onMouseMove={handleAppHover}>
            <a>
              <img src="./icons/spotify.png" />
              <span className="more-info">Spotify</span>
            </a>
          </li>
          <li className="app" onMouseMove={handleAppHover}>
            <a>
              <img src="./icons/vscode.png" />
              <span className="more-info">VsCode</span>
            </a>
          </li>
          <li className="app" onMouseMove={handleAppHover}>
            <a>
              <img src="./icons/warp.png" />
              <span className="more-info">Warp</span>
            </a>
          </li>
          <li className="app" onMouseMove={handleAppHover}>
            <a href="github.com/lCubosl" target="_blank">
              <img src="./icons/github.png" />
              <span className="more-info">GitHub</span>
            </a>
          </li>
          <li className="app" onMouseMove={handleAppHover}>
            <a>
              <img src="./icons/youtube.png" />
              <span className="more-info">YouTube</span>
            </a>
          </li>
        </ul>
      </nav>
      
      <div className="mobile-message">
        <p>
          This application is not supporteed on Phone. 
          <br />
          It&apos;s functionality is meant for computer only
        </p>
      </div>
    </div>
  );
}

export default App;
