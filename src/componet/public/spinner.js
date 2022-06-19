import React from "react";
import { useSelector } from "react-redux";
export default function Spinner() {
    const isLoading = useSelector(({ publicDoc }) => publicDoc).isLoading;
  return (
    <div
      className="overlay"
      id="preloader"
      style={{ display: isLoading ? "flex" : "none" }}
    >
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
