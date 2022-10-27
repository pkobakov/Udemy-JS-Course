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
             <button>Cancel</button>
             <button>OK</button>
           </section>

        </div>
        `;

        const slots = this.shadowRoot.querySelectorAll('slot');
        const slot = slots[1];
        slot.addEventListener('slotchange', () => {
          console.dir(slot.assignedNodes());

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

}

customElements.define('my-modal', ModalComponent);