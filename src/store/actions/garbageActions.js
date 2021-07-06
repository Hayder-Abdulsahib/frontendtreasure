import axios from "axios";

export const GARBAGE_LIST = "GARBAGE_LIST";

export const garbageList = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:8000/things/garbage");
      //this is the same as the return
      dispatch({
        type: GARBAGE_LIST,
        payload: res.data, //res.data the data here is reserved in js which is the data the contain the array of data from the database which you can find in the inspect page if you console.log it
      });
    } catch (error) {
      console.log(error);
    }
  };
};
