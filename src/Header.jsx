import React from "react";

import { Box, Tab, Tabs } from "@mui/material";


const Header = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <main>
        <div>
          <div className=" ">
            <Box
              sx={{
                marginLeft: { xs: 1 },
                marginTop: { xs: "42px" },
                maxWidth: { xs: 10, sm: 1480 },
                bgcolor: "background.paper",
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
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
                {/* <ul className=" flex gap-5 items-center">
                  <li className=" w-[140px] font-medium text-base">
                    <NavLink to="/aksiya">
                    </NavLink>
                  </li>
                  <li className=" w-[180px] font-medium text-base">
                    <NavLink to="/maxibox">
                    </NavLink>
                  </li>
                  <li className=" w-[180px] font-medium text-base">
                    <NavLink to="/klapsenvish">
                    </NavLink>
                  </li>
                  <li className=" w-[140px] font-medium text-base">
                    <NavLink to="/lavash">
                    </NavLink>
                  </li>
                  <li className=" w-[140px] font-medium text-base">
                    <NavLink to="/shaurma">
                    </NavLink>
                  </li>
                  <li className=" w-[140px] font-medium text-base">
                    <NavLink to="/panini">
                    </NavLink>
                  </li>
                  <li className=" w-[140px] font-medium text-base">
                    <NavLink to="/burger">
                    </NavLink>
                  </li>
                  <li className=" w-[170px] font-medium text-base">
                    <NavLink to="/donar">
                    </NavLink>
                  </li>
                  <li className=" w-[140px] font-medium text-base">
                    <NavLink to="/hotdoc">
                    </NavLink>
                  </li>
                  <li className=" w-[140px] font-medium text-base">
                    <NavLink to="/gazak">
                    </NavLink>
                  </li>
                  <li className=" w-[160px] font-medium text-base">
                    <NavLink to="/tamaddi">
                    </NavLink>
                  </li>
                  <li className=" w-[140px] font-medium text-base">
                    <NavLink to="/desert">
                    </NavLink>
                  </li>
                  <li className=" w-[160px] font-medium text-base">
                    <NavLink to="/ichimliklar">
                    </NavLink>
                  </li>
                  <li className=" w-[140px] font-medium text-base">
                    <NavLink to="/souslar">
                    </NavLink>
                  </li>
                </ul> */}
              </Tabs>
            {/* <Routes>
              <Route path="/aksiya" element={<Aksiya />} />
              <Route path="/maxibox" element={<MaxiBox />} />
              <Route path="/klapsenvish" element={<Klapsenvich />} />
              <Route path="/lavash" element={<Lavash />} />
              <Route path="/shaurma" element={<Shaurma />} />
              <Route path="/panini" element={<Panini />} />
              <Route path="/burger" element={<Burger />} />
              <Route path="/donar" element={<Donarkabob />} />
              <Route path="/hotdoc" element={<Hotdoc />} />
              <Route path="/gazak" element={<Gazak />} />
              <Route path="/tamaddi" element={<Tamaddi />} />
              <Route path="/desert" element={<Desert />} />
              <Route path="/ichimliklar" element={<Ichimlik />} />
              <Route path="/souslar" element={<Souslar />} />
            </Routes> */}
            </Box>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Header;
