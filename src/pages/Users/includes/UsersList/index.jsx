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

function createData(id, date, name, cargo) {
  return { id, date, name, cargo };
}

const rows = [
  createData(1, "02 Dezembro, 2022", "Italo Nogueira", "CEO CMTech e MEXX"),
  createData(2, "02 Dezembro, 2022", "Rodrigo Vasconcelos", "Sócio-Diretor e Chief Operating Officer na CMTECH e MEXX"),
  createData(3, "02 Dezembro, 2022", "Thiago Porto", "Sócio-Diretor e Chief Technology Officer na CMTech soluções em tecnologia at CMTECH and MEXX"),
  createData(4, "02 Dezembro, 2022", "Eduardo Felipe", "Fullstack Developer"),
  createData(5, "02 Dezembro, 2022", "Daniel Sarmento", "PHP Developer")
];

function preventDefault(event) {
  event.preventDefault();
}

export default function UsersList() {
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
        <Title>Lista de Usuários</Title>
        <Button component={RouterLink} to="/usuarios/add" variant="contained">
          <AddIcon />
          Adicionar
        </Button>
      </Box>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Data Cadastro</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Cargo</TableCell>
            <TableCell>Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.cargo}</TableCell>
              <TableCell>
                <Box
                  sx={{
                    display: "flex",
                    gap: "1rem"
                  }}
                >
                  <Button
                    component={RouterLink}
                    to={`/usuarios/edit/${row.id}`}
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
        Mais usuários
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
