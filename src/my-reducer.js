export function createStore(reducer) {
  if (typeof reducer !== "function")
    throw new Error("Expected the root reducer to be a function");
  let state,
    listeners = [];

  const getState = function getState() {
    return state;
  };

  const subscribe = function subscribe(listener) {
    // 规则校验
    if (typeof listener !== "function")
      throw new TypeError("Expected the listener to be a function");
    // 把传入的方法(让组件更新的办法)加入到事件池中「需要做去重处理」
    if (!listeners.includes(listener)) {
      listeners.push(listener);
    }

    return function unsubscribe() {
      let index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  };

  const dispatch = function dispatch(action) {
    // 规则校验
    if (typeof action !== "object")
      throw new TypeError("Actions must be plain objects");
    if (typeof action.type === "undefined")
      throw new TypeError("Actions may not have an undefined 'type' property");

    state = reducer(state, action);
    listeners.forEach((listener) => {
      // 执行所有事件池回调
      console.log("执行所有事件池回调");
      listener();
    });
    return action;
  };

  // redux内部会默认进行一次dispatch派发，目的：给公共容器中的状态赋值初始值
  const randomString = () =>
    Math.random().toString(36).substring(7).split("").join(".");
  dispatch({
    // type: Symbol()
    type: "@@redux/INIT" + randomString(),
  });

  // 返回创建的STORE对象
  return {
    getState,
    subscribe,
    dispatch,
  };
}

export function combineReducers(reducers) {
    console.log("合并reducer");
  // reducers是一个对象，以键值对存储了：模块名 & 每个模块的reducer
  let reducerskeys = Reflect.ownKeys(reducers);
  // reducerskeys:['vote','personal']
  /* 
    返回一个合并的reducer 
    + 每一次dispatch派发，都是把这个reducer执行
    + state就是redux容器中的公共状态
    + action就是派发时候传递进来的行为对象
    */
  return function reducer(state = {}, action) {
    let nextState = {};
    reducerskeys.forEach((key) => {
      nextState[key] = reducers[key](state[key], action);
    });
    return nextState;
  };
}
