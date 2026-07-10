import styles from "./styles.module.css"
import { Letters } from "../Letters"

export function LettersUser(){
  return (
    <div className= {styles.lettersUsed}>
      <h5>Letras Utilizadas</h5>

      <div>
        <Letters value="R" size="small" color="correct"/>
        <Letters value="E" size="small" color="wrong"/>
        <Letters value="A" size="small"/>
        <Letters value="C" size="small"/>
        <Letters value="T" size="small"/>
      </div>
    </div>
  )
}