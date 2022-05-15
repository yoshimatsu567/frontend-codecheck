# ゆめみフロントエンドコーディング試験
[都道府県別の総人口推移グラフを表示するSPA(Single Page Application)を構築せよ](https://notion.yumemi.co.jp/0e9ef27b55704d7882aab55cc86c999d)

## デプロイ先
https://yumemi-frontend-codecheck.vercel.app/

## 環境・使用技術
yarn (1.22.10)  
Node.js (16.12.0)  

react (18.1.0)  
typescript (4.6.3)  
next (12.1.6)  
recoil (0.7.2)  
react-error-boundary (3.1.4)

styled-components (5.3.5)  
axios (0.26.1)  
highcharts (10.0.0)
   highcharts-react-official (3.1.0)  

eslint (8.13.0)  
prettier (2.6.2)

## ローカルでの動作確認

```zsh
git clone https://github.com/yoshimatsu567/yumemi-frontend-codecheck.git
cd yumemi-frontend-codecheck
yarn install
```


[RESAS API](https://opendata.resas-portal.go.jp) で利用登録し、API キーを取得する。

```zsh
touch .env.local
```

`.env.local.sample`を参考にして、`.env.local` に API キーを設定する。
```env
NEXT_PUBLIC_API_KEY=
```

ここまで完了すると、`yarn dev` で developmentサーバーが起動し、`http://localhost:3001/` で　動作確認できる。

## scripts

### developmentサーバーで起動(Eslint & Prettier実行される)
```zsh
yarn dev
```
### production用ビルド
```zsh
yarn build
```
### productionサーバーで起動（実行前に`yarn dev`を行う必要がある。）
```zsh
yarn start
```
### Eslint & Prettier実行
```zsh
yarn clean
```
### Eslint実行
```zsh
yarn lint
```
### Prettier実行
```zsh
yarn format
```

## コーディングで注意した点など
- アプリケーションで統一して使用する用に、色やフォントサイズ等定義しました。
- 都道府県データはビルド時に取得するようにし、初期描画が速くなるようにしました。
- 都道府県の人口データは一度取得した場合localのstateで保持し、無駄にAPIを実行しないようにしました。
- 使用するRESAS-APIを複数の箇所で直接呼び出さず、定義したものを呼び出すようにしました。
