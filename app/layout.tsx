import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";

import "./styles/globals.css";
import styles from "./styles/layout.module.css";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <section className={styles.container}>
          <header className={`${styles.header} text-4xl m-auto text-center mt-2 mb-0`}>
            <h1>
              Resume Builder
            </h1>
          </header>
          <StoreProvider>
            {children}
          </StoreProvider>
        </section>
      </body>
    </html>
  );
}
