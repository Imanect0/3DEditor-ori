import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import * as THREE from "three/src/Three";

import { Stack } from "@mui/material";

import Editor from "./editor";
import BasicMenu from "./feature/header/menu_file";
import TemporaryDrawer from "./feature/drawer";
import HeaderNav from "./feature/header/header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Stack direction="row">
          <HeaderNav />
          <TemporaryDrawer />
        </Stack>

        <Editor />
      </main>
    </>
  );
}
