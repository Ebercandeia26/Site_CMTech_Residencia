import React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Copyright from "../../components/Copyright";

/* Tela de login com suas funções */

const users = [
  {
    id: 1,
    email: 'teste@teste.com'
  },
  {
    id: 2,
    email: 'admin@mexx.com'
  }
];

export default function SignIn() {
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if (data.get("email") && data.get("password")) {
      const [user] = users.filter(user => user.email.includes(data.get("email")));

      if (user) {
        sessionStorage.setItem(
          "authUser",
          JSON.stringify({
            token: (Math.random() * 10).toString(36).substring(2),
            user
          })
        );
  
        setTimeout(() => {
          navigate("/home");
        }, 500);
      } else {
        toast.error("Credentials invalid");
        return;
      }

    } else {
      toast.error("Credentials invalid");
      return;
    }
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
          Login
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
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, background:'#172070' }}
            style={{ background: '#172070' }}

          >
            Entrar
          </Button >
          <Grid container>
            <Grid item xs>
              <Link component={RouterLink} to="/forgot" variant="body2">
                Esqueceu a senha?
              </Link>
            </Grid>
            <Grid item>
              <Link component={RouterLink} to="/register" variant="body2">
                {"Não tem uma conta? Cadastre-se"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} style={{ color: "#ffffff" }} />
    </Container>
  );
}
