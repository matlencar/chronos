import styles from "./styles.module.css";

type HeadingProps = {
  children?: string | React.ReactNode;
};

export function Heading({ children }: HeadingProps) {
  return (
    <>
      <h1 className={styles.heading}>{children}</h1>
    </>
  );
}
