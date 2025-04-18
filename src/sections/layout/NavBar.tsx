import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { useEffect, useState } from "react";
import NavMenu from "./NavMenu";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import Image from "next/image";
import Typography from "@mui/material/Typography";

interface Props {
  darkMode: boolean;
  switchDarkMode: () => void;
}

export default function NavBar({ darkMode, switchDarkMode }: Props) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setDrawerOpen(false);
  }, [router.pathname]);

  const handleLogoClick = () => {
    if (router.pathname === "/") {
      router.reload();
    } else {
      router.push("/");
    }
  };

  return (
    <Box sx={{ flexGrow: 1, display: "flex" }}>
      <AppBar
        position="static"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        enableColorOnDark
      >
        <Toolbar>
          {/* Menu icon (left) */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: "min(0.5vw, 0.6rem)" }}
            onClick={() => setDrawerOpen((val) => !val)}
          >
            <Icon icon="mdi:menu" />
          </IconButton>

          {/* Logo cliquable avec hover effect */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                cursor: "pointer",
                display: "flex",
                transition: "transform 0.2s ease, opacity 0.2s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  opacity: 0.9,
                },
              }}
              onClick={handleLogoClick}
            >
              <Image
                src="/android-chrome-512x512.png"
                alt="Checkmate Tracker logo"
                width={228}
                height={39}
                priority
              />
            </Box>
          </Box>

          {/* Spacer */}
          <Box sx={{ flexGrow: 1 }} />

          {/* About + Contact Links */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 3, mr: 2 }}>
            <Link href="/about" passHref>
              <Typography
                variant="body1"
                sx={{
                  cursor: "pointer",
                  color: "#fff",
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                    textDecorationColor: "#fff", // 👈 underline blanc
                  },
                }}
              >
                About
              </Typography>
            </Link>
            <Link href="/contact" passHref>
              <Typography
                variant="body1"
                sx={{
                  cursor: "pointer",
                  color: "#fff",
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                    textDecorationColor: "#fff", // 👈 underline blanc
                  },
                }}
              >
                Contact
              </Typography>
            </Link>
          </Box>

          {/* Dark mode toggle */}
          <IconButton
            sx={{ ml: "min(0.6rem, 0.8vw)" }}
            onClick={switchDarkMode}
            color="inherit"
            edge="end"
          >
            {darkMode ? (
              <Icon icon="mdi:brightness-7" />
            ) : (
              <Icon icon="mdi:brightness-4" />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
      <NavMenu open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </Box>
  );
}
