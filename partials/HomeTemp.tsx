import React from "react";

export default function HomeTemp() {
  
  return (
    <section id="home" className="">
        {/* <p><Image className="styles.logo" width={200} height={100} src="/img/logo.png" /></p> */}
        <p><img className="styles.logo" src="/img/logo.png" /></p>
        <h1>Welcome to TMT Labs!</h1>
        <p>🧨 ⚗️ | 👨🏽‍🚒 👩🏽‍🎨 👩🏼‍🎤</p>
        <p>More information coming soon.</p>
        <p>
          <a href="https://twitter.com/tmtlabs">
            <img className="styles.socialIcon" src="https://abs.twimg.com/favicons/twitter.2.ico" /> @tmtlabs
          </a>
        </p>
        <p>
          <a href="https://tmtlabs.medium.com/">
            <img className="styles.socialIcon" src="/img/medium.png" /> @tmtlabs (medium)
          </a>
        </p>
    </section>
  );
}
