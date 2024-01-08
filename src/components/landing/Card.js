import React, { useState } from "react";
import cardData from "../../utils/cardData";

const Card = () => {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const currentCards = cardData.slice(startIdx, endIdx);
  const totalPages = cardData.length / itemsPerPage;

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= totalPages &&
      selectedPage !== currentPage
    ) {
      setCurrentPage(selectedPage);
    }
  };

  return (
    <div>
      <div className="latest-page-sub-container ">
        {currentCards.map((card) => (
          <div className="cards-container">
            <div key={card.id} className="card  ">
              <img
                src={card.imageSrc}
                alt={`Illustration for ${card.title}`}
                className="card-image"
              />
              <div className="card-content">
                <h2 className="card-title">{card.title}</h2>
                <p className="card-para">{card.para}</p>
                <button type="button" className="read-more">
                  <span className="btnText">Read More</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <span
          onClick={() => selectPageHandler(currentPage - 1)}
          className={
            currentPage > 1 ? "pagination-active" : "pagination__disabled"
          }
        >
          {currentPage > 1 ? (
            <img
              className="pagination-active"
              src="images/left-arrow-active.png"
              alt="prev"
            />
          ) : (
            <img
              className="pagination__disabled"
              src="images/left-arrow-disabled.png"
              alt="prev"
            />
          )}
        </span>
        {[...Array(totalPages)].map((_, i) => (
          <span
            key={i + 1}
            onClick={() => selectPageHandler(i + 1)}
            className={currentPage === i + 1 ? "pagination__selected" : ""}
          ></span>
        ))}
        <span className=" ml-[14px] mr-[14px]">
          {currentPage}/{totalPages}
        </span>
        <span
          onClick={() => selectPageHandler(currentPage + 1)}
          className={currentPage < totalPages ? "" : "pagination__disabled"}
        >
          {currentPage < totalPages ? (
            <img
              className="right-arrow"
              src="images/right-arrow-active.png"
              alt="next"
            />
          ) : (
            <img
              className="pagination__disabled"
              src="images/right-arrow-disabled.png"
              alt="next"
            />
          )}
        </span>
      </div>
    </div>
  );
};

export default Card;
