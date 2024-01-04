import { useAtom } from "jotai";
import { selectedHtmlAtom } from "../store";
import { Card, Stack } from "@chakra-ui/react";

export default function RightPane() {
  const [selectedHtmlList] = useAtom(selectedHtmlAtom);
  return (
    <>
      <Stack overflow={"auto"}>
        {selectedHtmlList?.map(html => (
          <Card padding={2}>{html}</Card>
        ))}
      </Stack>
    </>
  );
}
