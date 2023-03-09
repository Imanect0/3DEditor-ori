<p style="text-align:center"><h1>3D Editorについて</h1></p>

1. Editorの導入方法
2. Editorの表示方法
3. ファイル構造
4. version等

---

<h2>1. Editorの導入方法</h2>

1. [node.js](https://nodejs.org/ja/download/)をインストール

※next.js・three.js等の開発に必要なライブラリはインストール済みです．

<h2>2. Editorの表示方法</h2>

1. githubのdevelopブランチからクローンする．
   
   `git clone -b develop https://github.com/Imanect0/3DEditor-ori.git`

2. 3DEditor-oriディレクトリに入り，ローカルサーバーを立ち上げる

    `npm run dev`

3. [http://localhost:3000/](http://localhost:3000/)にアクセス

<h2>3. ファイル構造</h2>

- /pages/index.tsx

最初に表示されるページ．ここにコンポーネントをimportする．

- /editor

three.jsを開発するディレクトリ

- /feature

UIを開発するディレクトリ

<h2>4. 環境情報</h2>

- next.js            - 12.1.2
- react              - 17.0.2
- three.js           - 0.150.1
- typescript         - 4.9.5
- material-ui        - MUI5
- react-three-fiver  - 7.0.6
- react-three-drei   - 7.5.1

※[package.json](https://github.com/Imanect0/3DEditor-ori/blob/develop/package.json)参照