import axios from "axios";
import {
  GETMENU_SUCCESS,
  GETMENU_FAIL,
  GETMENU_REQUEST,
} from "../Constants/MenuConstants";

// Get burger menu Action
export const listmenu = () => async (dispatch) => {
  try {
    dispatch({ type: GETMENU_REQUEST });
    const { data } = await axios.get(
      "https://api.spoonacular.com/food/menuItems/search?query=burger&number=20&apiKey=3e08e37a0b9a4274ad8be496e06a3ea5"
    );

    dispatch({
      type: GETMENU_SUCCESS,
      payload: data.menuItems,
    });
  } catch (error) {
    dispatch({
      type: GETMENU_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Get Pizza menu Action
export const pizzalist = () => async (dispatch) => {
  try {
    dispatch({ type: GETMENU_REQUEST });
    const { data } = await axios.get(
      "https://api.spoonacular.com/food/menuItems/search?query=pizza&number=20&apiKey=3e08e37a0b9a4274ad8be496e06a3ea5"
    );

    dispatch({
      type: GETMENU_SUCCESS,
      payload: data.menuItems,
    });
  } catch (error) {
    dispatch({
      type: GETMENU_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
// Get Chicken menu Action
export const chickenlist = () => async (dispatch) => {
  try {
    dispatch({ type: GETMENU_REQUEST });
    const { data } = await axios.get(
      "https://api.spoonacular.com/food/menuItems/search?query=chicken&number=20&apiKey=3e08e37a0b9a4274ad8be496e06a3ea5"
    );

    dispatch({
      type: GETMENU_SUCCESS,
      payload: data.menuItems,
    });
  } catch (error) {
    dispatch({
      type: GETMENU_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Get pork menu Action
export const porklist = () => async (dispatch) => {
  try {
    dispatch({ type: GETMENU_REQUEST });
    const { data } = await axios.get(
      "https://api.spoonacular.com/food/menuItems/search?query=pork&number=20&apiKey=3e08e37a0b9a4274ad8be496e06a3ea5"
    );

    dispatch({
      type: GETMENU_SUCCESS,
      payload: data.menuItems,
    });
  } catch (error) {
    dispatch({
      type: GETMENU_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Get noodles menu Action
export const noodleslist = () => async (dispatch) => {
  try {
    dispatch({ type: GETMENU_REQUEST });
    const { data } = await axios.get(
      "https://api.spoonacular.com/food/menuItems/search?query=noodles&number=20&apiKey=3e08e37a0b9a4274ad8be496e06a3ea5"
    );

    dispatch({
      type: GETMENU_SUCCESS,
      payload: data.menuItems,
    });
  } catch (error) {
    dispatch({
      type: GETMENU_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Get icecream menu Action
export const icecreamlist = () => async (dispatch) => {
  try {
    dispatch({ type: GETMENU_REQUEST });
    const { data } = await axios.get(
      "https://api.spoonacular.com/food/menuItems/search?query=icecream&number=20&apiKey=3e08e37a0b9a4274ad8be496e06a3ea5"
    );

    dispatch({
      type: GETMENU_SUCCESS,
      payload: data.menuItems,
    });
  } catch (error) {
    dispatch({
      type: GETMENU_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
// Get sandwich menu Action
export const sandwichlist = () => async (dispatch) => {
  try {
    dispatch({ type: GETMENU_REQUEST });
    const { data } = await axios.get(
      "https://api.spoonacular.com/food/menuItems/search?query=sandwich&number=20&apiKey=3e08e37a0b9a4274ad8be496e06a3ea5"
    );

    dispatch({
      type: GETMENU_SUCCESS,
      payload: data.menuItems,
    });
  } catch (error) {
    dispatch({
      type: GETMENU_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Get egg menu Action
export const egglist = () => async (dispatch) => {
  try {
    dispatch({ type: GETMENU_REQUEST });
    const { data } = await axios.get(
      "https://api.spoonacular.com/food/menuItems/search?query=egg&number=20&apiKey=3e08e37a0b9a4274ad8be496e06a3ea5"
    );

    dispatch({
      type: GETMENU_SUCCESS,
      payload: data.menuItems,
    });
  } catch (error) {
    dispatch({
      type: GETMENU_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
