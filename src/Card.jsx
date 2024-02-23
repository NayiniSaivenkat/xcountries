import React from 'react'
import styles from "./Card.module.css";
const Card = ({imageUrl,name}) => {
  return (
    
        <div className={styles.card}>
        
        <img  className={styles.image} src={imageUrl} alt={name}/>
        
        <div>{name}</div>
        </div>
    
  )
}

export default Card