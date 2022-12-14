class Tooltip extends HTMLElement {
    constructor () {
        super();
        this._tooltipIcon;
        this._isVisible = false;
        this._tooltipText = 'Some dummy tooltip text';
        this.attachShadow({ mode: 'open'});
       this.shadowRoot.innerHTML = `
       <style>

       div {
        font-weight: normal;
        background-color: black;
        color: white;
        position: absolute;
        top: 1.5rem;
        left: 0.75;
        z-idex: 10;
        padding: 0.15rem;
        border-radius: 3px;
        box-shadow: 1px 1px 6px grba(0,0,0,0,0,26); 
       }

       :host {
        position: relative;
       }

       :host(.important) {
        background: var(--color-primary);
        padding: 0.15rem;
       }

       host-context(p) {
        font-weight: bold;
       }

       ::slotted(.highlight) {
        border-bottom: 3px dotted blue;
       }

       .icon {
         background-color: orange;
         color: black;
         text-align: center;
         border-radius: 50%; 
         padding: 0.15rem 0.5rem;


       }

       </style>
       <slot>Some Default</slot>
       <span class="icon"> ;)</span>
       `;
        
        
    }
    
    connectedCallback() {
        if (this.hasAttribute('text')) {
            this._tooltipText = this.getAttribute('text');
            
        }
        
        this.tooltipIcon = this.shadowRoot.querySelector('span');
        this.tooltipIcon.addEventListener('mouseenter', this._showTooltip.bind(this));
        this.tooltipIcon.addEventListener('mouseleave', this._hideTooltip.bind(this));
        this.shadowRoot.appendChild(this.tooltipIcon);
    };

    attributeChangedCallback(name, oldVal, newVal) {
        if (newVal === oldVal) {
            return;
        }

        if (name === 'text') {
            this._tooltipText = newVal;
        }
    }

    static get observedAttributes () {
        return ['text'];
    }

    disconnectedCallback() {
        this._tooltipIcon.removeEventListener('mouseenter', this._showTooltip);
        this._tooltipIcon.removeEventListener('mouseout', this._hideTooltip);
    } 

    _render() {

        let tooltipContainer = this.shadowRoot.querySelector('div');

        if (this._isVisible) {

        tooltipContainer = document.createElement('div');
        tooltipContainer.textContent = this._tooltipText;
        this.shadowRoot.appendChild(tooltipContainer);
        } else {
            if (tooltipContainer) {
                this.shadowRoot.removeChild(tooltipContainer);
            }
        }
    }

    _showTooltip() {
       this._isVisible = true;
       this._render();
        
    }

    _hideTooltip () {
      this._isVisible = false;
      this._render();
    }

}

customElements.define('my-tooltip', Tooltip);9