import { atom } from "jotai";
import { HtmlParser, cssSelect } from "./lib";

/**
 * Initial Html pasted into textarea by user.
 * We always want to have initial html because
 * css selector always works based on this one
 */
export const initialHtmlAtom = atom(`<html>
<head>
<title>Try css selector</title>
</head>
<body>
<p>Go to <a href="https://google.com/">google</a>
to search for something.
</p>
</body>
</html>`);
initialHtmlAtom.debugLabel = "initial-html";

/**
 * css selector string. User typed
 */
export const cssSelectorAtom = atom("a");
cssSelectorAtom.debugLabel = "css-selector";

const htmlParserAtom = atom(get => new HtmlParser(get(initialHtmlAtom)));
htmlParserAtom.debugLabel = "html-parser";

// export const selectedHtmlAtom = atom(get =>
//   get(htmlParserAtom).cssSelect(get(cssSelectorAtom))
// );

/**
 * Selected html based on css selector
 */
export const selectedHtmlAtom = atom(get => {
  return cssSelect(get(initialHtmlAtom), get(cssSelectorAtom));
});

selectedHtmlAtom.debugLabel = "selected-html";
