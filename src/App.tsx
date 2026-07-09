import { Header } from "./components/Header"
import { Tip } from "./components/Tip"
import { Letters } from "./components/Letters"
import { Input } from "./components/Input"
import styles from "./app.module.css"

export default function App() {

  function handleRestartGame() {
    alert("Reiniciar Jogo!")
  }
  return (
    <div className={styles.container}>
    <main>
      <Header current={5} max={10} onRestart={handleRestartGame}/>

      <Tip tip="Linguagem de programacao web mais utilizada "/>

      <div className= {styles.word}>
      <Letters value="R"/>
      <Letters value="E"/>
      <Letters value="A"/>
      <Letters value="C"/>
      <Letters value="T"/>
      </div>

      <h4>Palpite</h4>

      <div>

        <Input autoFocus maxLength={1} placeholder="?"/>

      </div>
    </main>

    
      
    </div>
  )
}