import React from 'react';


const apiUrl = "https://api.covid19api.com/summary";

class CovidService{

    async fetchData(){
        const data = await fetch(apiUrl).then(resp => resp.json());
        console.log("Data", data);
        return data;
    }

}

const covidService = new CovidService();
export default covidService;