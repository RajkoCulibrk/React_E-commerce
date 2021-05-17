import { login, register } from "../Actions/UserActions";

const builderCases = (builder) => {
  builder.addCase(login.pending, (state) => {
    state.gettingToken = true;
  });
  builder.addCase(login.fulfilled, (state, { payload }) => {
    state.token = payload;
    state.gettingToken = false;
  });
  builder.addCase(login.rejected, (state, { payload }) => {
    state.token = null;
    state.gettingToken = false;
    state.user = null;
  });
  builder.addCase(register.pending, (state) => {
    state.gettingToken = true;
  });
  builder.addCase(register.fulfilled, (state, { payload }) => {
    state.token = payload;
    state.gettingToken = false;
  });
  builder.addCase(register.rejected, (state, { payload }) => {
    state.token = null;
    state.gettingToken = false;
    state.user = null;
  });
};
export default builderCases;
