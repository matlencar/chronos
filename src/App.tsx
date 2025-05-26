import { Container } from "./components/Container";
import { CountDown } from "./components/CountDown";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";


import "./styles/global.css";
import "./styles/theme.css";

export function App() {
  return (
    <>
      {/* vai ter todos os elementos da pagina */}
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>
      
      <Container>
        <CountDown />
      </Container>

      <Container>
        <form action="" className="form">
          <div className="formRow">
            <label htmlFor="input">Task</label>
            <input id="input" type="text" />
          </div>

          <div className="formRow">
            <p>Task task task task task...</p>
            <input id="input" type="text" />
          </div>

          <div className="formRow">
            <p>Ciclos</p>
            <p>0 0 0 0 0 0</p>
          </div>

          <div className="formRow">
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}
