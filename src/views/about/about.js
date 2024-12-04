import { React, useState, useEffect } from "react";
import {
  Box,
  Flex,
  SimpleGrid,
  Grid,
  useStyleConfig,
  Text,
  useColorModeValue,
  useColorMode,
  Icon,
  Button,
  Link,
  Skeleton
} from "@chakra-ui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { MdFlightTakeoff } from "react-icons/md";
import { LiaDrumSolid } from "react-icons/lia";
import { GiCricketBat } from "react-icons/gi";
import Navbar from "../../components/Navbar/Navbar";
import routes from "../../routes";
import TechStackCard from "../../components/techStackCard/techStackCard";
import AboutMeInfo from "../../components/aboutMeInfo/aboutMeInfo";
//import angular from "../../assets/icons/angular.svg";
import typescript from "../../assets/icons/typescript.svg";
import node from "../../assets/icons/nodejs.svg";
import mongo from "../../assets/icons/mongodb.svg";
import js from "../../assets/icons/javascript.svg";
import sharp from "../../assets/icons/csharp.png";
import javas from "../../assets/icons/java.png";
import github from "../../assets/icons/github.png";
import react from "../../assets/icons/react.svg";
import html from "../../assets/icons/html.svg";
import css from "../../assets/icons/css3.svg";
import git from "../../assets/icons/git.svg";
import gitlab from "../../assets/icons/gitlab.svg";
import express from "../../assets/icons/express.svg";
import myphoto from "../../assets/Imagen de WhatsApp 2024-12-03 a las 10.49.55_1ca441bc.jpg";
import GitHubCalendar from "react-github-calendar";

