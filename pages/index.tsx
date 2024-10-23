import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { questrialFont } from "@/utils";
import { MainContent, ProgressBar } from "@/components";
import classNames from "classnames";
import { SharedStatesProvider, useQuestions } from "@/contexts";

export default function Home() {
  const { percent } = useQuestions();

  return (
    <>
      <Head>
        <title>ioda Analytics</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Typeform built for a take home assignment."
        />
        <link rel="icon" href="/ioda_melo (1).jpg" />
      </Head>
      <header className={styles.header}>
        <ProgressBar width={percent} />
        <Image
          src="/LOGO IODA ANALYTICS - BLANCO (1).png"
          alt="ioda Analytics"
          width={145}
          height={90}
        />
      </header>
      <main className={classNames(styles.main, questrialFont.className)}>
        <SharedStatesProvider>
          <MainContent />
        </SharedStatesProvider>
      </main>
    </>
  );
}
