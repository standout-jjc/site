import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import {runInAction} from "mobx";
import Link from 'next/link'
import {inject, observer} from "mobx-react";
import Head from 'next/head';
import React from 'react';
import {ThemeStore} from "../stores";

interface Props {
  themeStore: ThemeStore
}

@inject('themeStore') @observer
class Home extends React.PureComponent<Props> {

  render() {
    return (
      <React.Fragment>
        <Head>
          <title>夏阳BLOG</title>
        </Head>
        <Box>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About Us</a>
              </Link>
            </li>
          </ul>
          <Button variant="contained" color="primary">
            你好，世界
          </Button>
          <Button variant="contained" color="secondary">
            你好，世界
          </Button>
        </Box>
      </React.Fragment>
    );
  }
}

export default Home;
// 8ddc5499401ec410788e70af7aab9bde87e846c8
// aab8c8caf7e4d4603953389b4f070257c1d9a9d0
// ssh://github.com:standout-jjc/xiayang-blog.git
