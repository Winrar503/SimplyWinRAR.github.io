import { React, useEffect } from "react";
import routes from "../../routes";
import Navbar from "../../components/Navbar/Navbar";
import { Box, useStyleConfig, Flex, Button } from "@chakra-ui/react";

export default function Resume() {
  const styles = useStyleConfig("Card");

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

  // const handleDownload = () => {
  //   window.location.href =
  //     "https://drive.google.com/uc?export=download&id=15WSX7cweYh95KrsTlv1NsJcqk0K6nGr2";
  // };
  const handleDownload = () => {
    window.location.href =
      "https://drive.google.com/uc?export=download&id=1jAxj9AJ9rCQZiit50r0WzLigUEUv-2XC";
  };

  return (
    <Box>
      <Navbar displayText={getActiveRoute(routes)} />
      <Box pt={{ base: "40px", md: "80px", xl: "80px" }}>
        <Flex justifyContent="center" alignItems="center">
          <Box
            __css={styles}
            width={{ base: "100%", md: "70%", xl: "70%" }}
            height={{ base: "60vh", md: "100vh", xl: "150vh" }}
            overflow="hidden"
            borderRadius="md"
          >


            {/* <iframe
              // https://drive.google.com/file/d/1jAxj9AJ9rCQZiit50r0WzLigUEUv-2XC/view"
              title="Resume"
              width="100%"
              height="100%"
              style={{ border: "5px solid" }}
              loading="lazy"
            ></iframe> */}


            <iframe
              src="https://drive.google.com/file/d/1jAxj9AJ9rCQZiit50r0WzLigUEUv-2XC/preview"
              title="Resume"
              width="100%"
              height="100%"
              style={{ border: "5px solid" }}
              loading="lazy"
            ></iframe>



          </Box>
        </Flex>
        <Flex justifyContent="center" alignItems="center" mt="20px">
          <Button
            onClick={handleDownload}
            variant="darkBrand"
            fontSize="sm"
            fontFamily="DM Sans"
          >
            Descarga curriculun
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}
