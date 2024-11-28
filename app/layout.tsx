import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";

import "./styles/globals.css";
import styles from "./styles/layout.module.css";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={styles.layout}>
      <body>
        <section className='pb-[200px]'>
          <header className={`${styles.header} print:hidden text-4xl m-auto text-center mt-2 mb-6`}>
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
