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
          overflow: "hidden",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Main navigation links */}
        <List>
          {MenuOptions.map(({ text, icon, href }) => (
            <ListItem key={text} disablePadding sx={{ margin: 0.7 }}>
              <NavLink href={href}>
                <ListItemButton onClick={onClose}>
                  <ListItemIcon style={{ paddingLeft: "0.5em" }}>
                    <Icon icon={icon} height="1.5em" />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </NavLink>
            </ListItem>
          ))}
        </List>

        {/* Spacer to push legal links to bottom */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Legal links at the bottom */}
        <Box sx={{ px: 2, pb: 2 }}>
          <NavLink href="/legal">
            <Typography
              variant="body2"
              sx={{
                color: "#fff",
                textDecoration: "underline",
                "&:hover": {
                  textDecoration: "underline",
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
                mt: 1,
                display: "block",
                "&:hover": {
                  textDecoration: "underline",
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
