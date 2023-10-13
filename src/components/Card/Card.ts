export enum AttributeCard {
    "image" = "image",
    "name" = "name",
    "species" = "species",
    "url" = "url",
    "anime_name" = "anime_name"
}

export default class Card extends HTMLElement {
    image: string = "";
    name: string = "";
    species: string = "";
    url: string = "";
    anime_name: string = "";

    static get observedAttributes(){
        const attrs: Record <AttributeCard, null> = {
            image: null,
            name: null,
            species: null,
            url: null,
            anime_name: null
        }
        return Object.keys(attrs)
    }

    constructor(){
        super();
        this.attachShadow({mode: 'open'})
    }

    attributeChangedCallback (propName: AttributeCard,
        oldValue: string | undefined,
        newValue: string){
            switch(propName){
                default:
                this[propName] = newValue;
                break;
            }
            this.render();
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){ this.shadowRoot.innerHTML = `
        <section>
        <img src="${this.image}"
        <h1>${this.name}</h1>
        <h2>${this.species}</h2>
        <img src="${this.url}"
        <h1>${this.anime_name}</h1>
        </section>
        `}
    }

}


customElements.define('app-card', Card)