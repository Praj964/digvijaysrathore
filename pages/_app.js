import "../styles/globals.css"
import "../styles/projects.css"
import "../styles/posts.css"
import { ThemeProvider } from "../utils/theme"

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
