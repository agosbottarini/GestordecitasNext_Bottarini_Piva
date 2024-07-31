
/*COSAS PARA HACER
- Chequear form cita (que no se cargue si no esan todos los campos llenos)
*/


import styles from "./page.module.css";
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>

        <div>
          <a>
            By{"  Agostina Bottarini & Joaquin Piva"}
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <h1 style={{position: "relative", fontSize: "2vw"}}>GESTOR DE CITAS</h1>
      </div>

      <div className={styles.grid} style={{display: "flex", justifyContent: "center", paddingLeft: "4vw"}}>

        <Link href="/quienes-somos">
          <div className={styles.card}>
            <h2>
                Quienes somos <span>-&gt;</span>
            </h2>
            <p>Conoce nuestro equipo y nuestra misión para ofrecerte un servicio excepcional.</p>
          </div>
        </Link>

        <Link href="/reservas">
          <div className={styles.card}>
            <h2>
              Reservas <span>-&gt;</span>
            </h2>
            <p>Programa tus citas con nosotros y gestiona tu agenda con facilidad y comodidad.</p>
          </div>
        </Link>

        <Link href="/contacto">
          <div className={styles.card}>
            <h2>
              Contacto <span>-&gt;</span>
            </h2>
            <p>¡Conéctate con nosotros hoy mismo para resolver tus dudas y colaboraciones!</p>
          </div>
        </Link>

      </div>
    </main>
  );
}

