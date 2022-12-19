import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import TEMPLATE from "../data/ejs/template";
import { LegacyRef, RefObject, useEffect, useRef } from "react";

import EJS from "ejs";
import { useReactToPrint } from "react-to-print";

const Home: NextPage = () => {
  const templateRef = useRef<HTMLDivElement>(null);

  const renderEjs = () => {
    const data = {
      test: 'Hola Mundo!'
    }

    if (templateRef.current !== null) {
      templateRef.current.innerHTML = EJS.render(TEMPLATE, {
        ...data,
      });
    }
  };

  const handlePrint = useReactToPrint({
    content: () => templateRef.current,
  });

  useEffect(() => {
    renderEjs();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Ejs Preview</title>
        <meta name="description" content="Preview Ejs in real time" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <button onClick={() => handlePrint()}>Print</button>
        </div>
        <div
          style={{
            fontWeight: "400",
            color: "#212529",
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "Flexicar" !important',
            margin: "3rem",
            lineHeight: "1.8 !important",
          }}
          ref={templateRef}
        ></div>
      </main>
    </div>
  );
};

export default Home;
