import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../Context";
import { FaTimes } from "react-icons/fa";
import QuoteModal from "./QuoteModal";

const Modal = ({ id }) => {
  const { isModalOpen, closeModal, characterProperty } = useGlobalContext();

  const [quotes, setQuotes] = useState([]);
  const [quoteModal, setQuoteModal] = useState(false);

  const openQuoteModal = () => {
    setQuoteModal((prevState) => {
      return !prevState;
    });
  };
  const closeQuoteModal = () => {
    setQuoteModal((prevState) => {
      return !prevState;
    });
  };

  const fetchQuotes = async () => {
    const authorNameArray =
      characterProperty.name && characterProperty.name.split(" ");
    const authorName = authorNameArray && authorNameArray.join("+");
    const response = await fetch(
      `https://www.breakingbadapi.com/api/quote?author=${authorName}`
    );
    const data = await response.json();

    setQuotes(data);
  };
  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <div
      className={`${
        isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className="modal-container">
        <div className="modal_body">
          <div className="modal_image">
            <img src={characterProperty.image} alt={characterProperty.name} />
          </div>
          <div className="modal_info">
            <h1>{characterProperty.name}</h1>
            <h4>Nickname : {characterProperty.nickname}</h4>
            <h4>Date of Birth : {characterProperty.birthday}</h4>
            <h4>Actor Name : {characterProperty.portrayed}</h4>
            <h4>Status : {characterProperty.status}</h4>
            <h4>Occupation : {characterProperty.occupation.join(", ")}</h4>
            <h4>
              Appearance : {characterProperty.appearance.join(", ")} Season
            </h4>

            <h4 className="quotes" onClick={openQuoteModal}>
              Quotes
              {quoteModal && (
                <QuoteModal quotes={quotes} closeQuoteModal={closeQuoteModal} />
              )}
            </h4>
          </div>
        </div>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes></FaTimes>
        </button>
      </div>
    </div>
  );
};

export default Modal;
