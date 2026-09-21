import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const fields = [
  ["Full name", "Teja Kumar"],
  ["Date of birth", "12 May 2005"],
  ["College", "RVR & JC College of Engineering"],
  ["Course", "B.Tech — Computer Science"],
  ["Email", "teja@example.com"],
  ["Phone", "+91 98••••••21"],
  ["Guardian name", "Rudramachari"],
  ["Certificate", "Not uploaded"],
  ["Declaration", "Pending"]
];

function App() {
  const [screen, setScreen] = useState("home");

  const go = (s) => {
    setScreen(s);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const label =
    screen === "home" ? "SESSION HOME" :
    screen === "task" ? "WORKING" :
    screen === "deviceHome" ? "APP SWITCHING" :
    screen === "browser" ? "OTHER APP" :
    screen === "interrupt" ? "INTERRUPTION" :
    screen === "recovery" ? "RECOVERY" :
    "RESUMED";

  return (
    <div className="app-shell">

      <header className="topbar">
        <div className="brand">
          <span>Session Continuity</span>
        </div>
        <div className="demo-pill">INTERACTIVE MVP</div>
      </header>

      <main className="layout">

        <section className="hero-copy">

          <div className="eyebrow">
            PRODUCTIVITY · PHONE-FIRST AI
          </div>

          <h1>
            Never lose your<br />
            <span>working context.</span>
          </h1>

          <p className="lead">
            A concept prototype showing how an AI-powered session layer can help a user
            understand and resume an interrupted mobile task.
          </p>

          <div className="flow">
            {["WORK", "SWITCH", "RECOVER", "RESUME"].map((x, i) => (
              <React.Fragment key={x}>
                <div className={"flow-step " + (i === 0 ? "active" : "")}>
                  {x}
                </div>
                {i < 3 && <span className="arrow">→</span>}
              </React.Fragment>
            ))}
          </div>

          <div className="note">
            <strong>Prototype scope:</strong> controlled demo application + simulated
            app switching. This demonstrates the user experience, not universal
            Android OS-level recovery.
          </div>

        </section>

        <section className="phone-wrap">

          <div className="phone">

            <div className="phone-notch"></div>

            <div className="statusbar">
              <span>9:41</span>
              <span>● ◔ 82%</span>
            </div>

            {screen === "home" && <Home go={go} />}
            {screen === "task" && <Task go={go} />}
            {screen === "deviceHome" && <DeviceHome go={go} />}
            {screen === "browser" && <Browser go={go} />}
            {screen === "interrupt" && <Interrupt go={go} />}
            {screen === "recovery" && <Recovery go={go} />}
            {screen === "resumed" && <Resumed go={go} />}

            <div className="phone-nav">

              <button onClick={() => go("task")} aria-label="Back">
                ‹
              </button>

              <button
                className="nav-dot"
                onClick={() => go("deviceHome")}
                aria-label="Home"
              >
              </button>

              <button
                onClick={() => go("deviceHome")}
                aria-label="Recent apps"
              >
                ▢
              </button>

            </div>

          </div>

          <div className="screen-label">
            <span className="dot"></span>
            {label}
          </div>

        </section>

      </main>

      <footer>
        <span>SESSION CONTINUITY</span>
        <span>Proof-of-concept • AI context recovery</span>
      </footer>

    </div>
  );
}


/* ---------------- HOME ---------------- */

function Home({ go }) {
  return (
    <div className="phone-screen">

      <div className="app-title">
        <div>
          <small>SESSION CONTINUITY</small>
          <h2>Your active work</h2>
        </div>

        <div className="brain">✦</div>
      </div>

      <div className="session-card active-card">

        <div className="session-icon">SA</div>

        <div className="session-main">
          <b>Scholarship Application</b>
          <span>7 / 9 fields completed</span>

          <div className="progress">
            <i style={{ width: "78%" }}></i>
          </div>
        </div>

        <button onClick={() => go("task")}>
          Continue
        </button>

      </div>

      <div className="mini-insight">
        <span className="insight-icon">✦</span>

        <div>
          <b>Context ready</b>
          <p>Next action: Upload certificate</p>
        </div>
      </div>

      <div className="section-title">
        How it helps
      </div>

      <div className="three-mini">
        <div>
          <b>Context</b>
          <span>What you were doing</span>
        </div>

        <div>
          <b>Progress</b>
          <span>What you finished</span>
        </div>

        <div>
          <b>Next</b>
          <span>What to do next</span>
        </div>
      </div>

      <button
        className="primary wide"
        onClick={() => go("task")}
      >
        OPEN SESSION
      </button>

    </div>
  );
}


/* ---------------- SCHOLARSHIP TASK ---------------- */

function Task({ go }) {

  return (
    <div className="phone-screen">

      <div
        className="back"
        onClick={() => go("home")}
      >
        ‹ <span>Session</span>
      </div>

      <div className="app-title">

        <div>
          <small>SCHOLARSHIP APPLICATION</small>
          <h2>Personal details</h2>
        </div>

        <div className="score">7/9</div>

      </div>

      <div className="form-list">

        {fields.slice(0, 7).map(([k, v]) => (

          <div className="field done" key={k}>

            <span>{k}</span>

            <b>{v}</b>

            <i>✓</i>

          </div>

        ))}

      </div>

      <div className="next-box">

        <span>NEXT ACTION</span>

        <b>Upload certificate</b>

      </div>

      <button
        className="primary wide"
        onClick={() => go("deviceHome")}
      >
        SWITCH TO ANOTHER APP
      </button>

      <p className="tiny">
        Demo: the user leaves the scholarship application to do something else.
      </p>

    </div>
  );
}


/* ---------------- ANDROID HOME ---------------- */

function DeviceHome({ go }) {

  return (
    <div className="phone-screen device-home">

      <div className="switch-title">
        <small>ANDROID HOME</small>

        <h2>You switched away</h2>

        <p>
          The scholarship application is no longer in the foreground.
        </p>
      </div>

      <div className="app-grid">

        <button
          className="fake-app"
          onClick={() => go("browser")}
        >
          <span>🌐</span>
          <b>Browser</b>
        </button>

        <button
          className="fake-app"
          onClick={() => go("browser")}
        >
          <span>📁</span>
          <b>Files</b>
        </button>

        <button
          className="fake-app"
          onClick={() => go("browser")}
        >
          <span>✉️</span>
          <b>Mail</b>
        </button>

        <button
          className="fake-app"
          onClick={() => go("browser")}
        >
          <span>📄</span>
          <b>Documents</b>
        </button>

      </div>

      <div className="switch-message">
        <span>↗</span>
        <div>
          <b>Working context is being preserved</b>
          <small>
            Task • progress • next action
          </small>
        </div>
      </div>

      <button
        className="secondary wide"
        onClick={() => go("browser")}
      >
        OPEN BROWSER
      </button>

    </div>
  );
}


/* ---------------- OTHER APP ---------------- */

function Browser({ go }) {

  return (
    <div className="phone-screen">

      <div className="browser-top">

        <span>‹</span>

        <div className="browser-address">
          example.com
        </div>

      </div>

      <div className="browser-content">

        <div className="browser-icon">
          🌐
        </div>

        <h2>Browser</h2>

        <p>
          The user is temporarily doing something else.
        </p>

        <div className="browser-card">

          <span>Meanwhile...</span>

          <b>
            Scholarship Application
          </b>

          <small>
            7/9 fields completed
          </small>

        </div>

      </div>

      <div className="return-card">

        <span>SESSION CONTINUITY</span>

        <b>
          Ready to continue your previous task?
        </b>

        <button
          className="primary wide"
          onClick={() => go("interrupt")}
        >
          RETURN TO SESSION
        </button>

      </div>

    </div>
  );
}


/* ---------------- INTERRUPTION ---------------- */

function Interrupt({ go }) {

  return (
    <div className="phone-screen centered">

      <div className="warning-icon">
        ↗
      </div>

      <small>
        SESSION CONTINUITY
      </small>

      <h2>
        Session interrupted
      </h2>

      <p>
        You switched away from the scholarship application.
        Your working context was preserved so you can continue.
      </p>

      <div className="save-card">

        <span>RECOVERABLE CONTEXT</span>

        <div className="checkrow">
          ✓ Task identified
        </div>

        <div className="checkrow">
          ✓ 7 / 9 fields completed
        </div>

        <div className="checkrow">
          ✓ Next action identified
        </div>

        <div className="checkrow">
          ✓ Sensitive fields filtered
        </div>

      </div>

      <button
        className="primary wide"
        onClick={() => go("recovery")}
      >
        RECOVER SESSION
      </button>

    </div>
  );
}


/* ---------------- RECOVERY ---------------- */

function Recovery({ go }) {

  return (
    <div className="phone-screen">

      <div className="recovery-top">

        <span>SESSION RECOVERY</span>

        <span className="lock">⌾</span>

      </div>

      <div className="ai-badge">
        ✦ AI CONTEXT SUMMARY
      </div>

      <h2 className="recover-title">
        Resume your previous session?
      </h2>

      <p className="recover-sub">
        We found enough recoverable context to help you continue.
      </p>

      <div className="recovery-card">

        <div className="r-head">

          <div className="session-icon">
            SA
          </div>

          <div>
            <b>Scholarship Application</b>
            <span>Last active a moment ago</span>
          </div>

        </div>

        <div className="r-row">
          <span>PROGRESS</span>
          <b>7 / 9 fields completed</b>
        </div>

        <div className="r-row">
          <span>NEXT ACTION</span>
          <b>Upload certificate</b>
        </div>

        <div className="r-row">
          <span>CONTEXT</span>
          <b>Personal + academic details</b>
        </div>

      </div>

      <div className="privacy-line">
        ⌾ Sensitive credentials were excluded from recovery.
      </div>

      <button
        className="primary wide"
        onClick={() => go("resumed")}
      >
        RESUME SESSION
      </button>

      <button
        className="secondary wide"
        onClick={() => go("home")}
      >
        START FRESH
      </button>

    </div>
  );
}


/* ---------------- RESUMED ---------------- */

function Resumed({ go }) {

  return (
    <div className="phone-screen">

      <div className="success-banner">

        <span>✓</span>

        <div>
          <b>Session restored</b>
          <small>
            Your working context is back.
          </small>
        </div>

      </div>

      <div
        className="back"
        onClick={() => go("recovery")}
      >
        ‹ <span>Recovery</span>
      </div>

      <div className="app-title">

        <div>
          <small>SCHOLARSHIP APPLICATION</small>
          <h2>Continue where you left off</h2>
        </div>

      </div>

      <div className="resume-card">

        <div className="resume-check">
          ✓
        </div>

        <div>
          <b>7 of 9 fields</b>
          <span>Restored from the previous session</span>
        </div>

      </div>

      <div className="field current">

        <span>Certificate</span>

        <b>Ready for upload</b>

        <i>→</i>

      </div>

      <div className="field">

        <span>Declaration</span>

        <b>Pending</b>

      </div>

      <div className="ai-next">

        <span>✦ AI NEXT ACTION</span>

        <b>
          Upload your certificate, then review the declaration.
        </b>

      </div>

      <button
        className="primary wide"
        onClick={() => go("home")}
      >
        TASK COMPLETE →
      </button>

    </div>
  );
}


createRoot(
  document.getElementById("root")
).render(<App />);