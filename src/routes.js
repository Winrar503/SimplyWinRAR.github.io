import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdDashboard,
  MdBarChart,
  MdPersonPin,
  MdCode,
  MdContacts
} from "react-icons/md";

import Dashboard from "./views/dashboard/dashboard";
import About from "./views/about/about";
import Resume from "./views/resume/resume";
import Projects from "./views/projects/projects";
import Contact from "./views/contact/contact";

const routes = [
  {
    name: "Inicio",
    path: "/home",
    navbarDisplayName: "<Inicio/>",
    icon: <Icon as={MdDashboard} width="30px" height="30px" color="inherit" />,
    component: Dashboard
  },
  {
    name: "Acerca de mi",
    path: "/about",
    navbarDisplayName: "<Yo/>",
    icon: <Icon as={MdPersonPin} width="30px" height="30px" color="inherit" />,
    component: About
  },
  {
    name: "Mis proyectos",
    path: "/projects",
    navbarDisplayName: "<Proyectos/>",
    icon: <Icon as={MdCode} width="30px" height="30px" color="inherit" />,
    component: Projects
  },
  {
    name: "Curriculum",
    path: "/resume",
    navbarDisplayName: "<Curriculum/>",
    icon: <Icon as={MdBarChart} width="30px" height="30px" color="inherit" />,
    component: Resume
  },
  {
    name: "Contactame",
    path: "/contact",
    navbarDisplayName: "<Contactos/>",
    icon: <Icon as={MdContacts} width="30px" height="30px" color="inherit" />,
    component: Contact
  }
];

export default routes;
