import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    // ES2015からのルールでkeyとvalueが同じ表記であった場合、片側は省略できる
    color,
    fontSize: "18px"
  };

  return (
    <>
      {/* props.messageとして設定もできるし、props.childrenとして設定も可 */}
      <p style={contentStyle}>{children}</p>
    </>
  );
};
// 下記のような記載ではなく、export const 関数のように直接設定することができる
// export default ColorfulMessage;
