// JavaScriptの中でhtmlタグを記載し、returnしつつ描画していく記法をJSX記法と呼ぶ
// 必ずはじめに読み込む import React from "react";
import React from "react";
import ReactDom from "react-dom";

// App.jsファイルからApp関数を読み込み、index.jsで使用できるようにする
// コンポーネント化してindex.jsで使用できるようにした..ということになる
import App from "./App.jsx";
// returnするhtmlタグのトップレベルの親要素は1つにする必要がある(ルール)
// 単にトップレベルの要素を1つにするためにdivを設置すると不要な要素がレンダリングされるため、それを回避する(不要な親タグをレンダリングさせずにreturnする)方法としてReact.Fragmentが使用できる
//さらにReact.Fragmentの省略形としてトップレベルの要素に<></>とすることで同様の処理結果を得られる

// Appの中身をReactDomライブラリのrender()関数を使用して描画する
ReactDom.render(<App />, document.getElementById("root"));
