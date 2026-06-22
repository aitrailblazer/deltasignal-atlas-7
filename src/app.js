import { LitElement, css, html } from "lit";

const changelogEntries = [
  {
    date: "2026-06-22",
    title: "ATLAS Codex link promoted",
    body: "Added a stronger direct CTA to the public ATLAS Codex page in both the hero flow and the README so visitors can jump straight into the live public surface.",
  },
  {
    date: "2026-06-22",
    title: "Lit bundle shipped for GitHub Pages",
    body: "Replaced the fragile external module import with a bundled local Lit app so the public page renders reliably on GitHub Pages.",
  },
  {
    date: "2026-06-22",
    title: "Join instructions made explicit",
    body: "Promoted the membership-to-GitHub flow into a clearer three-step path for both new and existing Alpha members.",
  },
  {
    date: "2026-06-22",
    title: "Borrowed ATLAS quick-link patterns",
    body: "Added the agent-surface quick links and a contents panel so the public page feels closer to the ATLAS Codex front-page navigation style.",
  },
  {
    date: "2026-06-22",
    title: "Public landing page refreshed",
    body: "Borrowed the stronger ATLAS Codex visual direction for the hero, message hierarchy, and CTA framing. Added a public changelog section and file.",
  },
  {
    date: "2026-06-22",
    title: "Private GitHub access path clarified",
    body: "Documented the exact join, invite, and acceptance flow for getting into the private ATLAS-7 repository.",
  },
];

