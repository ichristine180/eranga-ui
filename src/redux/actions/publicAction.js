import { createAction } from "@reduxjs/toolkit";
import axios from "axios";

export const getFdoc = createAction("GET_FDOC", async () => {
  try {
    const response = await axios.post(
      `http://localhost:4001/api/fdoc/getByStatus`,
      { status: "submitted" }
    );
    return {
      payload: {
        data: response,
      },
    };
  } catch (error) {
    console.log(error);
  }
});
