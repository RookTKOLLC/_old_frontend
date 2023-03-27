import * as React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/react"


const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
}

// markup
const GamesPage = () => {
    return (
        <main >
      <title>asdasdnd</title>
      <h1 css={css`
        color: var(--text);
      `}>Page not found</h1>
      <p css={css`
        color: var(--text);
      `}>
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          asdasdasdasd
        </span>{" "}
        we couldn’t find what you were looking for.
        <br />
        <br />
        <Link to="/">Go home</Link>
      </p>
        </main>
    )
}

export default GamesPage