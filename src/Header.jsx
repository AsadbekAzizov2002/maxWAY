import React from "react";
import { Tab, Tabs } from "@mui/material";

const Header = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
        sx={{
          // Responsive margin for smaller devices
          marginLeft: { xs: 1 },
          // Responsive marginTop for smaller devices
          marginTop: { xs: "50px" },
          // Set max width for smaller devices
          maxWidth: { xs: "100%", sm: 1480 },
        }}
      >
        <Tab label="🎉 Aksiya 2+1" />
        <Tab label="🍟🍔🥤Maxi BOX" />
        <Tab label="🥪Klab-Sendvich" />
        <Tab label="🌯Lavas" />
        <Tab label="🌮Shaurma" />
        <Tab label="🫔Panini" />
        <Tab label="🍔Burger" />
        <Tab label="🍱Donar kebab" />
        <Tab label="🌭Hot-Dog" />
        <Tab label="🍟Gazaklar" />
        <Tab label="🍚Tamaddilar" />
        <Tab label="🍰Desertlar" />
        <Tab label="🥤Ichimliklar" />
        <Tab label="🥫Souslar" />
      </Tabs>
    </div>
  );
};

export default Header;
