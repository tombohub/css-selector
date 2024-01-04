import Content from "./components/Content";
import { ChakraProvider } from "@chakra-ui/react";
import { DevTools } from "jotai-devtools";

export default function App() {
  return (
    <ChakraProvider>
      <DevTools />
      <Content />
    </ChakraProvider>
  );
}
