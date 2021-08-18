import React, { useEffect } from "react";
import SingleCharacter from "./SingleCharacter";
import Modal from "./Modal";
import { useGlobalContext } from "../Context";
import Spinner from "./Spinner";

const CharacterGrid = ({ isLoading, items }) => {
  const { characterId, isModalOpen } = useGlobalContext();

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="custom">
      <section className="cards">
        {items.map((item) => (
          <SingleCharacter key={item.char_id} item={item}></SingleCharacter>
        ))}
      </section>
      {isModalOpen && <Modal id={characterId} />}
    </div>
  );
};

export default CharacterGrid;
