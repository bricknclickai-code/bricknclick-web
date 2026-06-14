import { Fragment, type ReactNode } from "react";

const ACRONYM = "EOIs";

/**
 * Renders label text while forcing the "EOIs" acronym to always display as
 * "EOIs" — immune to the surrounding CSS text-transform. Mono labels uppercase
 * their text (which would show "EOIS") and some overlays lowercase it (showing
 * "eois"); the acronym is wrapped in `normal-case` so it survives both.
 *
 * Labels without the acronym pass straight through, so this is safe to apply to
 * every label in a mapped list.
 *
 * @param transform pass "lower" to lowercase the NON-acronym parts in JS, for
 *   callers that previously used `.toLowerCase()` and want to keep that look.
 */
export function eoiLabel(text: string, transform?: "lower"): ReactNode {
  if (!text.includes(ACRONYM)) {
    return transform === "lower" ? text.toLowerCase() : text;
  }
  return text.split(/(EOIs)/g).map((part, i) => {
    if (part === ACRONYM) {
      return (
        <span key={i} className="normal-case">
          {part}
        </span>
      );
    }
    return (
      <Fragment key={i}>
        {transform === "lower" ? part.toLowerCase() : part}
      </Fragment>
    );
  });
}
