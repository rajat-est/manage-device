import React from "react";
import Button from "./Button";
const Tab = ({ setCategory, category }) => {
  return (
    <div>
      <div className="flex gap-[1rem] justify-center mt-[1.5rem] max-sm:w-[100%] max-sm:px-[50px] overflow-x-scroll ">
        <Button
          name="Smartphone"
          className={`btnTab ${
            category === "phone" ? "bg-black text-white border-transparent" : ""
          }`}
          onClick={() => setCategory("phone")}
        />
        <Button
          name="Cables"
          className={`btnTab ${
            category === "Cable" ? "bg-black text-white border-transparent" : ""
          }`}
          onClick={() => setCategory("Cable")}
        />
        <Button
          name="Adapters"
          className={`btnTab ${
            category === "adapters"
              ? "bg-black text-white border-transparent"
              : ""
          }`}
          onClick={() => setCategory("adapters")}
        />
        <Button
          name="Laptops"
          className={`btnTab ${
            category === "Laptops"
              ? "bg-black text-white border-transparent"
              : ""
          }`}
          onClick={() => setCategory("Laptops")}
        />
        <Button
          name="Accessories"
          className={`btnTab ${
            category === "Accessories"
              ? "bg-black text-white border-transparent"
              : ""
          }`}
          onClick={() => setCategory("Accessories")}
        />
      </div>
    </div>
  );
};

export default Tab;
