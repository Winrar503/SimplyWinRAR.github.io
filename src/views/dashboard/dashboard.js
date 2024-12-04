import { React, useState, useEffect } from "react";
import {
  Flex,
  Box,
  Text,
  Grid,
  useColorModeValue,
  useStyleConfig,
  Skeleton,
} from "@chakra-ui/react";
import "react-lazy-load-image-component/src/effects/blur.css";
import Navbar from "../../components/Navbar/Navbar";
import routes from "../../routes";
import dashboardimg from "../../assets/dashboard.gif";
import Typewriter from "typewriter-effect";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Dashboard() {
  const [loadedDashboardimg, setloadedDashboardimg] = useState(false);
  const styles = useStyleConfig("Card");
  let highlightTextColor = useColorModeValue("lightblue.100", "lightpeach.100");
  let textColor = useColorModeValue("gray.700", "white");
  let quotes = [
    {
      text: "El genio es un uno por ciento de inspiración y un noventa y nueve por ciento de transpiración.",
      author: "Thomas Edison, type.fit",
    },
    {
      text: "Se pueden observar muchas cosas simplemente observando.",
      author: "Yogi Berra, type.fit",
    },
    {
      text: "Una casa dividida contra sí misma no puede perdurar.",
      author: "Abraham Lincoln, type.fit",
    },
    {
      text: "Las dificultades aumentan cuanto más nos acercamos a la meta.",
      author: "Johann Wolfgang von Goethe, type.fit",
    },
    {
      text: "El destino está en tus manos y en las de nadie más.",
      author: "Byron Pulsifer, type.fit",
    },
    {
      text: "Sé el jefe pero nunca el señor..",
      author: "Lao Tzu, type.fit",
    },
    {
      text: "Nada sucede si primero no soñamos.",
      author: "Carl Sandburg, type.fit",
    },
    {
      text: "Bien comenzado es medio hecho.",
      author: "Aristotle, type.fit",
    },
    {
      text: "La vida es una experiencia de aprendizaje, sólo si aprendes.",
      author: "Yogi Berra",
    },
    {
      text: "La autocomplacencia es fatal para el progreso.",
      author: "Margaret Sangster, type.fit",
    },
    {
      text: "La paz viene de dentro. No la busques fuera.",
      author: "Buddha, type.fit",
    },
    {
      text: "Lo que das es lo que recibes.",
      author: "Byron Pulsifer, type.fit",
    },
    {
      text: "Sólo podemos aprender a amar amando.",
      author: "Iris Murdoch, type.fit",
    },
    {
      text: "La vida es cambio. El crecimiento es opcional. Elige sabiamente.",
      author: "Karen Clark, type.fit",
    },
    {
      text: "Lo verás cuando lo creas.",
      author: "Wayne Dyer, type.fit",
    },
    {
      text: "Hoy es el mañana por el que nos preocupamos ayer.",
      author: "type.fit",
    },
  ];

  let randomNumber = Math.floor(Math.random() * quotes.length);

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
      <Box pt={{ base: "60px", md: "80px", xl: "10px" }}>
        <Flex direction="row" justifyContent="center" alignItems="center">
          <Grid
            templateColumns={{
              base: "1fr",
              lg: "1fr 1fr",
            }}
            templateRows={{
              base: "repeat(2, 0.5fr)",
              lg: "1fr",
            }}
            gap={{ xl: "20px" }}
          >
            <Box
              pt={{ xl: "100px" }}
              pl="10px"
              textAlign="center"
              fontSize={{ sm: "1.5em", md: "3em", xl: "2.5em" }}
            >
              <Flex
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Box __css={styles} border="none">
                  <Text
                    fontFamily="Lobster Two"
                    fontWeight="bold"
                    color={textColor}
                  >
                    Hola a todos!! 🙋🏻‍♂️
                  </Text>

                  <Text
                    fontFamily="Lobster Two"
                    fontWeight="bold"
                    color={textColor}
                    mt="20px"
                  >
                    Esto es mi{" "}
                    <Text display="inline-flex" color={highlightTextColor}>
                      portafolio
                    </Text>
                  </Text>
                  <Text
                    fontFamily="Lobster Two"
                    fontWeight="bold"
                    color={textColor}
                    mt="20px"
                  >
                    y soy un{" "}
                    <Text display="inline-flex" color={highlightTextColor}>
                      desarrollador de software
                    </Text>
                  </Text>
                </Box>
              </Flex>
            </Box>
            <Flex
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Skeleton
                height={loadedDashboardimg ? "100%" : "50%"}
                isLoaded={loadedDashboardimg}
                color="white"
                fadeDuration={1}
              >
                <LazyLoadImage
                  src={dashboardimg}
                  alt="dashboard"
                  effect="blur"
                  onLoad={() => setloadedDashboardimg(true)}
                />
              </Skeleton>
            </Flex>
          </Grid>
        </Flex>

        <Flex direction="column" justifyContent="center" alignItems="center">
          <Box
            __css={styles}
            border="none"
            textAlign="center"
            cursor="default"
            mt="20px"
          >
            Citas Aleatorio
            <Box
              fontSize={{ sm: "1em", md: "1.3em", xl: "1.3em" }}
              color={highlightTextColor}
              cursor="default"
            >
              {quotes[randomNumber]?.text ? (
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter.typeString(quotes[randomNumber]?.text).start();
                  }}
                />
              ) : (
                <span>|</span>
              )}
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
