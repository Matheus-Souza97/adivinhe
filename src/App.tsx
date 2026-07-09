import { Header } from "./components/Header"
import { Tip } from "./components/Tip"
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
    </main>

    
      
    </div>
  )
}