export default function About() {
  const [loadedProfileimg, setloadedProfileimg] = useState(false);
  const [loadedgithubimg, setloadedgithubimg] = useState(false);
  const styles = useStyleConfig("Card");
  const { colorMode } = useColorMode();
  const textColorPrimary = useColorModeValue("lightblue.100", "lightpeach.100");
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
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
      <Box pt={{ base: "40px", md: "80px", xl: "80px" }}>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
        >
          {/* <TypeAnimation
            sequence={["ABOUT ME", 500, "ABOUT", 500, "ABOUT ME", 500]}
            style={{ fontSize: "3em" }}
            cursor={false}
          /> */}
          <Grid
            templateColumns={{
              base: "1fr",
              lg: "1.34fr 1.62fr"
            }}
            templateRows={{
              lg: "1fr"
            }}
            gap={{ base: "20px", xl: "20px" }}
          >
            <Box
              position="relative"
              w={{ base: "100%", "3xl": "100%" }}
              h={{ base: "100%", "3xl": "250px" }}
              borderRadius="20px"
              p="20px"
              overflow="hidden"
            >
              <Box
                __css={styles}
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                bg={textColorPrimary}
                transform="rotate(4deg)"
              // zIndex="-1"
              />
              <Skeleton
                height="100%"
                isLoaded={loadedProfileimg}
                color="white"
                fadeDuration={1}
              >
                <LazyLoadImage
                  src={myphoto}
                  width="100%"
                  height="100%"
                  alt="Image Alt"
                  effect="blur"
                  style={{ height: "100%" }}
                  onLoad={() => setloadedProfileimg(true)}
                />
              </Skeleton>
            </Box>
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Box __css={styles} border="none" bg="transparent">
                <Text
                  color={textColorPrimary}
                  fontSize="2xl"
                  mb="40px"
                  textAlign="center"
                >
                  {"<Informacion General/>"}
                </Text>
                <SimpleGrid columns="2" gap="20px">
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Organizacion actual"
                    value="En busqueda de trabajo"
                  />
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Designacion"
                    value="Desarrollador de software"
                  />
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Ubicacion"
                    value="Sonsonate, El Salvador"
                  />
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Educacion"
                    value="Tecnico en ingenieria de desarrollo en software "
                  />
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Grado"
                    value="Alumno"
                  />
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Idiomas"
                    value="English(En proceso), Español, Italiano(En proceso)"
                  />
                </SimpleGrid>
              </Box>
            </Flex>
          </Grid>
        </Flex>

        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
        >
          <Text color={textColorPrimary} fontSize="2em" textAlign="center">
            {"<Mis habilidades/>"}
          </Text>
        </Flex>
        <SimpleGrid
          columns={{ base: 2, md: 2, lg: 3, xl: 6, "2xl": 6 }}
          gap="20px"
          mb="20px"
          align={{ base: "center", xl: "center" }}
          justify={{ base: "center", xl: "center" }}
        >
          <TechStackCard imagepath={js} />
          <TechStackCard imagepath={sharp} />
          <TechStackCard imagepath={javas} />
          <TechStackCard imagepath={github} />  
          <TechStackCard imagepath={express} background="white" />
          <TechStackCard imagepath={git} />
          <TechStackCard imagepath={html} />
          <TechStackCard imagepath={css} />
        </SimpleGrid>
        <Text color={textColorPrimary} fontSize="2em" textAlign="center">
            {"<En Aprendisaje/>"}
          </Text>
        <SimpleGrid
          columns={{ base: 2, md: 2, lg: 3, xl: 6, "2xl": 6 }}
          gap="20px"
          mb="20px"
          align={{ base: "center", xl: "center" }}
          justify={{ base: "center", xl: "center" }}
        >
          {/* <TechStackCard imagepath={angular} /> */}
          <TechStackCard imagepath={react} />
          <TechStackCard imagepath={node} /> 
          <TechStackCard imagepath={gitlab} />
          <TechStackCard imagepath={typescript} />
          <TechStackCard imagepath={express} background="white" />
        </SimpleGrid>

        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
          mt="40px"
        >
          <Text color={textColorPrimary} fontSize="2em" textAlign="center">
            {"<MIS CONTRIBUCIONES A GITHUB/>"}
          </Text>
        </Flex>
        <Box display="flex" justifyContent="center" alignItems="center">
          <GitHubCalendar
            username="rahul1582"
            colorScheme={colorMode === "light" ? "light" : "dark"}
            year="last"
          />
        </Box>
        <Flex justifyContent="center" alignItems="center" mt="20px">
          <Skeleton
            height="100%"
            isLoaded={loadedgithubimg}
            color="white"
            fadeDuration={1}
          >
            <LazyLoadImage
              src={
                colorMode === "light"
                  ? "https://github-readme-streak-stats.herokuapp.com?user=Rahul1582&theme=whatsapp-light&hide_border=true&border_radius=5.8&date_format=j%20M%5B%20Y%5D"
                  : "https://github-readme-streak-stats.herokuapp.com?user=Rahul1582&theme=calm-pink&hide_border=true&border_radius=5.8&date_format=j%20M%5B%20Y%5D"
              }
              alt="GitHub Streak"
              effect="blur"
              onLoad={() => setloadedgithubimg(true)}
            />
          </Skeleton>
        </Flex>
        <Flex justifyContent="center" alignItems="center" mt="20px">
          <Link href="https://github.com/Winrar503" target="blank">
            <Button variant="darkBrand" fontSize="sm" fontFamily="DM Sans">
              Visit Github
            </Button>
          </Link>
        </Flex>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
          mt="40px"
        >
          <Text color={textColorPrimary} fontSize="2em" textAlign="center">
            {"<Mis intereses y pasa tiempos/>"}
          </Text>
        </Flex>
        <SimpleGrid
          columns={{ base: 1, xl: 3, "2xl": 3 }}
          gap="20px"
          mb="20px"
          align={{ base: "center", xl: "center" }}
          justify={{ base: "center", xl: "center" }}
        >
          <Box __css={styles}>
            <Box textAlign="center">
              <Icon
                as={MdFlightTakeoff}
                width="30px"
                height="30px"
                color="inherit"
              />
            </Box>
            <Text textAlign="center">Explorar</Text>
            <Text color={textColorPrimary} textAlign="center" mt="5px">
            Soy bastante curioso, me gusta explorar la naturaleza
            tambien me gusta explorar el lado de lo ficticio, mis sueños mas
            grandes seria viajar a Japon, Tokio
            tambien me gustaria someterne aun mas en a programacion y en lo
            cientifico,
            me gusta viajar en rutas en moto, tambien en carro, amo explorar
            por el internet el espacio exterior,
            soy fan de los astros de los cielos, todo lo de la nasa, amo tomar
            fotos a atardeceres, amaneceres y paisajes.
            </Text>
          </Box>
          <Box __css={styles}>
            <Box textAlign="center">
              <Icon
                as={LiaDrumSolid}
                width="30px"
                height="30px"
                color="inherit"
              />
            </Box>
            <Text textAlign="center">Musico</Text>
            <Text color={textColorPrimary} textAlign="center" mt="5px">
            Tengo una profunda pasión por tocar la guitrra, que ha sido un
            pasatiempo preciado para mí durante muchos años. Los ritmos y
            la sensación de estar en sincronía con la música me brindan una
            sensación de alegría y expresión creativa que es verdaderamente
            incomparable. Ya sea tocando con amigos, explorando nuevas
            técnicas o simplemente tocando la guitarra al ritmo de mis
            canciones favoritas, ¡encuentro una inmensa satisfacción
            y relajación en esta actividad musical!
            </Text>
          </Box>
          <Box __css={styles}>
            <Box textAlign="center">
              <Icon
                as={GiCricketBat}
                width="30px"
                height="30px"
                color="inherit"
              />
            </Box>
            <Text textAlign="center">Deporte</Text>
            <Text color={textColorPrimary} textAlign="center" mt="5px">
            Apasionado por la velocidad y la adrenalina,
            disfruto explorar el mundo de los motores en todas sus
            formas. Amante de las motos deportivas y los autos de alto
            rendimiento, sigo de cerca competiciones como MotoGP,
            Fórmula 1 y eventos de drift. Me interesa el diseño, la
            ingeniería y el arte detrás de los motores de alto
            cilindraje, así como la emoción de las carreras. En mis ratos
            libres, me gusta aprender sobre tecnologías automotrices,
            asistir a eventos relacionados y explorar rutas en mi moto.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
