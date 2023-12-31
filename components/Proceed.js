"use client";
import Image from "next/image";
import Button from "./Button";
import Select from "react-select";
import { Arrow } from "@/public/assets/svg/Arrow";
import { useSelector } from "react-redux";
import React, { useId } from "react";

const customStyle = {
  control: (provided) => ({
    ...provided,
    height: 50,
    paddingLeft: 12,
    paddingRight: 18,
    margin: 0,
    marginLeft: 0,
    border: "1px solid rgba(32, 32, 32, 0.50)",
    borderRadius: "10px",
    color: "#202020",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    backgroundColor: "white",
    outline: "none",
    cursor: "pointer",
    boxShadow: "none",
    "&:hover": {
      border: "1px solid #DE7139",
    },
  }),

  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "#DF7A45" : "#202020",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 500,
    backgroundColor: state.isSelected ? "transparent" : "transparent",
    padding: "10px",
    lineHeight: "normal",
    position: "relative",
    cursor: "pointer",
    "&:hover": {
      color: "#DF7A45",
      background: "transparent",
      
    },
    "&:not(:last-child):after": {
      content: '""',
      border: "none",
      borderBottom: "1px dashed rgba(32, 32, 32, 0.50)",
      color: "#fff",
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
    },
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: "#202020",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: 10,
    border: "none",
    marginTop: 0,
    background: "#F5F6FA",
    boxShadow: "0px 4px 2px 0px rgba(80, 80, 80, 0.10)",
  }),
};

function Proceed({
  setSelectedpurpose,
  setSelectedUserId,
  setIsOpen,
  selectedpurpose,
  selectedUserId,
  selectedItem,
}) {
  const employees = useSelector((state) => state.employees.employee);
  const purpose = useSelector((state) => state.employees.purpose);

  const options2 = purpose.map((value) => ({
    value: value.id,
    label: value.purpose,
  }));

  const options = employees.map((value) => ({
    value: value.id,
    label: (
      <div className="flex gap-[10px] items-center" key={value.id}>
        <div>
          <Image
            src={value?.proImage}
            width={30}
            height="auto"
            priority={true}
            alt="arrowUp"
            className="rounded-[50%] selectImage"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div>{value.name}</div>
      </div>
    ),
  }));
  return (
    <div className="px-[1.75rem]">
      <div className="proceedWrapper absolute bottom-[15px] max-sm:w-[100%] max-sm:left-0 max-sm:pb-0 h-[92px] max-sm:h-[208px] max-sm:bottom-0  bg-primary_light  rounded-[10px]   py-[1.25rem] px-[1.25rem]">
        <div className="flex justify-between max-sm:flex-col gap-[1rem]">
          <div className="w-[100%] max-w-[432px]  max-sm:max-w-[100%]">
            <div className="flex justify-between max-sm:flex-col max-sm:gap-[1rem]">
              <div className="relative w-[58.1%] max-sm:w-[100%]">
                <Select
                  instanceId={useId()}
                  menuPlacement="auto"
                  options={options}
                  components={{
                    DropdownIndicator: Arrow,
                    IndicatorSeparator: () => null,
                  }}
                  styles={customStyle}
                  className="customOption"
                  onChange={(val) => {
                    setSelectedUserId(val.value);
                  }}
                />
              </div>
              <div className="relative w-[35.42%] max-sm:w-[100%]">
                <Select
                  instanceId={useId()}
                  menuPlacement="auto"
                  options={options2}
                  components={{
                    DropdownIndicator: Arrow,
                    IndicatorSeparator: () => null,
                  }}
                  styles={customStyle}
                  className="customOption "
                  onChange={(val) => {
                    setSelectedpurpose(val.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div>
            <Button
              isDisabled={
                selectedItem.length !== 0 &&
                selectedpurpose !== "" &&
                selectedUserId !== ""
                  ? false
                  : true
              }
              className={`btn-primary w-full ${
                selectedItem.length !== 0 &&
                selectedpurpose !== "" &&
                selectedUserId !== ""
                  ? ""
                  : "bg-light hover:bg-light hover:text-white hover:border-transparent"
              }`}
              name="Proceed"
              onClick={() => setIsOpen(true)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Proceed;
