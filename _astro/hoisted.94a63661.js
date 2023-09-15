var a=e=>{if(Math.abs(e)===0)return 0;const o=[{suffix:"t",threshold:1e12},{suffix:"b",threshold:1e9},{suffix:"m",threshold:1e6},{suffix:"k",threshold:1e3},{suffix:"",threshold:1}].find(r=>Math.abs(e)>=r.threshold);if(o){let r=(e/o.threshold).toFixed(1);return r.split(".")[1]&&r.split(".")[1]==0&&(r=r.split(".")[0]),r.split(".")[0].length===3&&(r=r.split(".")[0]),r+o.suffix}return e},n="https://api.github.com",d=async e=>await(await fetch(`${n}/users/${e}`)).json(),f=(e={})=>({login:e.login,name:e.name,username:e.login,avatar_url:e.avatar_url,bio:e.bio,following:e.following,followers:e.followers}),h=async e=>await(await fetch(`${n}/repos/${e}`)).json(),g=(e={})=>({full_name:e.full_name,name:e.name,org:e.organization?.login,description:e.description,language:e.language,stargazers_count:e.stargazers_count,forks_count:e.forks_count,subscribers_count:e.subscribers_count}),s=`/** This file is auto-generated, do not edit **/

/* Global primer styles */
:host {  --fontStack-system: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';  --base-text-weight-light: 300;  --base-text-weight-normal: 400;  --base-text-weight-medium: 500;  --base-text-weight-semibold: 600;  --borderWidth-thin: max(1px, 0.0625rem);  --borderWidth-thick: max(2px, 0.125rem);  --borderRadius-small: 3px;  --borderRadius-medium: 6px;}

/* Default Theme (Dark) */:host-context(body) {  --color-avatar-border: rgba(240,246,252,0.1);  --color-border-default: #30363d;  --color-canvas-default: #0d1117;  --color-canvas-subtle: #161b22;  --color-fg-default: #e6edf3;  --color-fg-muted: #7d8590;  --color-fg-subtle: #6e7681;  --color-fg-onemphasis: #ffffff;  --color-fg-accent: #2f81f7;  --color-fg-danger: #f85149;}
/* Light Theme */:host-context([data-color-mode="light"][data-light-theme="light"]) {  --color-avatar-border: rgba(31,35,40,0.15);  --color-border-default: #d0d7de;  --color-canvas-default: #ffffff;  --color-canvas-subtle: #f6f8fa;  --color-fg-default: #1F2328;  --color-fg-muted: #656d76;  --color-fg-subtle: #6e7781;  --color-fg-onemphasis: #ffffff;  --color-fg-accent: #0969da;  --color-fg-danger: #d1242f;}
/* Light Protanopia & Deuteranopia Theme */:host-context([data-color-mode="light"][data-light-theme="light_colorblind"]) {  --color-avatar-border: rgba(27,31,36,0.15);  --color-border-default: #d0d7de;  --color-canvas-default: #ffffff;  --color-canvas-subtle: #f6f8fa;  --color-fg-default: #24292f;  --color-fg-muted: #57606a;  --color-fg-subtle: #6e7781;  --color-fg-onemphasis: #ffffff;  --color-fg-accent: #0969da;  --color-fg-danger: #b35900;}
/* Light Tritanopia Theme */:host-context([data-color-mode="light"][data-light-theme="light_tritanopia"]) {  --color-avatar-border: rgba(27,31,36,0.15);  --color-border-default: #d0d7de;  --color-canvas-default: #ffffff;  --color-canvas-subtle: #f6f8fa;  --color-fg-default: #24292f;  --color-fg-muted: #57606a;  --color-fg-subtle: #6e7781;  --color-fg-onemphasis: #ffffff;  --color-fg-accent: #0969da;  --color-fg-danger: #cf222e;}
/* Light High Contrast Theme */:host-context([data-color-mode="light"][data-light-theme="light_high_contrast"]) {  --color-avatar-border: rgba(1,4,9,0.8);  --color-border-default: #20252c;  --color-canvas-default: #ffffff;  --color-canvas-subtle: #e7ecf0;  --color-fg-default: #0e1116;  --color-fg-muted: #0e1116;  --color-fg-subtle: #66707b;  --color-fg-onemphasis: #ffffff;  --color-fg-accent: #0349b4;  --color-fg-danger: #d1242f;}
/* Dark Theme */:host-context([data-color-mode="dark"][data-dark-theme="dark"]) {  --color-avatar-border: rgba(240,246,252,0.1);  --color-border-default: #30363d;  --color-canvas-default: #0d1117;  --color-canvas-subtle: #161b22;  --color-fg-default: #e6edf3;  --color-fg-muted: #7d8590;  --color-fg-subtle: #6e7681;  --color-fg-onemphasis: #ffffff;  --color-fg-accent: #2f81f7;  --color-fg-danger: #f85149;}
/* Dark Dimmed Theme */:host-context([data-color-mode="dark"][data-dark-theme="dark_dimmed"]) {  --color-avatar-border: rgba(205,217,229,0.1);  --color-border-default: #444c56;  --color-canvas-default: #22272e;  --color-canvas-subtle: #2d333b;  --color-fg-default: #adbac7;  --color-fg-muted: #768390;  --color-fg-subtle: #636e7b;  --color-fg-onemphasis: #cdd9e5;  --color-fg-accent: #539bf5;  --color-fg-danger: #e5534b;}
/* Dark Protanopia & Deuteranopia Theme */:host-context([data-color-mode="dark"][data-dark-theme="dark_colorblind"]) {  --color-avatar-border: rgba(240,246,252,0.1);  --color-border-default: #30363d;  --color-canvas-default: #0d1117;  --color-canvas-subtle: #161b22;  --color-fg-default: #c9d1d9;  --color-fg-muted: #8b949e;  --color-fg-subtle: #6e7681;  --color-fg-onemphasis: #ffffff;  --color-fg-accent: #58a6ff;  --color-fg-danger: #d47616;}
/* Dark Tritanopia Theme */:host-context([data-color-mode="dark"][data-dark-theme="dark_tritanopia"]) {  --color-avatar-border: rgba(240,246,252,0.1);  --color-border-default: #30363d;  --color-canvas-default: #0d1117;  --color-canvas-subtle: #161b22;  --color-fg-default: #c9d1d9;  --color-fg-muted: #8b949e;  --color-fg-subtle: #6e7681;  --color-fg-onemphasis: #ffffff;  --color-fg-accent: #58a6ff;  --color-fg-danger: #f85149;}
/* Dark High Contrast Theme */:host-context([data-color-mode="dark"][data-dark-theme="dark_high_contrast"]) {  --color-avatar-border: rgba(255,255,255,0.9);  --color-border-default: #7a828e;  --color-canvas-default: #0a0c10;  --color-canvas-subtle: #272b33;  --color-fg-default: #f0f3f6;  --color-fg-muted: #f0f3f6;  --color-fg-subtle: #9ea7b3;  --color-fg-onemphasis: #0a0c10;  --color-fg-accent: #71b7ff;  --color-fg-danger: #ff6a69;}`,l=`/** global styles used by all GitHub web components */

:host {
  --font-family: var(--fontStack-system);
  
  --font-size-host: 16px;
  --font-size-light: 0.875em;
  --font-size-normal: 1em;
  --font-size-bold: 1.25em;
  --font-size-title: 1.5em;

  --font-weight-light: var(--base-text-weight-light);
  --font-weight-normal: var(--base-text-weight-normal);
  --font-weight-bold: var(--base-text-weight-semibold);

  --bg-color-light: var(--color-canvas-subtle);
  --bg-color-normal: var(--color-canvas-default);

  --border-color: var(--color-border-default);
  --border-width: var(--borderWidth-thin);
  --border-radius: var(--borderRadius-medium);

  --color-light: var(--color-fg-subtle);
  --color-normal: var(--color-fg-default);
  --color-bold: var(--color-fg-onemphasis);

  --color-link: var(--color-fg-accent);
  --color-danger: var(--color-fg-danger);

  --logo-size: 1.5em;
  --logo-outline-offset: 2px;
  --svg-gap: 0.2em;
  --svg-size: 1em;
  --row-spacing: 0.3em;
  
  /* start of styles */
  line-height: 1.5;
  color: var(--color-normal);
  font-family: var(--font-family);
  font-size: var(--font-size-host);
  font-weight: var(--font-weight-normal);
  /* set up container queries */
  container-type: inline-size;
  display: inline-block;
  width: 100%;
}

@container (min-width: 300px) {
  section[itemscope] {
    --logo-size: 2em;
    --row-spacing: 0.5em;
  }
}

/** root elements cleanup */
* {
  padding: 0;
  margin: 0;
  margin-inline: 0;
}
a {
  text-decoration: none;
}
address {
  font-style: normal;
}

/** common container styles */
section[itemscope] {
  background-color: var(--bg-color-normal);
  border-color: var(--border-color);
  border-style: solid;
  border-width: var(--border-width);
  border-radius: var(--border-radius);

  [itemprop="error"] {
    color: var(--color-danger);
  }
}`,p=`/** styles for the GitHub user web component */

:host {
  container-name: user;
}
section[itemscope] {
  padding: auto;

  overflow-wrap: break-word;
  overflow-wrap: anywhere;
  overflow: hidden;
}
:host header {
  background-color: var(--bg-color-light);
  padding: var(--row-spacing);

  & a {
    display: flex;
    gap: var(--svg-gap);
    height: calc(var(--logo-size) + var(--logo-outline-offset) * 2);

    :has(svg) {
      flex: 0 0 var(--logo-size);
      display: inline-block;
      width: var(--logo-size);
      height: var(--logo-size);
      outline-offset: var(--logo-outline-offset);
  
      > svg {
        color: var(--color-normal);
        width: var(--logo-size);
        height: var(--logo-size);
        vertical-align: middle;
        fill: currentColor;
      }
    }

    [itemprop="alternativeName"] {
      flex: 1 0 auto;
      color: var(--color-normal);
      font-weight: var(--font-weight-bold);
      padding-inline: var(--row-spacing);
    }
  }
}
[part="main"] {
  padding: var(--row-spacing);

  [itemprop="url"] {
    display: block;
    text-align: center;
    align-items: center;
    padding: calc(var(--row-spacing) * 2) 0;

    [itemprop="image"] {
      display: block;
      width: 100%;

      & img {
        border: var(--border-width) solid var(--border-color);
        border-radius: 50%;
        line-height: 1;
        width: 70%;
        height: auto;
        margin: 0 auto;
      }
    }

    [itemprop="creator"] {
      color: var(--color-normal);

      & span {
        display: block;
        font-size: var(--font-size-title);
        line-height: 1.25;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: var(--font-weight-bold);
      }

      [itemprop="alternativeName"] {
        color: var(--color-light);
        font-size: var(--font-size-bold);
        font-style: normal;
        font-weight: var(--font-weight-light);
        line-height: 1.25;
      }
    }
  }
  
  @container user (min-width: 400px) {
    [itemprop="url"] {
      display: flex;
      gap: 1em;

      [itemprop="image"] {
        flex: 1 1 30%;
      }
      [itemprop="creator"] {
        flex: 1 0 70%;
        text-align: left;
      }
    }
  }

  [itemprop="description"] {
    margin: calc(var(--row-spacing) * 2) 0;
  }

  & dl:has([itemprop="follows"]),
  & dl:has([itemprop="followee"]) {
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    gap: var(--svg-gap);

    > dt {
      flex: 1 0 auto;
      color: var(--color-light);
    }

    > dd {
      flex: 0 0 auto;
      > svg {
        fill: var(--color-light);
        vertical-align: text-bottom;
      }
    }
  }
  @container user (min-width: 300px) {
    :is(dl:has([itemprop="followee"])) {
      display: inline-flex;
    }
    & dl:has([itemprop="followee"]) + dl:has([itemprop="follows"]) {
      display: inline-flex;

      > dd::before {
        content: ' · ';
      }
      > dd svg {
        display: none;
      }
    }
  }
  & dl:has(github-repository) {
    margin-top: .5em;
    
    > dd {
      padding: .5em .5em 0;
    }
  }
}`,m=`/** styles for the GitHub repository web component */

:host {
  container-name: repository;
}

section[itemscope] {
  padding: var(--row-spacing);
}

@container repository (min-width: 300px) {
  section[itemscope] {
    padding: calc(var(--row-spacing) * 2);
  }
}

[itemprop="codeRepository"] {
  display: block;

  > svg {
    fill: var(--color-light);
    vertical-align: text-bottom;
  }
  [itemprop="maintainer"], [itemprop="name"] {
    color: var(--color-link);
    font-weight: var(--font-weight-bold);
  }
}

[itemprop="about"] {
  margin-top: var(--row-spacing);
  color: var(--color-light);
}

dl {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: var(--svg-gap);
  color: var(--color-light);
  margin-top: var(--row-spacing);

  > dt {
    flex: 0 0 var(--svg-size);
    > span {
      display: none;
    }
    > svg {
      vertical-align: text-bottom;
    }
  }
  > dd {
    /* margin-right: 1em; */
    flex: 0 0 calc(100% - calc(var(--svg-size) + var(--svg-gap)));

    &:last-of-type {
      margin-right: 0;
    }
  }

  @container repository (min-width: 300px) {
    > dd:not([itemprop="programmingLanguage"]) {
      flex: 1 0 auto;
    }
  }

  @container repository (min-width: 400px) {
    > dd {
      flex: 1 0 auto;
    }
  }
}`,u=`
${s}
${l}
${m}
`,b='<svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path></svg>',v=`<svg aria-label="forks" height="16" viewBox="0 0 16 16" version="1.1" width="16"  fill="currentColor">
<path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
</svg>`,w=`<svg aria-label="stars" height="16" viewBox="0 0 16 16" version="1.1" width="16"  fill="currentColor">
<path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>`,x='<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 2c1.981 0 3.671.992 4.933 2.078 1.27 1.091 2.187 2.345 2.637 3.023a1.62 1.62 0 0 1 0 1.798c-.45.678-1.367 1.932-2.637 3.023C11.67 13.008 9.981 14 8 14c-1.981 0-3.671-.992-4.933-2.078C1.797 10.83.88 9.576.43 8.898a1.62 1.62 0 0 1 0-1.798c.45-.677 1.367-1.931 2.637-3.022C4.33 2.992 6.019 2 8 2ZM1.679 7.932a.12.12 0 0 0 0 .136c.411.622 1.241 1.75 2.366 2.717C5.176 11.758 6.527 12.5 8 12.5c1.473 0 2.825-.742 3.955-1.715 1.124-.967 1.954-2.096 2.366-2.717a.12.12 0 0 0 0-.136c-.412-.621-1.242-1.75-2.366-2.717C10.824 4.242 9.473 3.5 8 3.5c-1.473 0-2.825.742-3.955 1.715-1.124.967-1.954 2.096-2.366 2.717ZM8 10a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 10Z"></path></svg>',y=e=>{let t="#f1e05a";switch(e){case"TypeScript":t="#3178c6";case"Shell":t="#89e051";case"JavaScript":t="#f1e05a";case"HTML":t="#e34c26";case"CSS":t="#563d7c";case"Java":t="#b07219";default:t="#f1e05a"}return`<svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="${t}" /></svg>`},_=class extends HTMLElement{constructor(){super(),this.error=null,this.attachShadow({mode:"open"}),this._getAttributes()}_getAttributes(){for(let e of this.getAttributeNames())this.getAttribute(e)&&(this[e]=this.getAttribute(e))}_checkAttributes(){if(!this.full_name||!this.full_name.split("/")[1]){this.error="Missing repo attribute: `full_name`";return}this.name||(this.name=this.full_name.split("/")[1]),this.org||(this.org=this.full_name.split("/")[0]),this.org&&this.user_login&&delete this.org,this.stargazers_count&&(this.stargazers_count=a(this.stargazers_count)),this.forks_count&&(this.forks_count=a(this.forks_count)),this.subscribers_count&&(this.subscribers_count=a(this.subscribers_count))}async _parseFetch(){const e=await h(this.full_name);if(e.message&&e.message==="Not Found"){this.error=`Repo "${this.full_name}" not found`;return}const t=g(e);Object.entries(t).forEach(([o,r])=>{this[o]=this[o]||r})}async connectedCallback(){let e=`<style>${u}</style>`;this.fetch&&await this._parseFetch(),this._checkAttributes(),e+=this._render(),this.shadowRoot.innerHTML=e}_render(){return this.error?`
        <section role="complementary" itemscope itemtype="http://schema.org/Action">
          <p itemprop="error">${this.error}</p>
        </section>
      `:`
      <section role="complementary" itemscope itemtype="http://schema.org/SoftwareSourceCode" ${this.itemprop?`itemprop=${this.itemprop}`:""}>
        <a href="https://github.com/${this.full_name}" itemprop="codeRepository">
          ${b}
          ${this.org?`
            <span itemprop="maintainer">${this.org} /</span>
          `:""}
          <span itemprop="name">${this.name}</span>
        </a>
        ${this.description?`
          <p itemprop="about">${this.description}</p>
        `:""}
        <dl>
          ${this.language?`
            <dt>${y(this.language)} <span>Language</span></dt>
            <dd itemprop="programmingLanguage">${this.language}</dd>
          `:""}
          ${this.stargazers_count?`
            <dt>${w} <span>Stars</span></dt>
            <dd>${this.stargazers_count}</dd>
          `:""}
          ${this.subscribers_count?`
            <dt>${x} <span>Watchers</span></dt>
            <dd>${this.subscribers_count}</dd>
          `:""}
          ${this.forks_count?`
            <dt>${v} <span>Forks</span></dt>
            <dd>${this.forks_count}</dd>
          `:""}
        </dl>
      </section>
    `}};customElements.define("github-repository",_);var A=`
${s}
${l}
${p}
`,$=`<svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32">
<path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
</svg>`,i=`<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16">
<path d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z"></path>
</svg>`,k="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8/x8AAuMB8DtXNJsAAAAASUVORK5CYII=",z=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._getAttributes()}_parseReposAttribute(e){let t=[];try{t=JSON.parse(e)}catch(o){return console.error(o),[]}return t.map(o=>typeof o=="string"?o.split("/")[1]?`full_name="${o}" fetch="true"`:`full_name="${this.login}/${o}" fetch="true"`:(o.itemprop=o.itemprop||"maintainer",Object.entries(o).map(([r,c])=>`${r}="${c}"`).join(" ")))}_getAttributes(){for(let e of this.getAttributeNames())this.getAttribute(e)&&(this[e]=this.getAttribute(e));this.repositories=this.repos?this._parseReposAttribute(this.repos):[]}_checkAttributes(){if(this.username&&!this.login&&(this.login=this.username),!this.login){this.error="Missing required attribute: `login` || `username`";return}this.avatar_url||(this.avatar_url=k),this.followers&&(this.followers=a(this.followers)),this.following&&(this.following=a(this.following))}async _parseFetch(){const e=await d(this.username||this.login);if(e.message&&e.message==="Not Found"){this.error=`User "${this.username||this.login}" not found`;return}const t=f(e);Object.entries(t).forEach(([o,r])=>{this[o]=this[o]||r})}async connectedCallback(){let e=`<style>${A}</style>`;this.fetch&&await this._parseFetch(),this._checkAttributes(),e+=this._render(),this.shadowRoot.innerHTML=e}_render(){return this.error?`
        <section role="complementary" itemscope itemtype="http://schema.org/Action">
          <p itemprop="error">${this.error}</p>
        </section>
      `:`
      <section role="complementary" itemscope itemtype="http://schema.org/Person">
        <header>
          <address>
            <a href="https://github.com/${this.login}" itemprop="url">
              <span>
                ${$}
              </span>
              <span itemprop="alternativeName">${this.login}</span>
            </a>
          </address>
        </header>
        <div part="main">
          <address>
            <a href="https://github.com/${this.login}" itemprop="url">
              <span class="avatar" itemprop="image">
                <img src="${this.avatar_url}" alt="Avatar for ${this.name}" loading="lazy" />
              </span>
              <span itemprop="creator">
                <span itemprop="name">${this.name}</span>
                <span itemprop="alternativeName">${this.login}</span>
              </span>
            </a>
          </address>
          ${this.bio?`<p itemprop="description">${this.bio}</p>`:""}
          ${this.followers?`
            <dl>
              <dt><span>followers</span></dt>
              <dd itemprop="followee">${i} ${this.followers}</dd>
            </dl>
          `:""}
          ${this.following?`
            <dl>
              <dt><span>following</span></dt>
              <dd itemprop="follows">${i} ${this.following}</dd>
            </dl>
          `:""}
          ${Array.isArray(this.repositories)&&this.repositories?.length?`
            <dl>
              <dt>Pinned repositories</dt>
              ${this.repositories.map(e=>`
                <dd><github-repository ${e}></github-repository></dd>
              `).join("")}
            </dl>
          `:""}
        </div>
      </section>
    `}};customElements.define("github-user",z);
