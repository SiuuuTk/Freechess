import NavLink from "@/components/NavLink";
import { Icon } from "@iconify/react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

const MenuOptions = [
  { text: "Play", icon: "streamline:chess-pawn", href: "/play" },
  { text: "Analysis", icon: "streamline:magnifying-glass-solid", href: "/" },
  { text: "Database", icon: "streamline:database", href: "/database" },
  { text: "About", icon: "mdi:information-outline", href: "/about" },
  { text: "Contact", icon: "mdi:email-outline", href: "/contact" },
];

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function NavMenu({ open, onClose }: Props) {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Toolbar />
      <Box
        sx={{
          width: 250,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Main nav links */}
        <List>
          {MenuOptions.map(({ text, icon, href }) => (
            <ListItem key={text} disablePadding sx={{ margin: 0.7 }}>
              <NavLink href={href}>
                <ListItemButton onClick={onClose}>
                  <ListItemIcon sx={{ pl: 1 }}>
                    <Icon icon={icon} height="1.5em" />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </NavLink>
            </ListItem>
          ))}
        </List>

        {/* Footer links */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: 2.5,
            pb: 2,
          }}
        >
          <NavLink href="/legal">
            <Typography
              variant="body2"
              sx={{
                color: "#fff",
                textDecoration: "underline",
                textDecorationColor: "#fff",
                "&:hover": {
                  textDecorationColor: "#fff",
                },
              }}
            >
              Legal Notice
            </Typography>
          </NavLink>
          <NavLink href="/privacy-policy">
            <Typography
              variant="body2"
              sx={{
                color: "#fff",
                textDecoration: "underline",
                textDecorationColor: "#fff",
                "&:hover": {
                  textDecorationColor: "#fff",
                },
              }}
            >
              Privacy Policy
            </Typography>
          </NavLink>
        </Box>
      </Box>
    </Drawer>
  );
}
