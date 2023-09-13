import { useState } from "react";
import BasicDetails from "./basicDetails";
import ContactDetails from "./contactDetails";
import "../app/globals.css";

const Model = ({ model, setModel, userData, setUserData }) => {
  const [active, setActive] = useState("basic");
  return (
    <div
      className="model-container bg-pink-300 outsideModel flex justify-center items-center h-full w-full absolute top-0 left-0"
      onClick={(e) => {
        setModel(false);
      }}
    >
      <div
        className="bg-white p-4 rounded-lg w-1/3"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <p className="text-2xl"> Add New Profile </p>
        <div className="flex">
          <p
            className={`flex-1 flex justify-center border-b-2 ${
              active == "basic" ? "border-gray-700" : "border-gray-300"
            } m-2`}
            onClick={() => {
              setActive("basic");
            }}
          >
            Basic
          </p>{" "}
          <p
            className={`flex-1 flex justify-center border-b-2 ${
              active == "contact" ? "border-gray-700" : "border-gray-300"
            } m-2`}
            onClick={() => {
              setActive("contact");
            }}
          >
            Contact
          </p>
        </div>
        {active === "basic" && (
          <BasicDetails
            userData={userData}
            setUserData={setUserData}
            setModel={setModel}
          />
        )}
        {active === "contact" && (
          <ContactDetails
            userData={userData}
            setUserData={setUserData}
            setModel={setModel}
          />
        )}
      </div>
    </div>
  );
};

export default Model;
