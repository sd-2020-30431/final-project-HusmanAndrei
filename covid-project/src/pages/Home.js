
import React from 'react';
import covidService from '../services/CovidService'
import MapChart from '../MapChart';
import DenseTable from '../components/Table';
import Summary from '../components/Summary';

export default class Home extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            data: [],
            header: []
        }
    }

    async componentDidMount(){
        const newData = await covidService.fetchData();
        this.setState({
            data: newData.Countries,
            header: [newData.Global]
        })
    }
    render(){
        return (
            <div>
            <div style={{display: 'flexbox', width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
            <h3>COVID19 Status</h3>
                <Summary data={this.state.header}/>
                <MapChart data={this.state.data} />
                <DenseTable data={this.state.data}/>
            </div>
            </div>
        )
    }
}