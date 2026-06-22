import { LitElement, css, html } from "lit";

const changelogEntries = [
  {
    date: "2026-06-22",
    title: "Playbook 001 promoted as flagship invention",
    body: "Reframed the public page around Playbook 001, the spreadsheet-first tracker, and the Feature QA Loop so visitors immediately see why these are the core operating inventions behind the private repo.",
  },
  {
    date: "2026-06-22",
    title: "Alpha CTA retargeted",
    body: "Changed the public repo's main Alpha join path to the dedicated Alpha Circle note so visitors land on the exact how-to-join page instead of the broader Substack home page.",
  },
  {
    date: "2026-06-22",
    title: "Subscribe path restored",
    body: "Changed the main Alpha join path to DeltaSignal's actual Substack subscribe page and kept the Alpha Circle note as supporting context.",
  },
  {
    date: "2026-06-22",
    title: "Alpha note restored as primary path",
    body: "Changed the public repo's primary Alpha path back to the exact Alpha Circle note URL provided by the operator and kept the rest of the GitHub-access handoff unchanged.",
  },
  {
    date: "2026-06-22",
    title: "Substack DM path simplified",
    body: "Removed the X DM option from the public access handoff so the GitHub-details step now points to Substack Chat only.",
  },
  {
    date: "2026-06-22",
    title: "Access step wording corrected",
    body: "Reworded the first hero access step so the Alpha Circle note is described as the join guide, not as the membership gateway itself.",
  },
  {
    date: "2026-06-22",
    title: "Alpha Circle surface expanded",
    body: "Added clearer Alpha membership, MCP, referral, and Substack join guidance so the public page explains the whole access path instead of only the repo unlock step.",
  },
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
  {
    date: "2026-06-22",
    title: "Landing page positioning strengthened",
    body: "Rewrote the public page headline, value proposition, who-it's-for copy, and member-benefit sections so the ATLAS-7 offer reads more clearly and more directly.",
  },
  {
    date: "2026-06-22",
    title: "Scarcity framing added",
    body: "Added limited-access messaging, a stronger Alpha CTA, and tighter selective-membership framing to the public landing page.",
  },
];

class AtlasSevenPublic extends LitElement {
  handleTocClick(event) {
    const href = event.currentTarget.getAttribute("href") ?? "";
    if (!href.startsWith("#")) {
      return;
    }

    event.preventDefault();
    const id = href.slice(1);
    const target = this.renderRoot?.querySelector(`#${id}`);
    if (!target) {
      return;
    }

    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
  }

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

    section[id] {
      scroll-margin-top: 24px;
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

    .join-strip ul {
      margin: 0;
      padding-left: 18px;
    }

    .join-strip li {
      color: #d7c7bc;
      font-size: 14px;
    }

    .join-strip li + li {
      margin-top: 8px;
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

    .offer-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 16px;
      margin-top: 16px;
    }

    .offer-card {
      border: 1px solid rgba(255, 154, 26, 0.16);
      border-radius: 18px;
      padding: 16px;
      background: rgba(255, 255, 255, 0.03);
    }

    .offer-card strong {
      display: block;
      margin-bottom: 6px;
      font-size: 15px;
      color: #ffe1c2;
    }

    .offer-card span {
      color: #cbb9ae;
      font-size: 14px;
    }

    .link-cluster {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 16px;
    }

    .link-cluster a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 40px;
      border: 1px solid rgba(255, 154, 26, 0.24);
      border-radius: 999px;
      padding: 0 14px;
      background: rgba(255, 255, 255, 0.03);
      color: #ffe1c2;
      font-size: 13px;
      font-weight: 700;
      text-decoration: none;
    }

    .link-cluster a:hover {
      border-color: rgba(255, 154, 26, 0.72);
      background: rgba(255, 154, 26, 0.12);
    }

    .callout {
      margin-top: 16px;
      border: 1px solid rgba(255, 154, 26, 0.2);
      border-radius: 18px;
      padding: 16px;
      background: linear-gradient(180deg, rgba(255, 154, 26, 0.08), rgba(227, 0, 85, 0.06));
    }

