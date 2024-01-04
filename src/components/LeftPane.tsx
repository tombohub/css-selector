import { initialHtmlAtom, cssSelectorAtom } from "../store";
import { useAtom } from "jotai";
import { Input, Textarea, Stack } from "@chakra-ui/react";
import { useDebouncedCallback } from "use-debounce";

export default function LeftPane() {
  const [initalHtml, setInitialHtml] = useAtom(initialHtmlAtom);
  const [cssSelector, setCssSelector] = useAtom(cssSelectorAtom);
  const debouncedOnChange = useDebouncedCallback(
    (val: string) => setCssSelector(val),
    500
  );

  return (
    <>
      <Stack overflow={"auto"}>
        <Textarea
          value={initalHtml}
          onChange={e => setInitialHtml(e.target.value)}
          placeholder="paste your html here..."
          flex={1}
          overflow={"auto"}
          resize={"none"}
        />
        <Input
          defaultValue={cssSelector}
          type="text"
          onChange={e => debouncedOnChange(e.target.value)}
          placeholder="start typing css selector..."
        />
      </Stack>
    </>
  );
}
