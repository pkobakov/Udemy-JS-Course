class Tooltip extends HTMLElement {
    constructor () {
        super();
        this._tooltipIcon;
        this._tooltipContainer;
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
        this.style.position = 'relative';
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

    _showTooltip() {

        this._tooltipContainer = document.createElement('div');
        this._tooltipContainer.textContent = this._tooltipText;
        // this._tooltipContainer.style.backgroundColor = 'black';
        // this._tooltipContainer.style.color = 'white';
        // this._tooltipContainer.style.position = 'absolute';
        // this._tooltipContainer.style.zIndex = '10';
        this.shadowRoot.appendChild(this._tooltipContainer);

    }

    _hideTooltip () {
        this.shadowRoot.removeChild(this._tooltipContainer);
    }

}

customElements.define('my-tooltip', Tooltip);9