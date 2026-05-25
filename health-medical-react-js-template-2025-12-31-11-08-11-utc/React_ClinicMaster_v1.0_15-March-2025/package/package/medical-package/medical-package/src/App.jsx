import { useEffect } from "react";
import "../src/assets/css/style.css";
import Root from "./route/route";
import 'swiper/css';

function App() {
  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme-color', 'skin-1')
    document.querySelector('html').setAttribute('class', 'skrollr skrollr-desktop')
    document.querySelector('body').setAttribute('id', 'bg')
  }, [])

  return (
    <>
      <Root />
    </>
  )
}
export default App
