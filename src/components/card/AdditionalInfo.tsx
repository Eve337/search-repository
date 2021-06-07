import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {},
  tableContainer: {},
});

function createData(key: string, value: string) {
  return { key, value };
}

type Props = {
  currRepInfo?: any;
};

const AdditionalInfo: React.FC<Props> = (props: any) => {
  const classes = useStyles();
  const rows = [];

  for (const property in props.currRepInfo) {
    if (property === "license" || property === "owner" || property === "organization") {
    } else {
      rows.push(createData(property, String(props.currRepInfo[property])));
    }
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} size='small' aria-label='a dense table'>
          <TableHead>
            <TableRow>
              <TableCell align='right'>Key</TableCell>
              <TableCell align='center'>Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.key}>
                <TableCell align='right' component='th' scope='row'>
                  {row.key}:
                </TableCell>
                <TableCell align='center'>{row.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default AdditionalInfo;
