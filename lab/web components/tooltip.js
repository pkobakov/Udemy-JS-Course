class Tooltip extends HTMLElement {
    constructor () {
        super();
        this._tooltipContainer;
        this._tooltipText = 'Some dummy tooltip text';
        this.attachShadow({ mode: 'open'});
       this.shadowRoot.innerHTML = `
       <style>

       div {
        background-color: black;
        color: white;
        position: absolute;
        z-idex: 10;
       }

       :host(.important) {
        background: #ccc;
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
        
        const tooltipIcon = this.shadowRoot.querySelector('span');
        tooltipIcon.addEventListener('mouseenter', this._showTooltip.bind(this));
        tooltipIcon.addEventListener('mouseleave', this._hideTooltip.bind(this));
        this.shadowRoot.appendChild(tooltipIcon);
        this.style.position = 'relative';
    };

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

customElements.define('my-tooltip', Tooltip);