class AtlasSevenPublic extends LitElement {
  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
      color: #fff6ee;
    }

    * {
      box-sizing: border-box;
    }

    a {
      color: inherit;
    }

    main {
      width: min(1120px, calc(100vw - 32px));
      margin: 0 auto;
      padding: 20px 0 56px;
    }

    .hero {
      position: relative;
      overflow: hidden;
      border: 1px solid rgba(255, 154, 26, 0.24);
      border-radius: 28px;
      background:
        linear-gradient(90deg, rgba(5, 5, 5, 0.98) 0%, rgba(5, 5, 5, 0.88) 44%, rgba(5, 5, 5, 0.52) 76%, rgba(5, 5, 5, 0.2) 100%),
        linear-gradient(180deg, rgba(5, 5, 5, 0.16) 0%, rgba(5, 5, 5, 0.72) 100%),
        url("./cover.png") center right / cover no-repeat,
        #050505;
      box-shadow:
        0 24px 80px rgba(0, 0, 0, 0.42),
        inset 0 1px 0 rgba(255, 255, 255, 0.04);
    }

    .hero::before {
      content: "";
      position: absolute;
      inset: 0;
      background:
        linear-gradient(rgba(255, 154, 26, 0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(227, 0, 85, 0.03) 1px, transparent 1px);
      background-size: 44px 44px;
      mask-image: linear-gradient(to bottom, #000, transparent 80%);
      pointer-events: none;
    }

    .hero::after {
      content: "";
      position: absolute;
      inset: 0;
      background:
        radial-gradient(circle at 74% 28%, rgba(255, 154, 26, 0.18), transparent 15rem),
        radial-gradient(circle at 90% 72%, rgba(227, 0, 85, 0.14), transparent 16rem);
      pointer-events: none;
    }

    .hero-inner {
      position: relative;
      z-index: 1;
      padding: 24px 24px 28px;
    }

    .hero-topline {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      margin-bottom: 28px;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 14px;
    }

    .brand-mark {
      width: 58px;
      height: 58px;
      border-radius: 50%;
      border: 1px solid rgba(255, 154, 26, 0.58);
      background:
        radial-gradient(circle at 30% 30%, rgba(255, 154, 26, 0.84), transparent 34%),
        radial-gradient(circle at 68% 68%, rgba(227, 0, 85, 0.7), transparent 42%),
        #0c0908;
      box-shadow:
        0 0 34px rgba(255, 154, 26, 0.18),
        0 0 68px rgba(227, 0, 85, 0.12);
    }

    .brand-copy {
      display: grid;
      gap: 2px;
    }

    .brand-name,
    h1,
    h2,
    h3 {
      font-family: "Space Grotesk", "Inter", sans-serif;
    }

    .brand-name {
      font-size: 18px;
      font-weight: 700;
      letter-spacing: 0.01em;
    }

    .brand-sub {
      color: #cbb9ae;
      font-size: 13px;
    }

    .hero-link-row {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .pill-link,
    .cta {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 42px;
      border-radius: 999px;
      border: 1px solid rgba(255, 154, 26, 0.28);
      padding: 0 16px;
      text-decoration: none;
      font-size: 14px;
      font-weight: 700;
    }

    .pill-link {
      color: #ffd9b0;
      background: rgba(17, 16, 15, 0.58);
    }

    .hero-layout {
      display: grid;
      grid-template-columns: minmax(0, 1.1fr) minmax(290px, 0.9fr);
      gap: 18px;
      align-items: end;
    }

    .eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 9px 14px;
      border-radius: 999px;
      border: 1px solid rgba(255, 154, 26, 0.34);
      color: #ffd4a3;
      background: linear-gradient(90deg, rgba(255, 154, 26, 0.14), rgba(227, 0, 85, 0.14));
      font-size: 13px;
      font-weight: 800;
      letter-spacing: 0.03em;
      text-transform: uppercase;
    }

    h1 {
      margin: 16px 0 14px;
      font-size: clamp(48px, 8vw, 86px);
      line-height: 0.92;
      letter-spacing: -0.05em;
      background: linear-gradient(90deg, #ff9a1a, #ff5f2e, #e30055);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .tagline {
      max-width: 760px;
      margin: 0;
      color: #f1ded3;
      font-size: clamp(18px, 2vw, 22px);
    }

    .hero-copy p {
      max-width: 700px;
      color: #cbb9ae;
      margin: 14px 0 0;
      font-size: 16px;
    }

    .cta-row {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 22px;
    }

    .join-strip {
      display: grid;
      gap: 10px;
      margin-top: 18px;
      padding: 16px 18px;
      border: 1px solid rgba(255, 154, 26, 0.24);
      border-radius: 18px;
      background: rgba(17, 16, 15, 0.64);
    }

    .join-strip strong {
      color: #ffd7af;
      font-size: 15px;
    }

    .join-strip span {
      color: #d7c7bc;
      font-size: 14px;
    }

    .agent-links {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin: 18px 0 0;
    }

    .agent-links a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 38px;
      border: 1px solid rgba(255, 154, 26, 0.34);
      border-radius: 999px;
      padding: 0 14px;
      color: #ffddb8;
      background: rgba(17, 16, 15, 0.54);
      font-size: 13px;
      font-weight: 800;
      text-decoration: none;
    }

    .agent-links a:hover,
    .pill-link:hover,
    .cta-secondary:hover,
    .toc-links a:hover {
      border-color: rgba(255, 154, 26, 0.72);
      background: rgba(255, 154, 26, 0.12);
    }

    .toc-panel {
      margin-top: 18px;
      border: 1px solid rgba(255, 154, 26, 0.22);
      border-radius: 22px;
      padding: 18px;
      background: rgba(17, 16, 15, 0.66);
    }

    .toc-title {
      color: #ffd1a3;
      font-family: "Space Grotesk", "Inter", sans-serif;
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .toc-links {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 14px;
    }

    .toc-links a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 40px;
      border: 1px solid rgba(255, 154, 26, 0.22);
      border-radius: 999px;
      padding: 0 14px;
      color: #f7e1cb;
      background: rgba(255, 255, 255, 0.03);
      font-size: 13px;
      font-weight: 700;
      text-decoration: none;
    }

    .cta-primary {
      color: #120d0a;
      background: linear-gradient(90deg, #ff9a1a, #ff5f2e);
      border-color: rgba(255, 154, 26, 0.7);
    }

    .hero-panel {
      border: 1px solid rgba(255, 154, 26, 0.22);
      border-radius: 22px;
      padding: 18px;
      background: rgba(17, 16, 15, 0.72);
      backdrop-filter: blur(12px);
    }

    .panel-label {
      color: #ffcc9d;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      font-size: 11px;
      font-weight: 800;
    }

    .join-steps {
      display: grid;
      gap: 12px;
      margin-top: 14px;
    }

    .join-step {
      display: grid;
      grid-template-columns: 34px minmax(0, 1fr);
      gap: 12px;
      align-items: start;
      padding-top: 12px;
      border-top: 1px solid rgba(255, 154, 26, 0.16);
    }

    .join-step:first-child,
    .entry:first-child {
      border-top: 0;
      padding-top: 0;
    }

    .join-step-number {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 34px;
      height: 34px;
      border-radius: 999px;
      border: 1px solid rgba(255, 154, 26, 0.4);
      color: #120d0a;
      background: linear-gradient(90deg, #ff9a1a, #ff5f2e);
      font-size: 14px;
      font-weight: 800;
    }

    .join-step strong {
      display: block;
      margin-bottom: 4px;
      font-size: 15px;
    }

    .join-step span {
      color: #cbb9ae;
      font-size: 14px;
    }

    .member-note,
    .footer-note {
      margin-top: 14px;
      color: #ad9a8e;
      font-size: 13px;
    }

    .section-grid {
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      gap: 18px;
      margin-top: 18px;
    }

    .stack {
      display: grid;
      gap: 18px;
    }

    .card,
    .panel {
      border: 1px solid rgba(255, 154, 26, 0.18);
      border-radius: 24px;
      padding: 22px;
      background:
        linear-gradient(180deg, rgba(24, 17, 15, 0.9), rgba(17, 16, 15, 0.82));
      box-shadow: 0 18px 54px rgba(0, 0, 0, 0.22);
    }

    .card-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 16px;
      margin-top: 18px;
    }

    .label {
      color: #ffcc9d;
      text-transform: uppercase;
      letter-spacing: 0.14em;
      font-size: 11px;
      font-weight: 800;
    }

    h2 {
      margin: 12px 0;
      font-size: 30px;
      line-height: 1;
      letter-spacing: -0.04em;
    }

    h3 {
      margin: 10px 0 8px;
      font-size: 22px;
      line-height: 1.05;
      letter-spacing: -0.03em;
    }

    p,
    li {
      color: #d7c7bc;
    }

    ul {
      margin: 12px 0 0;
      padding-left: 18px;
    }

    .list-tight li + li {
      margin-top: 8px;
    }

    .timeline {
      display: grid;
      gap: 14px;
      margin-top: 16px;
    }

    .entry {
      border-top: 1px solid rgba(255, 154, 26, 0.16);
      padding-top: 14px;
    }

    .entry-date {
      color: #ff9a1a;
      font-size: 13px;
      font-weight: 800;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .entry h3 {
      margin-top: 8px;
    }

    .entry p {
      margin: 0;
      font-size: 15px;
    }

    @media (max-width: 980px) {
      .hero-layout,
      .section-grid,
      .card-grid {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 760px) {
      main {
        width: min(100vw - 20px, 1120px);
        padding-top: 10px;
      }

      .hero-inner,
      .card,
      .panel {
        padding: 18px;
      }

      .hero-topline {
        align-items: flex-start;
        flex-direction: column;
      }

      .brand-mark {
        width: 48px;
        height: 48px;
      }
    }
  `;

  renderEntry(entry) {
    return html`
      <article class="entry">
        <div class="entry-date">${entry.date}</div>
        <h3>${entry.title}</h3>
        <p>${entry.body}</p>
      </article>
    `;
  }

  render() {
    return html`
      <main>
        <section class="hero">
          <div class="hero-inner">
            <div class="hero-topline">
              <div class="brand">
                <div class="brand-mark" aria-hidden="true"></div>
                <div class="brand-copy">
                  <div class="brand-name">ATLAS-7</div>
                  <div class="brand-sub">Private DeltaSignal research layer</div>
                </div>
              </div>

              <div class="hero-link-row">
                <a class="pill-link" href="https://aitrailblazer.github.io/deltasignal-atlas-codex-plugin/" target="_blank" rel="noreferrer">ATLAS Codex Public Page</a>
                <a class="pill-link" href="CHANGELOG.md" target="_blank" rel="noreferrer">Public Changelog</a>
              </div>
            </div>

            <div class="hero-layout">
              <div class="hero-copy">
                <div class="eyebrow">Private repo. Public front door.</div>
                <h1>ATLAS-7 for serious operators, not tourists.</h1>
                <p class="tagline">The private repo behind DeltaSignal.</p>
                <p>
                  ATLAS-7 is where the deeper prompting systems, playbooks, MCP workflows, and operator docs live.
                  This public page is the teaser surface: enough to show the shape of the system, not the private internals.
                </p>
                <p>
                  If you want the actual operating materials, the path is public page to private GitHub access through DeltaSignal Alpha.
                </p>
                <div class="cta-row">
                  <a class="cta cta-primary" href="https://deltasignal.substack.com" target="_blank" rel="noreferrer">Join DeltaSignal Alpha</a>
                  <a class="cta cta-secondary" href="https://aitrailblazer.github.io/deltasignal-atlas-codex-plugin/" target="_blank" rel="noreferrer">Try ATLAS Codex Public Page</a>
                  <a class="cta cta-secondary" href="https://github.com/aitrailblazer/ATLAS-7" target="_blank" rel="noreferrer">Private Repo Destination</a>
                </div>
                <div class="join-strip">
                  <strong>How to join</strong>
                  <span>1. Join DeltaSignal Alpha. 2. Reply with your GitHub username or GitHub account email. 3. Accept the invite to the private ATLAS-7 repo.</span>
                </div>
                <div class="agent-links">
                  <a href="https://aitrailblazer.github.io/deltasignal-atlas-codex-plugin/" target="_blank" rel="noreferrer">Claude Code</a>
                  <a href="https://aitrailblazer.github.io/deltasignal-atlas-codex-plugin/" target="_blank" rel="noreferrer">Codex</a>
                  <a href="https://aitrailblazer.github.io/deltasignal-atlas-codex-plugin/" target="_blank" rel="noreferrer">Cursor</a>
                  <a href="https://aitrailblazer.github.io/deltasignal-atlas-codex-plugin/" target="_blank" rel="noreferrer">Grok Build</a>
                </div>
              </div>

              <aside class="hero-panel">
                <div class="panel-label">How To Get Access</div>
                <div class="join-steps">
                  <div class="join-step">
                    <div class="join-step-number">1</div>
                    <div>
                      <strong>Join DeltaSignal Alpha</strong>
                      <span>Start with the membership path. That is the gate for private repo access.</span>
                    </div>
                  </div>
                  <div class="join-step">
                    <div class="join-step-number">2</div>
                    <div>
                      <strong>Send your GitHub details</strong>
                      <span>Reply with your GitHub username or the email tied to your GitHub account so the invite lands in the right place.</span>
                    </div>
                  </div>
                  <div class="join-step">
                    <div class="join-step-number">3</div>
                    <div>
                      <strong>Accept the invite</strong>
                      <span>Once the invitation arrives, accept it and the private ATLAS-7 repo unlocks on GitHub.</span>
                    </div>
                  </div>
                </div>
                <div class="member-note">Already an Alpha member? Skip straight to step 2 and send your GitHub username.</div>
              </aside>
            </div>

            <div class="toc-panel">
              <div class="toc-title">Contents</div>
              <div class="toc-links">
                <a href="#what-you-get">What You Get</a>
                <a href="#access-flow">Access Flow</a>
                <a href="#private-areas">Private Areas</a>
                <a href="#public-changelog">Public Changelog</a>
              </div>
            </div>
          </div>
        </section>

        <section id="what-you-get" class="card-grid">
          <article class="card">
            <div class="label">What You Get</div>
            <h3>Private operating material</h3>
            <p>
              The private repo is built for repeatability, not browsing: prompts, frameworks, playbooks, and real workflow structure.
            </p>
            <ul class="list-tight">
              <li>Prompt libraries and structured frameworks</li>
              <li>Playbooks with copy-ready prompts and diagrams</li>
              <li>MCP-specific usage patterns and examples</li>
            </ul>
          </article>

          <article class="card">
            <div class="label">Who It Is For</div>
            <h3>Alpha-level users</h3>
            <p>
              Investors, analysts, founders, and advanced AI-tool operators who care about process quality, not novelty for its own sake.
            </p>
            <ul class="list-tight">
              <li>Professional investors</li>
              <li>Independent analysts</li>
              <li>Builders who already work inside modern agent tooling</li>
            </ul>
          </article>

          <article class="card">
            <div class="label">Access Path</div>
            <h3>Public to private</h3>
            <p>
              The public repo explains the offer and shows recent updates. The private repo is granted after membership confirmation.
            </p>
            <ul class="list-tight">
              <li>Join DeltaSignal Alpha</li>
              <li>Send your GitHub username or account email</li>
              <li>Accept the invite and enter the private repo</li>
            </ul>
          </article>
        </section>

        <section class="section-grid">
          <div class="stack">
            <section id="access-flow" class="panel">
              <div class="label">Private GitHub Access</div>
              <h2>How the repo unlock works</h2>
              <p>
                The path is simple: membership first, GitHub handoff second, invite acceptance third.
                If you are already an Alpha member, you only need to send your GitHub username or GitHub account email to receive the invite.
              </p>
              <p>
                Want to see the public-facing agent surface first?
                <a href="https://aitrailblazer.github.io/deltasignal-atlas-codex-plugin/" target="_blank" rel="noreferrer">Open the ATLAS Codex public page</a>.
              </p>
              <ul class="list-tight">
                <li>Join the DeltaSignal Alpha membership path.</li>
                <li>Send the GitHub username or email attached to the account that should receive access.</li>
                <li>Receive the GitHub invite for the private repo.</li>
                <li>Accept the invite and open ATLAS-7.</li>
              </ul>
            </section>

            <section id="private-areas" class="panel">
              <div class="label">Current Private Areas</div>
              <h2>What is currently inside</h2>
              <ul class="list-tight">
                <li>PROMPTING for frameworks and repeatable prompt systems</li>
                <li>MCP for operator workflows and examples</li>
                <li>PLAYBOOKS for guided execution loops and prompt packages</li>
                <li>RESOURCES and SUPPORT for onboarding and member docs</li>
              </ul>
            </section>
          </div>

          <section id="public-changelog" class="panel">
            <div class="label">Public Changelog</div>
            <h2>Recent changes</h2>
            <div class="timeline">
              ${changelogEntries.map((entry) => this.renderEntry(entry))}
            </div>
            <div class="footer-note">
              Full public changelog:
              <a href="CHANGELOG.md" target="_blank" rel="noreferrer">CHANGELOG.md</a>
            </div>
          </section>
        </section>
      </main>
    `;
  }
}

customElements.define("atlas-seven-public", AtlasSevenPublic);
