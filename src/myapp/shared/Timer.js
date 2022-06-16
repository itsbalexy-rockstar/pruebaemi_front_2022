import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export const Timer = () => {
  const dispatch = useDispatch();
  const { minutes, seconds } = useSelector((state) => state.profile);
  let timer;
  useEffect(() => {
    timer = setInterval(() => {
        seconds++;
      dispatch(changeSeconds(seconds));
      if (seconds === 59) {
        minutes++
        seconds = 0
        dispatch(changeMinutes((minutes)))
        iapatch(changeSeconds(seconds));
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [seconds, minutes]);
};
