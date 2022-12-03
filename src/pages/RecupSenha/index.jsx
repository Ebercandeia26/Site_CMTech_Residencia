import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Copyright from "../../components/Copyright";

export default function RecupSenha() {
  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email")
    });
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#FFFFFF",
          borderRadius: "1rem",
          p: 8
        }}
      >
         <img src={'/images/Logo-MEXX.png'} style={{
          width: '200px',
          height: 'auto',
          marginBottom: 10
        }} />
        <Typography component="h1" variant="h5">
          Recuperação de Senha
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            style={{ background: '#172070', hover:'#fff'}}
          >
            Enviar Link para o email
          </Button>
          <Grid container>
            <Grid item>
              <Link component={RouterLink} to="/" variant="body2">
                {"Já tem uma conta? Faça Login"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} style={{ color: "#ffffff" }} />
    </Container>
  );
}
