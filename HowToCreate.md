# How to create this repository

```sh
npm i -g @angular/cli
```

```sh
ng new frontend-demo-chat-client-angular --routing

? Which stylesheet format would you like to use? CSS
```

起動の仕方

```sh
ng serve --open
```

`--open`をつけると自動的にブラウザを開く。

## コンポーネントの追加方法

```sh
ng g component channel
```

## モデルの追加方法

取得するメッセージ用の型定義ファイルを作成する場合などで行う。

```sh
ng g interface shared/models/User
```

## サービスの追加方法

```sh
ng g service services/message
```
