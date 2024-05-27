## パッケージインストール

### マテリアル UI

`npm add @mui/icons-material @mui/material @emotion/styled @emotion/react`

### テキストコンテンツのトリミング（切り詰め）とクランプ（折り畳み）を実現するためのプラグインパッケージ

`npm install @tailwindcss/line-clamp`<br>
このプラグインを使用すると、指定した行数までテキストを表示し、それを超えた部分を「...」（省略符号）で表示することができます。<br>

### React Spring の web パッケージ

`npm i @react-spring/web`<br>
React Spring は、アニメーションを制御するためのライブラリであり、Web アプリケーションやコンポーネントにアニメーションを追加することができます。

### マテリアル UI 追加パッケージ

`npm add @mui/lab`

### 画像動画スライダー用のパッケージ

`npm i swiper`

### クッキーのパッケージ

`npm add nookies --legacy-peer-deps`

`nookies`はNext.jsで`クライアント側`でも`server側`でも簡単にcookiesを扱えるライブラリーです。

## Docker 環境構築

`docker-compose build`<br>
`docker-compose up -d`<br>

### rails 用のターミナル用意

`docker-compose exec rails bash`

### postgresql 用のターミナル用意

- ログインからデータベース移動までの流れ<br>
  `docker-compose exec postgresql bash`<br>
  `psql -h postgresql -U postgres`<br>
  `Password for user postgres: password`<br>
  `\c rails_development`<br>
- ダミーデータの確認<br>
  `select * from users;`<br>
  `select * from customers;`
