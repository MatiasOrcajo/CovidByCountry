function getApiData () {
    const url = 'https://covid-api.mmediagroup.fr/v1/cases';

    fetch(url)
        .then(res => res.json())
        .then (data => console.log(data))
}
module.export = {
    getApiData
}

