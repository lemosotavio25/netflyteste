import { AppBar, Toolbar, Typography } from "@mui/material";

const drawerWidth = 260; // Mesmo valor da Sidebar

const Header = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${drawerWidth}px)`, // Ajuste da largura correta
        left: `${drawerWidth}px`, // Move o header para a direita da sidebar
        background: "#1976d2",
        // zIndex: 1201, // Mantém o header acima do conteúdo principal
      }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap>
          Painel de Controle
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
