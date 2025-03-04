import { ReactNode } from "react";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import Sidebar from "@/layouts/Sidebar";
import Header from "@/layouts/Header";

const drawerWidth = 260; // Largura da Sidebar

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <CssBaseline />
      <Sidebar />
      
      {/* Conteúdo Principal - posicionado ao lado da sidebar */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          // ml: { sm: `${drawerWidth}px` },
          display: "flex",
          flexDirection: "column",
          overflow: "auto"
        }}
      >
        <Header />
        <Toolbar /> {/* Espaçador para compensar a altura do header */}
        
        {/* Container para centralizar o conteúdo horizontalmente */}
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 3
          }}
        >
          {/* Box para limitar a largura do conteúdo */}
          <Box
            sx={{
              width: "100%",
              maxWidth: "1200px",
              mx: "auto"
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
