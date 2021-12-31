/* eslint react-hooks/exhaustive-deps:off */

// 作法
import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";
// 拡張子はjsでも問題無いが、Reactのコンポ―ネント専用にjsxという拡張子も設けられている
// コンポーネント化したことを明示的にわかりやすくするためにも該当ファイルの拡張子はjsxにしておく方がよい
const App = () => {
  console.log("最初");
  // 初期値(Num)と、更新値(setNum)をそれぞれ代入する
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    console.log("useEffect!!");
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps:off
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは!</h1>
      {/* 5：18あたりのイメージを図解化すること */}
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ!</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(^^)/</p>}
    </>
  );
};

// App.js内に記載した Const Appの関数を他ファイル内でも使用するための記述
export default App;
