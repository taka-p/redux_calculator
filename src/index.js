import React from 'react';
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Container from "./containers/App.js";
import reducer from './reducers'

/** データの流れ
 * - 初期化 -
 * 1. Providerのstoreからaction無しでstoreを呼び出し
 * 2. store -> connectにstateを返す
 * 3. Containerにプロパティを展開
 *
 * - イベント発生 -
 * 1. ContainerのonClick -> ActionCreatorを呼び出し
 * 2. ActionCreator -> Actionを発行
 * 3. bindActionCreators -> connectにActionをマッピング
 * 4. connect -> storeにActionをdispatch
 * 5. store -> connectにstateを返す
 * 6. Containerにプロパティを展開
**/

const store = createStore(reducer);

render(
  <Provider store={ store }>
    <Container />
  </Provider>,
  document.getElementById("root")
);
