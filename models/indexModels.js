class Country{
    constructor (name, cases, deaths, population, abbreviation, updated, km, capital, life_expectancy, continent, location,){
        this.name = name,
        this.cases = cases,
        this.deaths = deaths,
        this.population = population,
        this.abbreviation = abbreviation,
        this.updated = updated,
        this.km = km,
        this.capital = capital,
        this.life_expectancy = life_expectancy,
        this.continent = continent,
        this.location = location
    }
}

module.exports = Country;