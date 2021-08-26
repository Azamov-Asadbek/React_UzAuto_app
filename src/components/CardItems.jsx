import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMessage, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

function CardItems({
  cardtitle,
  cardpath,
  imgSrc,
  commentnum,
  likenum,
  price,
  ID,
  funclike,
  position,
  like,
}) {
  return (
    <>
      <li className="card_item">
        <div className="card_item_text">
          <h3 className="card_item_title">{cardtitle}</h3>
        </div>
        <Link className="card_item_link" to={cardpath}>
          <figure className="card_item_img_wrap">
            <img src={imgSrc} alt={cardtitle} className="card_item_img" />
          </figure>
        </Link>
        <div className="card_item_info">
          <div className="card_item_icons">
            <AiOutlineMessage className="card_item_icon" /> {commentnum}{' '}
            {position === true ? (
              <AiFillHeart
                onClick={() => funclike(ID, position, like)}
                color="#f3413d"
                className="card_item_icon"
              />
            ) : (
              <AiOutlineHeart
                onClick={() => funclike(ID, position, like)}
                className="card_item_icon"
              />
            )}{' '}
            {likenum}
          </div>
          <div className="card_item_price">{price} $</div>
        </div>
      </li>
    </>
  );
}

export default CardItems;
