const createCard = {

    createManager(obj){
        let cardTitle = `<span class="card-title">${obj.name}</span>`
        let cardRole =  `<span class="card-title">${obj.role}</span>`
        let detail1= `<li>ID: ${obj.id}</li>`;
        let detail2= `<li>Email: ${obj.email}</li>`;
        let detail3= `<li>Office Number: ${obj.officeNumber}</li>`;

        let detailsList = `<ul>${detail1}${detail2}${detail3}</ul>`;
        let detailsParent = `<div id='detailParent'class="card-action white-text">${detailsList}</div>`;
        let cardContent = `<div class="card-content white-text">${cardTitle}${cardRole}${detailsParent}</div>`;
        let card = `<div class="card blue-grey darken-1">${cardContent}</div>`;
        let col = `<div class="col s4">${card}</div>`;
        return col;
    },

    createEngineer(obj){
        let cardTitle = `<span class="card-title">${obj.name}</span>`
        let cardRole =  `<span class="card-title">${obj.role}</span>`
        let detail1= `<li>ID: ${obj.id}</li>`;
        let detail2= `<li>Email: ${obj.email}</li>`;
        let detail3= `<li>Github: ${obj.github}</li>`;

        let detailsList = `<ul>${detail1}${detail2}${detail3}</ul>`;
        let detailsParent = `<div id='detailParent'class="card-action white-text">${detailsList}</div>`;
        let cardContent = `<div class="card-content white-text">${cardTitle}${cardRole}${detailsParent}</div>`;
        let card = `<div class="card blue-grey darken-1">${cardContent}</div>`;
        let col = `<div class="col s4">${card}</div>`;
        return col;
    },

    createIntern(obj){
        
        let cardTitle = `<span class="card-title">${obj.name}</span>`
        let cardRole =  `<span class="card-title">${obj.role}</span>`
        let detail1= `<li>ID: ${obj.id}</li>`;
        let detail2= `<li>Email: ${obj.email}</li>`;
        let detail3= `<li>School: ${obj.school}</li>`;

        let detailsList = `<ul>${detail1}${detail2}${detail3}</ul>`;
        let detailsParent = `<div id='detailParent'class="card-action white-text">${detailsList}</div>`;
        let cardContent = `<div class="card-content white-text">${cardTitle}${cardRole}${detailsParent}</div>`;
        let card = `<div class="card blue-grey darken-1">${cardContent}</div>`;
        let col = `<div class="col s4">${card}</div>`;
        return col;
    }
}


module.exports = createCard;

          
        
        
  