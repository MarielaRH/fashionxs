import styles from '@/styles/components/Button.module.css'

 type PropsType = { 
    label: string,
    handler?: () => void  
}

const Button = ({ label, handler }: PropsType) => {
  return (
    <button className={styles.button} onClick={handler}>
      <span className={styles.button_borders}>
        <span className={styles.button_fill}></span>
        <span className={styles.button_text}>{label.toUpperCase()}</span>
      </span>
    </button>
  );
};

export default Button;
