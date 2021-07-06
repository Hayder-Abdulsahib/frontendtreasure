import axios from "axios";
import instance from "./instance";

export const TREASUARE_LIST = "TREASUARE_LIST";

export const treasuareList = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/things/treasure");
      //this is the same as the return
      dispatch({
        type: TREASUARE_LIST,
        payload: res.data, //res.data the data here is reserved in js which is the data the contain the array of data from the database which you can find in the inspect page if you console.log it
      });
    } catch (error) {
      console.log(error);
    }
  };
};
