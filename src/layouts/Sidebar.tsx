import { useNavigate, useLocation } from 'react-router-dom';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import DashboardIcon from '@mui/icons-material/Dashboard';

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
  { text: 'Home', icon: <HomeIcon />, path: '/' },
  { text: 'Perfil', icon: <PersonIcon />, path: '/profile' },
  { text: 'Configurações', icon: <SettingsIcon />, path: '/settings' },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const drawerWidth = 260;

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          borderRight: '1px dashed rgba(145, 158, 171, 0.24)',
          backgroundColor: 'background.paper',
          color: 'text.primary',
          position: 'relative', // Alterado de 'fixed' para 'relative'
          zIndex: 1100 // Garante que a sidebar seja renderizada adequadamente
        },
      }}
    >
      <Box sx={{ p: 3 }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Meu Aplicativo
        </Typography>
      </Box>
      <Divider sx={{ borderColor: 'rgba(145, 158, 171, 0.24)' }} />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton 
              onClick={() => navigate(item.path)}
              selected={location.pathname === item.path}
              sx={{
                mb: 0.5,
                mx: 1.5,
                borderRadius: 1,
                '&.Mui-selected': {
                  bgcolor: 'action.selected',
                  '&:hover': {
                    bgcolor: 'action.hover',
                  }
                }
              }}
            >
              <ListItemIcon sx={{ minWidth: 36, color: 'inherit' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
