import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import Button from "@mui/material/Button";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import Title from "../../../../components/Title";
import AlertDialog from "../../../../components/AlertDialog";

/*Tela onde fica a lista de clientes cadastrados*/

function createData(id, date, name) {
  return { id, date, name };
}

/*Dados que são exibidos*/

const rows = [
  createData(1, "02 Dezembro, 2022", "Éber Candeia"),
  createData(2, "02 Dezembro, 2022", "Silas Emanuel"),
  createData(3, "02 Dezembro, 2022", "Fabyane Nayara"),
  createData(4, "02 Dezembro, 2022", "Edivaldo Coelho"),
  createData(5, "02 Dezembro, 2022", "Bruna Beatriz")
];

function preventDefault(event) {
  event.preventDefault();
}

export default function ClientsList() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    alert("Deleted successfully");
    handleClose();
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <Title>Lista de Clientes</Title>
        <Button component={RouterLink} to="/clientes/add" variant="contained">
          <AddIcon />
          Adicionar
        </Button>
      </Box>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Data Cadastro</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
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
                    component={RouterLink}
                    to={`/clientes/edit/${row.id}`}
                    variant="contained"
                    color="secondary"
                    style={{ background: '#172070' }}
                  >
                    <EditIcon style={{ marginRight: 4 }} />
                    Editar
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={handleClickOpen}
                  >
                    <DeleteIcon style={{ marginRight: 4 }} />
                    Deletar
                  </Button>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        Mais clientes
      </Link>

      {open && (
        <AlertDialog
          open={open}
          setOpen={handleClose}
          handleConfirm={handleConfirm}
        />
      )}
    </React.Fragment>
  );
}
