import { getRequest, postRequest, putRequest } from "./ApiRequest";
import { USER_ENDPOINT } from "./EndPoints";


export const fetchAllProducts = () => {
  return getRequest(USER_ENDPOINT.FETCH_ALL_PROFUCT);
};

export const fetchAllHistory = () => {
  return getRequest(USER_ENDPOINT.FETCH_ALL_HISTORY);
};
// export const authConfirmPhone = (payload) => {
//   return postRequest(USER_ENDPOINT.AUTH_CONFIRM_PHONE + `?code=${payload}`);
// };

// export const getUserInfo = () => {
//   return getRequest(USER_ENDPOINT.USER_INFO);
// };

// export const updateUserInfo = (payload) => {
//   return putRequest(USER_ENDPOINT.USER_INFO, payload);
// };

// export const getVehicleTypes = () => {
//   return getRequest(USER_ENDPOINT.VEHICLE_TYPES);
// };

// export const updatePhone = (payload) => {
//   return postRequest(`${USER_ENDPOINT.UPDATE_PHONE}?phone=${payload.phone}`);
// };

// export const cancelOrder = (payload) => {
//   return putRequest(USER_ENDPOINT.CANCEL_ORDER, payload);
// };
