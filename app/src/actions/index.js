export const GET_STOCK = "GET_STOCK";
export const TEST = "TEST";

export const getStock = () => {
  return {
    type: GET_STOCK,
    // payload: "thing",
  };
};

export const test = () => {
  return {
    type: TEST,
  };
};
