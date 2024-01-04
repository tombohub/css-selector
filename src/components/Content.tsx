import Footer from "./Footer";
import Header from "./Header";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";
import { SimpleGrid, Stack } from "@chakra-ui/react";

export default function Content() {
  return (
    <>
      <Stack height={"100vh"} overflow={"hidden"}>
        <Header />
        <SimpleGrid
          columns={2}
          spacing={2}
          flex={1}
          paddingX={2}
          overflow={"hidden"}
        >
          <LeftPane />
          <RightPane />
        </SimpleGrid>
        <Footer />
      </Stack>
    </>
  );
}
