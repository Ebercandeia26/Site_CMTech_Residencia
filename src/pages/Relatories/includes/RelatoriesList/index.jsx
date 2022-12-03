import React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";
import Title from "../../../../components/Title";

/* Tela de relatório de clientes e suas informações que são exibidas */

function createData(id, date, name) {
  return { id, date, name };
}

const rows = [
  createData(0, "02 Dezembro, 2022", "Éber Candeia"),
  createData(1, "02 Dezembro, 2022", "Bruna Beatriz"),
  createData(2, "02 Dezembro, 2022", "Edivaldo Coelho"),
  createData(3, "02 Dezembro, 2022", "Fabyane Nayara"),
  createData(4, "02 Dezembro, 2022", "Silas Emanuel")
];

function preventDefault(event) {
  event.preventDefault();
}

export default function RelatoriesList() {
  return (
    <React.Fragment>
      <Title>Lista de Relatórios</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Data de Cadastro</TableCell>
            <TableCell>Nome Cliente</TableCell>
            <TableCell>Relatório</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>
              <Box
                  sx={{
                    display: "flex",
                    gap: "1rem"
                  }}
                >
                  <Button
                    variant="contained"
                    color="secondary"
                    style={{ background: '#172070' }}
                  >
                    <EditIcon style={{ marginRight: 4}} />
                    Ver Relatório
                  </Button>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        Mais relatórios
      </Link>
    </React.Fragment>
  );
}
