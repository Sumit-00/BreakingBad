import React from "react";
import { useGlobalContext } from "../Context";

const SingleCharacter = ({ item }) => {
  const { openModal, setCharacterId, setCharacterProperty } =
    useGlobalContext();

  const modalOpen = () => {
    openModal();
    setCharacterId(item.char_id);
    setCharacterProperty({
      image: item.img,
      name: item.name,
      birthday: item.birthday,
      occupation: item.occupation,
      status: item.status,
      nickname: item.nickname,
      portrayed: item.portrayed,
      appearance: item.appearance,
    });
  };
  return (
    <>
      <div className="card" onClick={modalOpen}>
        <div className="image">
          <img src={item.img} alt={item.name} />
        </div>
        <div className="info">
          <h4>{item.name}</h4>
        </div>
      </div>
    </>
  );
};

export default SingleCharacter;
