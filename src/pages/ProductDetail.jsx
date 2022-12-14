import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../components/ui/Button";

export default function ProductDetail() {
  const {
    state: {
      product: { id, imageUrl, title, description, category, price, options },
    },
  } = useLocation();
  const [selected, setSelected] = useState(options[0]);
  const selectHandler = (e) => {
    // 옵션 선택
    setSelected(e.target.value);
  };
  const clickHandler = () => {
    // 장바구니 추가
  };
  return (
    <section className="w-full p-4 flex flex-col md:flex-row ">
      <img
        className="w-full rounded-md shadow-md basis-7/12"
        src={imageUrl}
        alt=""
      />
      <div className="w-full flex flex-col basis-5/12 p-4">
        <div className="w-full flex justify-between border-b pb-4">
          <p className="text-2xl font-bold">{title}</p>
          <p className="text-2xl font-bold">{`₩${price}`}</p>
        </div>
        <div className="w-full flex justify-between items-center pt-2 pb-4">
          <p className="">
            {category}, {description}
          </p>
          <div className="flex gap-2 items-center">
            <label htmlFor="select" className="text-brand font-bold">
              옵션 :{" "}
            </label>
            <select
              id="select"
              className="border-dashed border-2 p-1 m-2"
              onChange={selectHandler}
              value={selected}
            >
              {options.map((option, index) => (
                <option key={index}>{option}</option>
              ))}
            </select>
          </div>
        </div>
        <Button text="장바구니에 추가" onClick={clickHandler} />
      </div>
    </section>
  );
}
