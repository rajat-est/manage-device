"use client";
import React from "react";
import Search from "./Search";
import DateDropdownPicker from "./DatePicker";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// import { fetchHistory } from "@/features/historyProducts/historyProductSlice";
// import {filterHistory} from"@/features/historyProducts/historyProductSlice";
const Table = () => {
  const history = useSelector((state) => state.history.filteredHistory[0]);
  const isLoading = useSelector((state) => state.history.loading);
  const isError = useSelector((state) => state.history.isError);
  const [historyValue, setHistoryValue] = useState(history);
  const [search, setSearch] = useState("");
  const [selectedDate, setSelectedDate] = useState();
  useEffect(() => {
    handleSearch(search);
  }, [search]);

  const handleSearch = (action) => {
    const lowerCaseAction = action.toLowerCase();
    const filteredHistory = history.filter(
      (history) =>
        history.userName &&
        history.userName.toLowerCase().includes(lowerCaseAction)
    );
    setHistoryValue(filteredHistory);
  };
  if (isLoading) return <div>Loading....... </div>;
  if (isError) return <div>{isError}</div>;
  return (
    <div className="rounded-[10px] border border-light_secondary pt-[1.125rem] pb-[2rem] pl-[1.75rem] pr-[1.125rem]">
      <div className="w-full flex items-center  justify-between max-sm:flex-col max-sm:items-start max-sm:gap-[1rem]">
        <p className="text-secondary font-sans font-medium text-1xl">History</p>
        <div className="flex gap-[1.5rem] max-sm:flex-col">
          <div className="w-[13.375rem] max-sm:w-[100%]">
            <DateDropdownPicker
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
          </div>
          <div className="w-[22.5rem] max-sm:w-[100%]">
            <Search
              className="py-[11px]  pl-[1.75rem] pr-[4rem]"
              placeholder="Search by name"
              setSearch={setSearch}
              search={search}
            />
          </div>
        </div>
      </div>
      <div className="pt-[1.5rem] overflow-x-auto">
        <table className="text-left min-w-[1040px] w-full max-sm:table-auto">
          <thead className="bg-primary_light ">
            <tr>
              <th scope="col" className="p-[1rem] ">
                S. NO.
              </th>
              <th scope="col" className="p-[1rem]">
                User Name
              </th>
              <th scope="col" className="p-[1rem]">
                Pick-up time
              </th>
              <th scope="col" className="p-[1rem]">
                Drop time
              </th>
              <th scope="col" className="px-6 py-4  p-[1rem]">
                Comment
              </th>
            </tr>
          </thead>
          <tbody className="last:border-none">
            {historyValue?.map((value) => {
              return (
                <tr
                  className=" l border-dashed border-light_secondary border-b-[1px]"
                  key={value.id}
                >
                  <td className="p-[1rem]">{value.id}</td>
                  <td className="p-[1rem]">{value.userName}</td>
                  <td className="p-[1rem]">{value.PickUpDate}</td>
                  <td className="p-[1rem]">{value.DropDate}</td>
                  <td className="p-[1rem]">{value.Comment}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
