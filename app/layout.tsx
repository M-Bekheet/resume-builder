import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";

import "./styles/globals.css";
import styles from "./styles/layout.module.css";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <section className={styles.container}>

            <header className={styles.header}>
              Resume Builder
            </header>

            <main className={styles.main}>{children}</main>

          </section>
        </body>
      </html>
    </StoreProvider>
  );
}
