import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme,
  Paper,
} from "@mui/material";

const RegionTable = () => {
    const theme = useTheme();
    
  const tableData = [
    { region: "English (USA)", code: "SC7E52" },
    { region: "English (PAL)", code: "SC7P52" },
    { region: "Canadian (French Canadian)", code: "SC7Z52" },
    { region: "French (PAL French)", code: "SC7F52" },
    { region: "Germany", code: "SC7D52" },
    { region: "Spanish", code: "SC7S52" },
    { region: "Italian", code: "SC7I52" },
  ];

  return (
    <TableContainer sx={{backgroundColor: theme.palette.background.default, width: '40%'}} component={Paper}>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell><strong>Region</strong></TableCell>
            <TableCell><strong>Code</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.region}</TableCell>
              <TableCell>{row.code}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RegionTable;
