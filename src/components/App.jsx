import '../styles/main.sass';
import Recipes from './Recipes';
import logo from '../img/logo.svg'

const App = () => {
  return (
    <>
      <section className="banner">
        <main>
          <section>
            <h1>SUP, react</h1>
          </section>
          <img src={logo} alt="wheel" width="300" className="logo" />
        </main>
      </section>
      <section className="wheel-box">
        <canvas id='canvas' width='880' height='300'>
          Canvas not supported, use another browser.
        </canvas>
      </section>
      <Recipes />
    </>
  )
}
let theWheel = new Winwheel();

export default App