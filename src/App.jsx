// 作法
import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";
// 拡張子はjsでも問題無いが、Reactのコンポ―ネント専用にjsxという拡張子も設けられている
// コンポーネント化したことを明示的にわかりやすくするためにも該当ファイルの拡張子はjsxにしておく方がよい
const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const [num, setNum] = useState(0);
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは!</h1>
      {/* 5：18あたりのイメージを図解化すること */}
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ!</button>
      <p>{num}</p>
    </>
  );
};

// App.js内に記載した Const Appの関数を他ファイル内でも使用するための記述
export default App;
