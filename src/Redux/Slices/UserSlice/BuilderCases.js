import { getUserData, login, register } from "../../Actions/UserActions";

const builderCases = (builder) => {
  /* login action */
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
  /* register action */
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
  /* getUserAction */
  builder.addCase(getUserData.pending, (state, { payload }) => {
    state.loadingUser = true;
  });
  builder.addCase(getUserData.fulfilled, (state, { payload }) => {
    state.user = payload;
    state.loadingUser = false;
  });
  builder.addCase(getUserData.rejected, (state, { payload }) => {
    state.loadingUser = false;
    state.user = null;
  });
};
export default builderCases;
