import * as types from "../action-types";

const delay = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};

// 无用代码
// let fn = async () => {
//   await delay();
//   return { x: "Terraria" };
// };
// fn().then((val) => {
//   console.log(val);
// });

const personNumActions = {
  agreeAdd() {
    return async (dispatch) => {
      await delay();
      dispatch({ type: types.SUM_AGREE });
    };
  },
  async oppAdd() {
    await delay();
    return { type: types.SUM_OPPOSE };
  },
};

export default personNumActions;
