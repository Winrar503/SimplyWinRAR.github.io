import { React, useEffect } from "react";
import {
  Box,
  SimpleGrid,
  Flex,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import routes from "../../routes";
import Navbar from "../../components/Navbar/Navbar";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import nftproject from "../../assets/projects/one.png";
import medhub from "../../assets/projects/maxresdefault.jpg";
import collab from "../../assets/projects/api.png";
import blog from "../../assets/projects/markeplace.png";
import eeg from "../../assets/projects/pngtree-plus-sign-symbol-simple-design-pharmacy-logo-black-vector-png-image_12186664.png";
import mtrans from "../../assets/projects/mt_500x300.jpg";
import steg from "../../assets/projects/steg_500x300.jpeg";

export default function Projects() {
  const textColorPrimary = useColorModeValue(
    "secondaryGray.900",
    "lightpeach.100"
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const getActiveRoute = (routes) => {
    for (let i = 0; i < routes.length; i++) {
      if (window.location.href.indexOf(routes[i].path) !== -1) {
        return routes[i].navbarDisplayName;
      }
    }
  };

  return (
    <Box>
      <Navbar displayText={getActiveRoute(routes)} />
      <Box pt={{ base: "20px", md: "40px", xl: "40px" }}>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
        ></Flex>
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          gap="25px"
          alignItems="center"
          justifyContent="center"
        >
          <ProjectCard
            projectImage={nftproject}
            projectName={"App de asistencia con reconociemiento facial"}
            aboutProject={"Proyecto personal"}
            techStack={"ASP.NET CORE MVC, SQL SERVER, HTML, CSS, JS, TAILWIND, OPEN CV, EGMU CV "}
            //projectLiveLink="https://flipkart-grid-frontend.vercel.app/"
            projectLink="https://github.com/Winrar503/Control.Asistencia_Facial_Asp.Net_core_MVC"
          />
          <ProjectCard
            projectImage={collab}
            projectName={"Api Contacto"}
            aboutProject={"Api de contactos, funciones en produccion"}
            techStack={"c# 100% (ASP.NET CORE WED API)"}
           // projectLiveLink="https://lets-collab.vercel.app/"
            projectLink="https://github.com/Winrar503/ApiAgenda_Asp.Net_core_wed_Api"
          />
          <ProjectCard
            projectImage={medhub}
            projectName={"Bibliotec-Win"}
            aboutProject={
              "Una app de biblioteca para gestionar libros de manera wed eficiente y rapido"
            }
            techStack={
              "ASP.NET CORE MVC, CSS, HTML, JS"
            }
            //projectLiveLink="https://medhub-360.vercel.app/"
            projectLink="https://github.com/Rahul1582/MedHub_360"
          />
          <ProjectCard
            projectImage={blog}
            projectName={"XChange"}
            aboutProject={"App de intercambios, ventas, eficiente para hacer compras y trueques."}
            techStack={"JavaScript, TypeScript, React.js, Css"}
            //projectLiveLink="https://bloggers-arena.vercel.app/"
            projectLink="https://github.com/AdrianJK1/xChangeV1N"
          />
          <ProjectCard
            projectImage={eeg}
            projectName={"¡muchos mas proyectos!"}
            aboutProject={
              "[...]"
            }
            techStack={
              "Mucho en mi github, da clic en el boton de abajo y descubre"
            }
            projectLink="https://github.com/Winrar503?tab=repositories"
          />
          {/* <ProjectCard
            projectImage={mtrans}
            projectName={"Machine Translation"}
            aboutProject={
              "Translated Texts With The Help Of Encoder- Decoder LSTM Model And Attention Mechanism"
            }
            techStack={"LSTM, ENCODER-DECODER, ATTENTION MECHANISM"}
            projectLink="https://github.com/Rahul1582/Bloggers-Arena"
          />
        </SimpleGrid>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="Center"
          mt="40px"
          mb="40px"
        >
          <Text color={textColorPrimary} fontSize="2em" textAlign="center">
            {"<BLOGS/>"}
          </Text>
        </Flex>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          gap="50px"
          alignItems="center"
          justifyContent="center"
        >
          <ProjectCard
            projectImage={steg}
            projectName={"Steganography Blog Part 1"}
            aboutProject={"This blog is about hiding text inside an Image"}
            projectLink="https://rahul1582.medium.com/steganography-6c9af950cbb3"
          />
          <ProjectCard
            projectImage={steg}
            projectName={"Steganography Blog Part 2"}
            aboutProject={"This Blog is about hiding an Image inside an Image"}
            projectLink="https://rahul1582.medium.com/steganography-part-2-ad7452a3ff1"
          /> */}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
