import { HistoryIcon, HouseIcon, MoonIcon, Settings2Icon, SunIcon } from "lucide-react";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

type AvailbleThemes = 'dark' | 'light';

export function Menu() {

  const [theme, setTheme] = useState<AvailbleThemes>(() => {
    const storageTheme = (localStorage.getItem('theme') as AvailbleThemes) || 'dark';

    return storageTheme;
  });

  const nextTHemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />
  };

  function handleTheme(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) { 
    event.preventDefault();

    setTheme((prevTheme) => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
     })

  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme])

  return (
    <nav className={styles.menu}>
      <a className={styles.menuLink} href="#" aria-label='Ir para a home' title="Ir para a home">
        <HouseIcon />
      </a>
      <a className={styles.menuLink} href="#" aria-label='Ver historico' title="Ver historico">
        <HistoryIcon />
      </a>
      <a className={styles.menuLink} href="#" aria-label='Configurações' title="Configurações">
        <Settings2Icon />
      </a>
      <a className={styles.menuLink} onClick={(event) => handleTheme(event)} href="#" aria-label='Mudar tema' title="Mudar tema">
        {nextTHemeIcon[theme]}
      </a>
    </nav>
  );
}
