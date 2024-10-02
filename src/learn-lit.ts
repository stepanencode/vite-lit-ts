import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('learn-lit')
export class LearnLit extends LitElement {
  @property() name = '';
  @property() header = 'Hello';
  @property({
    type: String,
    attribute: 'sub-header',
  })
  subHeader = 'My name is:';
  @property({ type: Boolean, attribute: 'has-logo' }) hasLogo = false;

  render() {
    return html`
      <header>
        <h1>${this.header}</h1>
        <h2>${this.subHeader}</h2>
      </header>
      ${this.hasLogo ? html` <slot name="logo" part="logo-bg"></slot> ` : ''}
      <main>
        <span>${this.name}</span>
      </main>
    `;
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      border: 1px solid black;
      width: 500px;
      height: 300px;
      border-radius: 32px;
      overflow: hidden;
      position: relative;
    }

    slot {
      display: block;
      position: absolute;
      width: 64px;
      height: 64px;
      background-color: var(--logo-background-color, white);
      border-radius: 50%;
      inset-block-start: 16px;
      inset-inline-start: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    ::slotted(*) {
      width: 62.5%;
      height: 62.5%;
    }

    header {
      background-color: var(--primary-color, #324fff);
      color: var(--on-primary-color, white);
      padding: 16px;
      text-align: center;
      text-transform: uppercase;
      font-family: sans-serif;
      letter-spacing: 4px;
    }

    h1,
    h2 {
      margin: 0;
    }

    h1 {
      font-size: 3em;
    }

    h2 {
      margin-block-start: 8px;
      font-weight: normal;
    }

    main {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-grow: 1;
      color: var(--on-bg-color, black);
    }

    span {
      font-size: 4em;
      font-family: 'Permanent Marker', cursive;
      text-align: center;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'learn-lit': LearnLit;
  }
}
