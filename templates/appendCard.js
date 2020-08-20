class appendCard {
    constructor(obj,index){
        this.obj = obj;
        this.i = index;
    }
    initCard(){
        let col = `<div id='col${this.i}'class="col s4"></div>`;
        let card = `<div id='card${this.i}' class="card blue-grey darken-1"></div>`;
        let cardContent = `<div id='content${this.i}' class="card-content white-text"></div>`;
        let detailsParent = `<div id='detailP${this.i}'class="card-action white-text"></div>`;
        let detailsList = `<ul id='details${this.i}'></ul>`;

        $('#row1').append(col);
        $(`#col${this.i}`).append(card);
        $(`#card${this.i}`).append(cardContent);
        $(`#card${this.i}`).append(detailsParent);
        $(`#detailP${this.i}`).append(detailsList);
    }
    createManager(){
        this.initCard();
        let cardTitle = `<span class="card-title">${this.obj.name}</span>`
        let cardRole =  `<span class="card-title">${this.obj.role}</span>`
        let detail1= `<li>ID: ${this.obj.id}</li>`;
        let detail2= `<li>Email: ${this.obj.email}</li>`;
        let detail3= `<li>Office Number: ${this.obj.officeNumber}</li>`;

        $(`#content${this.i}`).append(cardTitle);
        $(`#content${this.i}`).append(cardRole);
        $(`#details${this.i}`).append(detail1);
        $(`#details${this.i}`).append(detail2);
        $(`#details${this.i}`).append(detail3);
    }

    createEngineer(){
        this.initCard();
        let cardTitle = `<span class="card-title">${this.obj.name}</span>`
        let cardRole =  `<span class="card-title">${this.obj.role}</span>`
        let detail1= `<li>ID: ${this.obj.id}</li>`;
        let detail2= `<li>Email: ${this.obj.email}</li>`;
        let detail3= `<li>Office Number: ${this.obj.github}</li>`;

        $(`#content${this.i}`).append(cardTitle);
        $(`#content${this.i}`).append(cardRole);
        $(`#details${this.i}`).append(detail1);
        $(`#details${this.i}`).append(detail2);
        $(`#details${this.i}`).append(detail3);
    }

    createIntern(){
        this.initCard();
        let cardTitle = `<span class="card-title">${this.obj.name}</span>`
        let cardRole =  `<span class="card-title">${this.obj.role}</span>`
        let detail1= `<li>ID: ${this.obj.id}</li>`;
        let detail2= `<li>Email: ${this.obj.email}</li>`;
        let detail3= `<li>Office Number: ${this.obj.school}</li>`;

        $(`#content${this.i}`).append(cardTitle);
        $(`#content${this.i}`).append(cardRole);
        $(`#details${this.i}`).append(detail1);
        $(`#details${this.i}`).append(detail2);
        $(`#details${this.i}`).append(detail3);
    }
}

module.exports = appendCard;

          
        
        
  