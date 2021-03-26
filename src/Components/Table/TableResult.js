import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
	root: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.action.hover,
		},
	},
}))(TableRow);

const useStyles = makeStyles({
	table: {
		maxWidth: 600,
	},
});

function TableResult({ data }) {
	const classes = useStyles();
	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label="customized table">
				<TableHead>
					<TableRow>
						<StyledTableCell align="right"> Participant </StyledTableCell>
						<StyledTableCell align="right"> Country </StyledTableCell>
						<StyledTableCell align="right"> Total </StyledTableCell>
						<StyledTableCell align="right"> Speed </StyledTableCell>
						<StyledTableCell align="right"> Percent </StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map((row) => (
						<StyledTableRow key={row.id}>
							<StyledTableCell align="right">{row.participant}</StyledTableCell>
							<StyledTableCell align="right">{row.country}</StyledTableCell>
							<StyledTableCell align="right">{row.total}</StyledTableCell>
							<StyledTableCell align="right">{row.speed}</StyledTableCell>
							<StyledTableCell align="right">{row.percent}</StyledTableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

export default TableResult;
