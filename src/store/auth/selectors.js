export const selectToken = () => (reduxState) => reduxState.auth.accessToken;
export const selectMe = () => (reduxState) => reduxState.auth.me;
