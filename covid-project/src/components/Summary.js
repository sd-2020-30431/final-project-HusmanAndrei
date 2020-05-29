import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const classes  ={
  table: {
    minWidth: 650,
  }
};




export default class Summary extends React.Component {

  render(){
    const rows = this.props.data;
  return (
            <TableContainer component={Paper}>
            <Table style={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                <TableRow>
                    <TableCell>Global data</TableCell>
                    <TableCell align="right">Total cases</TableCell>
                    <TableCell align="right">Total deaths</TableCell>
                    <TableCell align="right">Active Cases</TableCell>
                    <TableCell align="right">New cases</TableCell>
                    <TableCell align="right">New deaths</TableCell>
                    <TableCell align="right">Recovered(total)</TableCell>
                    <TableCell align="right">Recovered(today)</TableCell>



                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.name}>
                    
                    <TableCell align="right"></TableCell>
                    <TableCell align="right">{row.TotalConfirmed}</TableCell>
                    <TableCell align="right">{row.TotalDeaths}</TableCell>
                    <TableCell align="right">{row.TotalConfirmed - row.TotalDeaths - row.TotalRecovered}</TableCell>
                    <TableCell align="right">{row.NewConfirmed}</TableCell>
                    <TableCell align="right">{row.NewDeaths}</TableCell>
                    <TableCell align="right">{row.TotalRecovered}</TableCell>
                    <TableCell align="right">{row.NewRecovered}</TableCell>

                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        );
     }
}