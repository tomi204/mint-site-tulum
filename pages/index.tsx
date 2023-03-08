import { ConnectWallet } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import NFT from "../components/NFT";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>RainbowKit App</title>
        <meta
          content="Generated by @rainbow-me/create-rainbowkit"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <nav className=" flex flex-col justify-between  items-center inset-x-0 top-0 ">
        <ConnectWallet />
      </nav>

      <main className="flex flex-col w-full items-center justify-center">
        <NFT />
      </main>

      <footer className={styles.footer}>
        <a href="https://rainbow.me" rel="noopener noreferrer" target="_blank">
          Made with by
        </a>
      </footer>
    </div>
  );
};

export default Home;
