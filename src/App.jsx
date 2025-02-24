import { ThemeProvider } from "./components/theme-provider"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import CustomCursor from "./components/CustomCursor"

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <CustomCursor/>
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </ThemeProvider>
  )
}

