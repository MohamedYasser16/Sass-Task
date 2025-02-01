import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <h1> Learn, Cook, Eat Your Food</h1>
      <div className="row">
       
        <NavLink  to={"/"} > all </NavLink>
        <NavLink  to={"/beef"} >  beef </NavLink>
        <NavLink  to={"/breakfast"} >  breakfast </NavLink>
        <NavLink  to={"/chicken"} > chicken </NavLink>
        <NavLink  to={"/dessert"} > dessert </NavLink>
        <NavLink  to={"/goat"} > goat </NavLink>
        <NavLink  to={"/lamb"} > lamb </NavLink>
        <NavLink  to={"/miscellaneous"} > miscellaneous </NavLink>
        <NavLink  to={"/pasta"} > pasta </NavLink>
        <NavLink  to={"/pork"} > pork </NavLink>
        <NavLink  to={"/seafood"} > seafood </NavLink>
        <NavLink  to={"/side"} > side </NavLink>
        <NavLink  to={"/starter"} > starter </NavLink>
        <NavLink  to={"/vegan"} > vegan </NavLink>
        <NavLink  to={"/vegetarian"} > vegetarian </NavLink>
      </div>
    </>
  );
}
