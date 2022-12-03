import { useState } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import LogoutIcon from "@mui/icons-material/Logout";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PeopleIcon from "@mui/icons-material/People";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Badge from "@mui/material/Badge";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import IconButton from "@mui/material/IconButton";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AppBar from "../../components/AppBar";
import Drawer from "../../components/Drawer";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import ChatIcon from '@mui/icons-material/Chat';
import HomeIcon from '@mui/icons-material/Home';

/* Função onde contém os valoras que são atribuidos a cada função do menu lateral. */

export default function DefaultLayout({ children }) {
  const navigate = useNavigate();
  const authUser = JSON.parse(sessionStorage.getItem("authUser"));
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("authUser");

    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  return (
    <Box sx={{ display: "flex" }}  >
      <AppBar position="absolute" open={open}>
        <Toolbar
          sx={{
            pr: "24px"
          }}
          style={{ background: '#172070' }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" })
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Mexx
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1rem"
            }}
          >
            <IconButton color="inherit">
              <Badge badgeContent={4} color="error">
                <NotificationsNoneIcon />
              </Badge>
            </IconButton>
            <IconButton to="/alteracao-senha" 
            component={RouterLink} color="inherit">
              <AccountBoxIcon />
            </IconButton>
            <IconButton color="inherit" onClick={handleLogout}>
              <LogoutIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            backgroundImage: "url('/images/Logo-MEXX.png')",
            backgroundSize: '70%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            px: [1]
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
          <ListItemButton to="/home" component={RouterLink}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
          {authUser && authUser?.user?.id === 2 && (
            <>
              <ListItemButton to="/relatorios" component={RouterLink}>
                <ListItemIcon>
                  <AccessTimeFilledIcon/>
                </ListItemIcon>
                <ListItemText primary="Relatórios" />
              </ListItemButton>
              <ListItemButton to="/usuarios" component={RouterLink}>
                <ListItemIcon>
                  <AdminPanelSettingsIcon/>
                </ListItemIcon>
                <ListItemText primary="Usuários" />
              </ListItemButton>
              <ListItemButton to="/clientes" component={RouterLink}>
                <ListItemIcon>
                  <PeopleIcon/>
                </ListItemIcon>
                <ListItemText primary="Clientes" />
              </ListItemButton>
            </>
          )}
          <ListItemButton to="/chat" component={RouterLink}>
            <ListItemIcon>
              <ChatIcon/>
            </ListItemIcon>
            <ListItemText primary="Chat" />
          </ListItemButton>
        </List>
      </Drawer>
      {children}
    </Box>
  );
}
