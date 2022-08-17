export const selectPostAndComments = () => (reduxState) => {
  const postAndCommentsObject = {
    post: reduxState.postPage.post,
    comments: reduxState.postPage.comments,
  };
  return postAndCommentsObject;
};
