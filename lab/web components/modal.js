class ModalComponent extends HTMLElement {

    constructor() {
        super();
        this.isOpen = false;
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
        <style>
         #backdrop {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: rgba(0,0,0,0.75);
            z-index: 10;
            opacity: 0;
            pointer-events: none;
         }

         #modal {
            position: fixed;
            top: 15vh;
            left: 25%;
            width: 50%;
            background: white;
            border-radius: 3px;
            z-index: 100;
            box-shadow: 0 2px 8px rgba(0,0,0, 0.26);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            opacity: 0;

          }

          :host([open]) #backdrop,
          :host([open]) #modal {
            opacity: 1;
            poiter-events: all;
          }

          header {
            padding: 1rem;
          }

          ::slotted(h1) {
            font-size: 1.25rem;
          }

          #main {
            padding: 1rem;
          }

          #actions {
            border-top: 1px solid #ccc;
            padding: 1rem;
            display: flex;
            justify-content: flex-end;
          }
          
          #actions button {
            margin: 0 0.25rem;
          }


        </style>
        <div id="backdrop"></div>
        <div id="modal">
           <header>
              <slot name="title"></slot>
           </header>
           <section id="main">
              <slot></slot>
           </section >

           <section id="actions">
             <button id="confirm-btn">OK</button>
             <button id="cancel-btn">Cancel</button>
           </section>
        </div>
        `;

        const slots = this.shadowRoot.querySelectorAll('slot');
        const slot = slots[1];
        slot.addEventListener('slotchange', () => {
          console.dir(slot.assignedNodes());

        });

        const confirmBtn = this.shadowRoot.getElementById('confirm-btn');
        confirmBtn.addEventListener('click', this._confirm.bind(this));
        const cancelBtn = this.shadowRoot.getElementById('cancel-btn');
        cancelBtn.addEventListener('click', this._cancel.bind(this));
        cancelBtn.addEventListener('cancel', () => {
          console.log('Cancel inside the component.');
        })
        





    }

    // attributeChangedCallback(name, oldValue, newValue) {
    //   if (name === 'open') {
    //     if (this.hasAttribute('open')) {
    //       this.shadowRoot.querySelector('#backdrop').style.opacity = 1;
    //       this.shadowRoot.querySelector('#backdrop').style.pointerEvents = 'all';
    //       this.shadowRoot.querySelector('#modal').style.opacity = 1;
    //       this.shadowRoot.querySelector('#modal').style.pointerEvents = 'all';
    //     }
    //   }
    // }

    // static get observedAttributes() {
    //   return ['open'];
    // }

    open() {
      this.setAttribute('open', '');
      this.isOpen  = true;
    };

    hide() {
      if (this.hasAttribute('open')) {
        
        this.removeAttribute('open');
      }

      this.isOpen = false;
    }

    _cancel(event) {
       this.hide();
       const cancelEvent = new Event('cancel', {bubbles: true, composed: true});
       event.target.dispatchEvent(cancelEvent);

    };

    _confirm() {
       this.hide();
       const confirmEvent = new Event ('confirm');
       this.dispatchEvent(confirmEvent);
    }

}

customElements.define('my-modal', ModalComponent);