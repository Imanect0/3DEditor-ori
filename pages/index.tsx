import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, { useState, useEffect, useRef }  from 'react';
import * as THREE from 'three/src/Three';
import styles from '../styles/Home.module.css'
import Button from '@material-ui/core/Button';

import Tab from "./feature/tab";
import Editor from './editor';
import ClickMenu from "./feature/clickMenu";
import GetClickedObject from "./feature/getClickedObject";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Tab />
      <Editor />
        <ClickMenu /> {/* ui担当sho800追加*/}
    </div>
  )
}

export default Home
