import React from "react";
import { FaTimes } from "react-icons/fa";

const QuoteModal = ({ quotes, closeQuoteModal }) => {
  return (
    <div className="quote-modal">
      <div className="quote-container">
        {quotes.length > 0 ? (
          quotes.map((item) => {
            const { quote } = item;
            return <p>{quote}</p>;
          })
        ) : (
          <h1>No Quotes</h1>
        )}
        <button className="close-quoteModal-btn" onClick={closeQuoteModal}>
          <FaTimes onClick={closeQuoteModal}></FaTimes>
        </button>
      </div>
    </div>
  );
};

export default QuoteModal;
