export const SET_ROS_PARAMS = "SET_ROS_PARAMS";

export const getRosParams = ros => dispatch => {
  ros.getRosParams(params => {
    console.log(params);
    dispatch({
      type: SET_ROS_PARAMS,
      payload: params
    });
  });
};
