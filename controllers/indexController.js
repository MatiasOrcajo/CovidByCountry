
//  Dear COVID-19,
//  ....................../´¯/)
//  ....................,/¯../
//  .................../..../
//  ............./´¯/'...'/´¯¯`·¸
//  ........../'/.../..../......./¨¯\
//  ........('(...´...´.... ¯~/'...')
//  .........\.................'...../
//  ..........''...\.......... _.·´
//  ............\..............(
//  ..............\.............\...

let countries = [];

class IndexController {
    
    storeData () {
        
        const Country = require('../models/indexModels');
        const axios = require('axios');
        let r;

        axios.get('https://covid-api.mmediagroup.fr/v1/cases')
            .then(res =>{
                r = res.data;
                Object.entries(r).forEach(([key, value]) => {
                        let name = key;
                        let confirmed = value['All']['confirmed'];
                        let deaths = value['All']['deaths'];
                        let population = value['All']['population'];
                        let abbreviation = value['All']['abbreviation'];
                        let updated = value['All']['updated'];
                        let km = value['All']['sq_km_area'];
                        let capital = value['All']['capital_city'];
                        let life_expectancy = value['All']['life_expectancy'];
                        let continent = value['All']['continent'];
                        let location = value['All']['location'];
    
                        let covid = new Country(name, confirmed, deaths, population, abbreviation, updated, km, capital, life_expectancy, continent, location);
                        countries.push(covid);
                })
            })
            .catch(err => console.log(err))
        return countries;
    }

    getCountry(country){
        const specificCountry = countries.find(x => x.name === country);
        return specificCountry;
    }

}

module.exports = IndexController;

