export const REFRESH_EMAIL = "REFRESH_EMAIL";

export function refreshEmail(obj) {
  return {
    type: REFRESH_EMAIL,
    payload: obj,
  };
}
