import React from 'react';
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Container from "./containers/App.js";
import reducer from './reducers'

/** データの流れ
 * - 初期化 -
 * 1. Providerのstore -> reducerのstate(action無し)
 * 2. connect -> Containerのprops
 *
 * - イベント発生 -
 * 1. ContainerのonClickからactions.hogeを呼び出し(dispatch)
 * 2. Providerのstore -> reducerのstate(action付き)
 * 3. connect -> Containerのprops
**/

const store = createStore(reducer);

render(
  <Provider store={ store }>
    <Container />
  </Provider>,
  document.getElementById("root")
);
