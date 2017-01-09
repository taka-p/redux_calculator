import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';
import NumBtn from '../components/NumBtn';
import PlusBtn from '../components/PlusBtn';
import MinusBtn from '../components/MinusBtn';
import ClearBtn from '../components/ClearBtn';
import EnterBtn from '../components/EnterBtn';
import Result from '../components/Result';

class App extends Component {
  render() {
    // connectでマッピングされたプロパティを抽出
    const { calculator, actions } = this.props;

    return (
      <div>
        <div>
          <NumBtn n={1} onClick={() => actions.onNumClick(1)} />
          <NumBtn n={2} onClick={() => actions.onNumClick(2)} />
          <NumBtn n={3} onClick={() => actions.onNumClick(3)} />
        </div>
        <div>
          <NumBtn n={4} onClick={() => actions.onNumClick(4)} />
          <NumBtn n={5} onClick={() => actions.onNumClick(5)} />
          <NumBtn n={6} onClick={() => actions.onNumClick(6)} />
        </div>
        <div>
          <NumBtn n={7} onClick={() => actions.onNumClick(7)} />
          <NumBtn n={8} onClick={() => actions.onNumClick(8)} />
          <NumBtn n={9} onClick={() => actions.onNumClick(9)} />
        </div>
        <div>
          <NumBtn n={0} onClick={() => actions.onNumClick(0)} />
          <PlusBtn onClick={actions.onPlusClick} />
          <MinusBtn onClick={actions.onMinusClick} />
        </div>
        <div>
          <ClearBtn onClick={actions.onClearClick} />
          <EnterBtn onClick={actions.onEnterClick} />
        </div>
        <Result result={calculator.showingResult ?
          calculator.resultValue : calculator.inputValue} />
      </div>
    );
  }
}

// store.stateをthis.propsとしてマッピング
const mapState = (state, ownProps) => ({
  calculator: state.calculator
});

// dispatch関数にActionCreatorがバインドされたプロパティをマッピング
// function mapDispatchToProps(dispatch) {
//   return {
//     // actionをdispatchするhandleClickプロパティを展開
//     handleClick: () => {
//       dispatch(actionCreator())
//     }
//   }
// }
const mapDispatch = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapState,
  mapDispatch
)(App);
