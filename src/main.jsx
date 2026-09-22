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
    screen === "deviceHome" ? "ANDROID HOME" :
    screen === "files" ? "FILES" :
    screen === "contextLost" ? "CONTEXT GAP" :
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
            What happens when you leave an interrupted task to do something
            else — and return without remembering what you were doing next?
          </p>

          <div className="flow">
            {["WORK", "SWITCH", "CONTEXT GAP", "RECOVER"].map((x, i) => (
              <React.Fragment key={x}>
                <div className={"flow-step " + (i === 0 ? "active" : "")}>
                  {x}
                </div>
                {i < 3 && <span className="arrow">→</span>}
              </React.Fragment>
            ))}
          </div>

          <div className="note">
            <strong>Prototype scope:</strong>{" "}
            controlled scholarship application + simulated Android app
            switching. The demo illustrates task-context recovery, not
            universal Android OS-level recovery.
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
            {screen === "files" && <Files go={go} />}
            {screen === "contextLost" && <ContextGap go={go} />}
            {screen === "recovery" && <Recovery go={go} />}
            {screen === "resumed" && <Resumed go={go} />}

            <PhoneNav screen={screen} go={go} />

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


/* ---------------- WORKING TASK ---------------- */

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

        <div className="score">
          7/9
        </div>

      </div>

      <div className="form-list">

        {fields.slice(0, 7).map(([k, v]) => (

          <div
            className="field done"
            key={k}
          >
            <span>{k}</span>
            <b>{v}</b>
            <i>✓</i>
          </div>

        ))}

      </div>

      <div className="next-box">

        <span>NEXT ACTION</span>

        <b>
          Upload certificate
        </b>

        <small className="intent-line">
          Intent: find certificate from Files
        </small>

      </div>

      <button
        className="primary wide switch-button"
        onClick={() => go("deviceHome")}
      >
        SWITCH TO ANOTHER APP
      </button>

      <p className="tiny">
        The user needs to leave the form temporarily to find the certificate.
      </p>

    </div>
  );
}


/* ---------------- ANDROID HOME ---------------- */

function DeviceHome({ go }) {

  return (
    <div className="phone-screen android-home">

      <div className="android-time">
        9:41
      </div>

      <div className="home-message">
        <b>Working context is being preserved</b>
        <span>
          You're temporarily doing something else.
        </span>
      </div>

      <div className="app-grid">

        <button onClick={() => go("files")}>
          <div className="app-icon files-icon">📁</div>
          <span>Files</span>
        </button>

        <button>
          <div className="app-icon browser-icon">🌐</div>
          <span>Browser</span>
        </button>

        <button>
          <div className="app-icon mail-icon">✉</div>
          <span>Mail</span>
        </button>

        <button>
          <div className="app-icon docs-icon">▤</div>
          <span>Documents</span>
        </button>

      </div>

      <div className="home-hint">
        Find your certificate
      </div>

    </div>
  );
}


/* ---------------- FILES APP ---------------- */

function Files({ go }) {

  return (
    <div className="phone-screen files-screen">

      <div className="files-header">

        <div
          className="back"
          onClick={() => go("deviceHome")}
        >
          ‹
        </div>

        <div>
          <small>FILES</small>
          <h2>Recent files</h2>
        </div>

      </div>

      <div className="search-box">
        🔍 Search files
      </div>

      <div className="file-item">

        <div className="pdf-icon">
          PDF
        </div>

        <div>
          <b>Academic_Certificate.pdf</b>
          <span>2.4 MB • Documents</span>
        </div>

      </div>

      <div className="file-item">

        <div className="pdf-icon">
          PDF
        </div>

        <div>
          <b>Semester_Marksheet.pdf</b>
          <span>1.8 MB • Documents</span>
        </div>

      </div>

      <div className="file-found">
        ✓ Certificate found
        <small>
          Now return to the scholarship application.
        </small>
      </div>

      <button
        className="primary wide"
        onClick={() => go("contextLost")}
      >
        RETURN TO SCHOLARSHIP
      </button>

    </div>
  );
}


/* ---------------- CONTEXT GAP ---------------- */

function ContextGap({ go }) {

  return (
    <div className="phone-screen context-gap">

      <div className="gap-icon">
        ?
      </div>

      <div className="gap-label">
        SCHOLARSHIP APPLICATION
      </div>

      <h2>
        You're back.
      </h2>

      <p>
        The form is available, but your broader working context
        isn't visible here.
      </p>

      <div className="lost-card">

        <div>
          <span>WHAT WERE YOU DOING?</span>
          <b>Not available</b>
        </div>

        <div>
          <span>WHAT WAS NEXT?</span>
          <b>Not available</b>
        </div>

        <div>
          <span>WHY DID YOU LEAVE?</span>
          <b>Not available</b>
        </div>

      </div>

      <div className="problem-message">
        <b>The context gap</b>

        <span>
          The application may still contain saved fields,
          but the user's working intention is not represented.
        </span>
      </div>

      <button
        className="primary wide"
        onClick={() => go("recovery")}
      >
        SHOW SESSION CONTINUITY
      </button>

    </div>
  );
}


/* ---------------- RECOVERY ---------------- */

function Recovery({ go }) {

  return (
    <div className="phone-screen">

      <div className="recovery-top">

        <span>
          SESSION RECOVERY
        </span>

        <span className="lock">
          ⌾
        </span>

      </div>

      <div className="ai-badge">
        ✦ AI CONTEXT SUMMARY
      </div>

      <h2 className="recover-title">
        Resume your previous session?
      </h2>

      <p className="recover-sub">
        We recovered the task context needed to continue.
      </p>

      <div className="recovery-card">

        <div className="r-head">

          <div className="session-icon">
            SA
          </div>

          <div>
            <b>Scholarship Application</b>
            <span>
              Last active a moment ago
            </span>
          </div>

        </div>

        <div className="r-row">
          <span>PROGRESS</span>
          <b>7 / 9 fields completed</b>
        </div>

        <div className="r-row">
          <span>INTENT</span>
          <b>Find the certificate</b>
        </div>

        <div className="r-row">
          <span>NEXT ACTION</span>
          <b>Upload certificate</b>
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
          <span>
            Restored from the previous session
          </span>
        </div>

      </div>

      <div className="field current">

        <span>Certificate</span>

        <b>
          Ready for upload
        </b>

        <i>→</i>

      </div>

      <div className="field">

        <span>Declaration</span>

        <b>
          Pending
        </b>

      </div>

      <div className="ai-next">

        <span>
          ✦ AI NEXT ACTION
        </span>

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


/* ---------------- PHONE NAVIGATION ---------------- */

function PhoneNav({ screen, go }) {

  const back = () => {

    if (screen === "task") go("home");
    else if (screen === "deviceHome") go("task");
    else if (screen === "files") go("deviceHome");
    else if (screen === "contextLost") go("files");
    else if (screen === "recovery") go("contextLost");
    else if (screen === "resumed") go("recovery");
    else go("home");

  };

  return (
    <div className="phone-nav">

      <button onClick={back}>
        ‹
      </button>

      <button onClick={() => go("deviceHome")}>
        ●
      </button>

      <button
        onClick={() => {
          if (
            screen === "files" ||
            screen === "deviceHome"
          ) {
            go("task");
          } else {
            go("home");
          }
        }}
      >
        ▢
      </button>

    </div>
  );
}


createRoot(
  document.getElementById("root")
).render(<App />);