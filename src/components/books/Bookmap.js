import "tailwindcss/tailwind.css";
import React, { useState, useEffect, useContext } from "react";
import Card from "./Card";

import BookContext from './../../context/Book/bookContext';
import logo from '../../assets/logo.png'

const Bookmap = (props) => {

  let bookContext = useContext(BookContext);
  let { books, getBooks } = bookContext;

  const [cards, setCards] = useState([]);

  useEffect(() => {
    if( books && books.length > 0 ) setCards(books)
    else {
      getBooks()
    }
  }, [books]);


  return (
    <div className="flex md:grid md:grid-cols-2 xl:flex items-center justify-around lg:justify-between flex-wrap gap-6 p-2">
      {cards && cards.length > 0 ? cards.slice(0,4).map((card) => {
        return (
          <Card key = {card.codigo}
            img={card.portada}
            title={card.titulo}
            autor = {card.autores && card.autores.length > 0 ? card.autores[0].nombre : "Anonimo"} //revisar
            price={card.precio}
            codigo = {card.codigo}
          />
        );
      }) : <Card key = {0}
          img={logo}
          title={"Titulo"}
          autor = {"Autor"} //revisar
          price={"00000"}
        />
      }
    </div>
  );
};

export default Bookmap;