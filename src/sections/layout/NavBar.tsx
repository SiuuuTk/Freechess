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
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        enableColorOnDark
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: { xs: 1, sm: 2 },
            minHeight: { xs: 56, sm: 64 },
            gap: { xs: 1, sm: 2 },
            flexWrap: "nowrap",
          }}
        >
          {/* Menu button */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setDrawerOpen((val) => !val)}
            sx={{ p: { xs: 0.5, sm: 1 } }}
          >
            <Icon icon="mdi:menu" />
          </IconButton>

          {/* Logo */}
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
              maxWidth: { xs: 140, sm: 200 },
            }}
            onClick={handleLogoClick}
          >
            <Image
              src="/android-chrome-512x512.png"
              alt="Checkmate Tracker logo"
              width={180}
              height={36}
              priority
              style={{ width: "100%", height: "auto" }}
            />
          </Box>

          {/* Socials + Theme Toggle */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 0.5, sm: 1 },
              flexShrink: 0,
            }}
          >
            <IconButton
              color="inherit"
              sx={{ p: { xs: 0.5, sm: 1 } }}
              onClick={() =>
                window.open("https://x.com/CheckMTracker", "_blank")
              }
            >
              <Icon icon="ri:twitter-x-fill" fontSize={20} />
            </IconButton>
            <IconButton
              color="inherit"
              sx={{ p: { xs: 0.5, sm: 1 } }}
              onClick={() =>
                window.open(
                  "https://www.facebook.com/profile.php?id=61575655197875",
                  "_blank"
                )
              }
            >
              <Icon icon="ri:facebook-fill" fontSize={20} />
            </IconButton>
            <IconButton
              color="inherit"
              sx={{ p: { xs: 0.5, sm: 1 } }}
              onClick={switchDarkMode}
            >
              <Icon
                icon={darkMode ? "mdi:brightness-7" : "mdi:brightness-4"}
                fontSize={20}
              />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer menu */}
      <NavMenu open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </Box>
  );
}
