import { ApiType } from "../Types/apiType";
import { AttributeCard } from "../components/Card/Card";
import { ApiNeko, ApiRick } from "../services/getData";
import "../components/export"



class Dashboard extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode: 'open'})
    }

    async connectedCallback(){
        const DataRick = await ApiRick();
        const DataNeko = await ApiNeko();

        this.render(DataRick, DataNeko)
    }
    
    render(DataRick?: any, DataNeko?:any){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = ``;

            DataRick.forEach((elements: ApiType) => {
                const card = this.ownerDocument.createElement("app-card");
                card.setAttribute(AttributeCard.image, elements.image as string);
                card.setAttribute(AttributeCard.name, elements.name as string);
                card.setAttribute(AttributeCard.species, elements.species as string);
                this.shadowRoot?.appendChild(card);
            });

            const bringNeko = this.ownerDocument.createElement("button")
            bringNeko.innerText = "Dame info de Neko";
            this.shadowRoot?.appendChild(bringNeko)
            bringNeko.addEventListener("click",() => {
                console.log("click")
                DataNeko.forEach((element: ApiType) => {
                    const card = this.ownerDocument.createElement("app-card");
                    card.setAttribute(AttributeCard.anime_name, element.anime_name);
                    card.setAttribute(AttributeCard.url, element.url);
                    this.shadowRoot?.appendChild(card);
                });
                
            })

           
        }
    }
}
    
customElements.define("app-dashboard", Dashboard);
