import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { useEffect, useState } from "react";
import NavMenu from "./NavMenu";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import Image from "next/image";

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
        <Toolbar
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 1,
            px: 1,
          }}
        >
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

          {/* Logo cliquable */}
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

          {/* Social + DarkMode Buttons */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              flexShrink: 0,
              ml: "auto",
            }}
          >
            <IconButton
              color="inherit"
              onClick={() =>
                window.open("https://x.com/CheckMTracker", "_blank")
              }
            >
              <Icon icon="ri:twitter-x-fill" />
            </IconButton>

            <IconButton
              color="inherit"
              onClick={() =>
                window.open(
                  "https://www.facebook.com/profile.php?id=61575655197875",
                  "_blank"
                )
              }
            >
              <Icon icon="ri:facebook-fill" />
            </IconButton>

            <IconButton
              sx={{ minWidth: "40px" }}
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
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer (side menu) */}
      <NavMenu open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </Box>
  );
}
