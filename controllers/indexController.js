class indexController {
    
    storeData () {
        
        const Country = require('../models/indexModels');
        const axios = require('axios');
        let r;
        let countries = [];

        axios.get('https://covid-api.mmediagroup.fr/v1/cases')
            .then(res =>{
                r = res.data;
                let aux = 0;
                Object.entries(r).forEach(([key, value]) => {
                        aux++;
                        let name = key;
                        let confirmed = value['All']['confirmed'];
                        let deaths = value['All']['deaths'];
                        let population = value['All']['population'];
                        let abbreviation = value['All']['abbreviation'];
                        let updated = value['All']['updated'];
    
                        let covid = new Country(name, confirmed, deaths, population, abbreviation, updated);
                        countries.push(covid);
                })
            })
            .catch(err => console.log(err))
        return countries;
    }
}

module.exports = indexController;

