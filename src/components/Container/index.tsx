import styles from './styles.module.css';

type ContainerProps = { 
    children?: React.ReactNode;
}


export function Container({ children }: ContainerProps) {
  return (
    <div className={styles.container}>
        {/* conteudo da pagina */}
        <div className={styles.content}>
          <section>
            {children}
          </section>
        </div>
      </div>
  );
}