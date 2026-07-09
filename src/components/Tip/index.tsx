import styles from "./styles.module.css"
import tipIcon from "../../assets/tip.svg"

type Porps = {
  tip: string
}

export function Tip({tip}: Porps) {
  return (
    <div className={styles.tip}> 
      <img src={tipIcon} alt="icone de dica" />

      <div>
        <h3>Dica</h3>
        <p>{tip}</p>
      </div>
    </div>
  )
}