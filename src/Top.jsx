import React from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";

import LocationOnIcon from "@mui/icons-material/LocationOn";

import MenuIcon from "@mui/icons-material/Menu";

import RoomIcon from "@mui/icons-material/Room";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import Corusel from "./Corusel";

import Felial from "./pages/Felial";
import Bizhaqimizda from "./pages/Bizhaqimizda";
import Boglanish from "./pages/Boglanish";
import Korzinka from "./pages/Korzinka";
import Footer from "./pages/Footer";
import Opn from "./Opn";

//

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
//

//


const Top = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <>
        {[
          "O'zbekcha",
          "Kirish",
         
        ].map((text, index) => (
          <ListItem key={Link} disablePadding>
            <ListItemButton>
             
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </>
      <Divider />
      
        <List>
          {["Bosh sahifa", "Filiallar", "Biz haqimikzda" ,"Bog'lanish"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
              
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      
    </Box>
  );
  //
  return (
    <div>
      <main>
        <div>
          <div className="flex items-center gap-5 container px-[50px] py-5  justify-between">
            <div className=" flex items-center gap-5">
              {/* <NavLink to="/opn">
                <span className=" md:hidden">
                  <MenuIcon />
                </span>
              </NavLink> */}
              <div>
                <div className=" md:hidden">
                  <Button onClick={toggleDrawer(true)}>
                    <MenuIcon />
                  </Button>
                  <Drawer open={open} onClose={toggleDrawer(false)}>
                    {DrawerList}
                  </Drawer>
                </div>
              </div>
              <NavLink to="/">
                <img
                  className=" md:hidden w-10 h-10"
                  src="https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fcfff938f-a7f6-4694-972e-c7fa9c0f68ba&w=64&q=75"
                  alt=""
                />
              </NavLink>
              <ul className=" items-center gap-5 hidden md:flex">
                <li>
                  <NavLink to="/">
                    <img
                      className=" w-10 h-10"
                      src="https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fcfff938f-a7f6-4694-972e-c7fa9c0f68ba&w=64&q=75"
                      alt=""
                    />
                  </NavLink>
                </li>

                <li className="">
                  <NavLink to="/">Menyu</NavLink>
                </li>
                <li>
                  <NavLink to="/filial">Filiallar</NavLink>
                </li>
                <li>
                  <NavLink to="/bizhaqimizda">Bizhaqimizda</NavLink>
                </li>
                <li>
                  <NavLink to="/boglanish">Bog'lanish</NavLink>
                </li>
              </ul>
            </div>
            <div className=" hidden md:flex items-center gap-5">
              <span>
                <RoomIcon />{" "}
              </span>
              <h2 className=" w-[250px]">
                Yetkazib berish yoki Olib ketish Qabul qilib olish turini
                tanlang
              </h2>
              <button className=" w-[80px] h-10 bg-slate-400 rounded">
                <select className=" w-[50px]" name="uz" id="uz">
                  <option value="uz">Uzb</option>
                  <option value="rus">Rus</option>
                  <option value="eng">English</option>
                </select>
              </button>
              <ul>
                <li>
                  <NavLink to="/korzinka">
                    <button className=" flex gap-2">
                      <ShoppingCartIcon />
                      <h2>2000 so'm</h2>
                    </button>
                  </NavLink>
                </li>
              </ul>
              <span>
                <PermIdentityIcon />
              </span>
            </div>
          </div>
          <Routes>
            <Route path="/" element={<Corusel />} />
            <Route path="/filial" element={<Felial />} />
            <Route path="/bizhaqimizda" element={<Bizhaqimizda />} />
            <Route path="/boglanish" element={<Boglanish />} />
            <Route path="/korzinka" element={<Korzinka />} />
          </Routes>
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Top;