    .callout strong {
      display: block;
      margin-bottom: 6px;
      color: #ffe1c2;
      font-size: 15px;
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
                <div class="eyebrow">Flagship playbook: Agent Ops 001</div>
                <h1>The spreadsheet-first tracker and the QA loop are the core inventions behind ATLAS-7.</h1>
                <p class="tagline">Playbook 001 matters because it forces coding agents into evidence discipline before they touch your product.</p>
                <p>
                  The breakthrough is simple and strict: one canonical spreadsheet, one row per feature, one test plan,
                  one fix, one retest, and one provenance trail for every change an agent makes.
                </p>
                <p>
                  That matters because AI coding agents move faster than product memory. Without the loop, they fix locally,
                  invent intent, and leave behind code no one can actually verify. Playbook 001 is the operating system that stops that.
                </p>
                <div class="cta-row">
                  <a class="cta cta-primary" href="#playbook-001" @click=${this.handleTocClick}>Why Playbook 001 Matters</a>
                  <a class="cta cta-secondary" href="https://substack.com/@deltasignalai/p-179433731" target="_blank" rel="noreferrer">Join Alpha Circle</a>
                  <a class="cta cta-secondary" href="https://aitrailblazer.github.io/deltasignal-atlas-codex-plugin/" target="_blank" rel="noreferrer">Try ATLAS Codex Public Page</a>
                </div>
                <p>
                  <strong>Why this is important:</strong> the spreadsheet gives you one durable memory surface, and the loop gives you one durable decision sequence.
                </p>
                <p>
                  Together they convert agent speed into something founders and operators can still trust.
                </p>
                <div class="join-strip">
                  <strong>What Playbook 001 introduces</strong>
                  <ul>
                    <li>A spreadsheet-first tracker with one canonical row per feature.</li>
                    <li>A no-fix-first QA loop: discovery, user story, test plan, evidence, fix, retest.</li>
                    <li>A provenance rule that ties every change back to behavior, files, commits, and retest proof.</li>
                  </ul>
                </div>
                <div class="agent-links">
                  <a href="https://aitrailblazer.github.io/deltasignal-atlas-codex-plugin/" target="_blank" rel="noreferrer">Claude Code</a>
                  <a href="https://aitrailblazer.github.io/deltasignal-atlas-codex-plugin/" target="_blank" rel="noreferrer">Codex</a>
                  <a href="https://aitrailblazer.github.io/deltasignal-atlas-codex-plugin/" target="_blank" rel="noreferrer">Cursor</a>
                  <a href="https://aitrailblazer.github.io/deltasignal-atlas-codex-plugin/" target="_blank" rel="noreferrer">Grok Build</a>
                </div>
              </div>

              <aside class="hero-panel">
                <div class="panel-label">Why 001 Is The Flagship</div>
                <div class="join-steps">
                  <div class="join-step">
                    <div class="join-step-number">1</div>
                    <div>
                      <strong>The spreadsheet solves agent memory drift</strong>
                      <span>One canonical sheet keeps the product map, expected behavior, actual behavior, failures, fixes, and retests in one place instead of scattered across chat history.</span>
                    </div>
                  </div>
                  <div class="join-step">
                    <div class="join-step-number">2</div>
                    <div>
                      <strong>The loop prevents fake progress</strong>
                      <span>Discovery has to happen before fixes, so the agent cannot patch blindly, claim success, and leave hidden regressions behind.</span>
                    </div>
                  </div>
                  <div class="join-step">
                    <div class="join-step-number">3</div>
                    <div>
                      <strong>The provenance trail makes trust possible</strong>
                      <span>Every fix maps back to a feature row, severity, file set, commit hash, and retest result. That is what turns agent output into auditable operator work.</span>
                    </div>
                  </div>
                </div>
                <div class="member-note">That is why Playbook 001 sits at the front of the private repo: it is the control layer for everything that comes after it.</div>
              </aside>
            </div>

            <div class="toc-panel">
              <div class="toc-title">Contents</div>
              <div class="toc-links">
                <a href="#playbook-001" @click=${this.handleTocClick}>Why Playbook 001 Matters</a>
                <a href="#what-you-get" @click=${this.handleTocClick}>What You Get</a>
                <a href="#alpha-circle" @click=${this.handleTocClick}>Alpha Circle</a>
                <a href="#referrals" @click=${this.handleTocClick}>Referral System</a>
                <a href="#join-links" @click=${this.handleTocClick}>Join Links</a>
                <a href="#access-flow" @click=${this.handleTocClick}>Access Flow</a>
                <a href="#private-areas" @click=${this.handleTocClick}>Private Areas</a>
                <a href="#public-changelog" @click=${this.handleTocClick}>Public Changelog</a>
              </div>
            </div>
          </div>
        </section>

        <section id="playbook-001" class="section-grid">
          <section class="panel">
            <div class="label">Playbook 001</div>
            <h2>The most important recent operator invention in the repo</h2>
            <p>
              Playbook 001 exists because agent QA breaks down when the agent is allowed to "fix" before it has mapped the product.
              The public site should make that explicit: the spreadsheet-first tracker and the QA loop are not side details. They are the control system.
            </p>
            <div class="offer-grid">
              <div class="offer-card">
                <strong>Spreadsheet-first tracker</strong>
                <span>One canonical sheet keeps one row per feature, expected behavior, actual behavior, severity, files changed, commits, and retest proof.</span>
              </div>
              <div class="offer-card">
                <strong>Feature QA loop</strong>
                <span>Discovery, user story, test plan, evidence, fix, retest. The sequence is the product, because the sequence is what prevents regressions from hiding.</span>
              </div>
              <div class="offer-card">
                <strong>Founder-grade provenance</strong>
                <span>You can see what was tested, what failed, what changed, what passed, and what still needs a product decision before trust is granted.</span>
              </div>
            </div>
          </section>

          <section class="panel">
            <div class="label">Why It Matters</div>
            <h2>Agent speed without a loop becomes unverifiable software</h2>
            <ul class="list-tight">
              <li>Agents move faster than product memory, so they need an external memory surface that survives the session.</li>
              <li>Without a mandatory loop, agents optimize locally, invent intent, and create regressions that sound plausible in chat but fail in the product.</li>
              <li>The spreadsheet makes every feature explicit. The loop makes every change earn trust through evidence instead of confidence.</li>
              <li>This is why 001 sits at the front: it governs how every serious repo audit and fix pass should run.</li>
            </ul>
            <div class="callout">
              <strong>Public thesis, private implementation</strong>
              <span>The public page explains why the tracker and the loop matter. The private repo holds the actual prompt packages, playbooks, and reusable operating assets.</span>
            </div>
          </section>
        </section>

        <section id="what-you-get" class="card-grid">
          <article class="card">
            <div class="label">What Is ATLAS-7</div>
            <h3>Private operating layer</h3>
            <p>
              ATLAS-7 is where the public thesis becomes private operating material: prompts, playbooks, workflows,
              MCP guidance, and the control systems that make agent work repeatable.
            </p>
            <ul class="list-tight">
              <li>Copy-ready prompt packages and structured frameworks</li>
              <li>Playbooks that explain the method and the execution sequence</li>
              <li>MCP workflows, patterns, and operator examples</li>
            </ul>
          </article>

          <article class="card">
            <div class="label">Who It Is For</div>
            <h3>People who go deep</h3>
            <p>
              ATLAS-7 is built for operators who need depth, process, and signal quality instead of generic AI output.
            </p>
            <ul class="list-tight">
              <li>Professional investors and fund managers</li>
              <li>Independent analysts and researchers</li>
              <li>Founders, operators, and advanced AI-tool builders</li>
            </ul>
          </article>

          <article class="card">
            <div class="label">Alpha Member Access</div>
            <h3>What membership unlocks</h3>
            <p>
              Alpha membership turns the public thesis into private GitHub access and the deeper operating layer behind it.
            </p>
            <ul class="list-tight">
              <li>Private ATLAS-7 GitHub repository access</li>
              <li>Advanced prompting frameworks and flagship playbooks like 001</li>
              <li>MCP-specific workflows and reusable deep-dive templates</li>
            </ul>
          </article>
        </section>

        <section id="alpha-circle" class="section-grid">
          <section class="panel">
            <div class="label">Alpha Circle</div>
            <h2>What Alpha membership actually unlocks</h2>
            <p>
              The public page is the front door. Alpha Circle is the private layer behind it:
              the repo, the prompting systems, the reusable research workflows, and the member-only playbooks that package the spreadsheet-first method and the loop.
            </p>
            <div class="offer-grid">
              <div class="offer-card">
                <strong>Private repo access</strong>
                <span>Full access to ATLAS-7 playbooks, prompting systems, research frameworks, MCP guides, and member docs.</span>
              </div>
              <div class="offer-card">
                <strong>Prompting and workflows</strong>
                <span>Advanced prompting frameworks, deep-dive templates, and reusable research workflows built for repeat use.</span>
              </div>
              <div class="offer-card">
                <strong>MCP operating layer</strong>
                <span>ATLAS Codex patterns, operator guidance, and examples for running the system inside agent-first tools.</span>
              </div>
            </div>
            <div class="link-cluster">
              <a href="https://substack.com/@deltasignalai/p-179433731" target="_blank" rel="noreferrer">How to join Alpha Circle</a>
              <a href="https://aitrailblazer.github.io/deltasignal-atlas-codex-plugin/" target="_blank" rel="noreferrer">ATLAS Codex Public Page</a>
            </div>
          </section>

          <section class="panel">
            <div class="label">MCP</div>
            <h2>Public page first, private workflows after</h2>
            <p>
              ATLAS Codex is the public-facing MCP surface. It shows the shape of the system in the open.
              The private repo is where the deeper operator playbooks, prompting systems, reusable workflows, and QA-control methods live.
            </p>
            <ul class="list-tight">
              <li>Start with the public ATLAS Codex page to see the public-facing surface.</li>
              <li>Join Alpha Circle when you want the private repo, playbooks, and advanced workflow layer.</li>
              <li>Use the private repo as the operating manual behind the MCP surface, not as a marketing brochure.</li>
            </ul>
            <div class="callout">
              <strong>Public first, private next</strong>
              <span>The intended flow is: public ATLAS Codex page, Alpha Circle join guide, GitHub handoff, private invite, private ATLAS-7 repo.</span>
            </div>
          </section>
        </section>

        <section id="referrals" class="section-grid">
          <section class="panel">
            <div class="label">Limited Access</div>
            <h2>Alpha Circle is intentionally kept small</h2>
            <p>
              ATLAS-7 is not being opened broadly. Access is reserved for early supporters and serious practitioners who will actually use the system.
            </p>
            <ul class="list-tight">
              <li>Membership is granted selectively</li>
              <li>The public page is open, but the operating layer is private</li>
              <li>The best fit is investors, analysts, founders, and builders who go deep</li>
            </ul>
            <div class="callout">
              <strong>Inner-circle access</strong>
              <span>Join Alpha Circle if you want the private repo, the deeper MCP operating layer, and the member-only playbooks behind DeltaSignal.</span>
            </div>
          </section>

          <section class="panel">
            <div class="label">Referral System</div>
            <h2>Bring in strong Alpha members, earn more MCP credit</h2>
            <p>
              The referral loop is aimed at high-signal people who should already be in this world:
              founders, investors, analysts, builders, and operators who would actually use Alpha Circle seriously.
            </p>
            <ul class="list-tight">
              <li>Referrals only count when the referred person becomes an Alpha Circle member.</li>
              <li>Founding-member referrals can earn additional MCP credits once the referred member joins.</li>
              <li>The best referrals are people who will use the private repo, the MCP workflows, and the DeltaSignal research layer repeatedly.</li>
            </ul>
            <div class="callout">
              <strong>Share with the right people</strong>
              <span>This is not a mass-market membership flow. It converts best when one serious operator sends another serious operator.</span>
            </div>
          </section>

          <section id="join-links" class="panel">
            <div class="label">Join Alpha Circle</div>
            <h2>Use these two links to start</h2>
            <p>
              If you want the fastest path into the system, start with the Alpha Circle join page, then use the Substack Chat handoff so the GitHub invite goes to the right account.
            </p>
            <div class="link-cluster">
              <a href="https://substack.com/@deltasignalai/p-179433731" target="_blank" rel="noreferrer">How to join Alpha Circle</a>
              <a href="https://deltasignal.substack.com/" target="_blank" rel="noreferrer">DeltaSignal Substack</a>
            </div>
            <ul class="list-tight">
              <li>Step 1: open the Alpha Circle join page and use that path to join.</li>
              <li>Step 2: send a Substack Chat DM with the GitHub username or email that should receive the private invite.</li>
              <li>Step 3: accept the invitation and enter the private ATLAS-7 repo.</li>
            </ul>
          </section>
        </section>

        <section class="section-grid">
          <div class="stack">
            <section id="access-flow" class="panel">
              <div class="label">Private GitHub Access</div>
              <h2>How the repo unlock works</h2>
              <p>
                The path is simple: join Alpha Circle, send your GitHub details through Substack Chat, then accept the invite.
                If you are already an Alpha member, you only need to send your GitHub username or GitHub account email through Substack Chat to receive the invite.
              </p>
              <p>
                Want to see the public-facing agent surface first?
                <a href="https://aitrailblazer.github.io/deltasignal-atlas-codex-plugin/" target="_blank" rel="noreferrer">Open the ATLAS Codex public page</a>.
              </p>
              <p>
                Want the membership path itself?
                <a href="https://substack.com/@deltasignalai/p-179433731" target="_blank" rel="noreferrer">Open the Alpha Circle join page</a>
                first, then send your GitHub details so the private invite goes to the right account.
              </p>
              <ul class="list-tight">
                <li>Join Alpha here: <a href="https://substack.com/@deltasignalai/p-179433731" target="_blank" rel="noreferrer">How to join Alpha Circle</a>.</li>
                <li>Send a Substack Chat DM with the GitHub username or email attached to the account that should receive access.</li>
                <li>Receive the GitHub invitation for the private repo.</li>
                <li>Accept the invitation and open ATLAS-7.</li>
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
