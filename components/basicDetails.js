import { useState } from "react";

const BasicDetails = ({ userData, setUserData, setModel }) => {
  const [details, setDetails] = useState({});
  return (
    <div>
      <p>Enter Name</p>
      <input
        type="text"
        value={details.name}
        placeholder="Eg John Doe"
        className="border-2 w-full p-2 rounded-sm border-gray-300 my-3"
        onChange={(e) => {
          setDetails({ ...details, name: e.target.value });
        }}
      />
      <p>Enter Email</p>
      <input
        type="text"
        value={details.email}
        placeholder="Eg john@gmail.com"
        className="border-2 w-full  p-2 rounded-sm border-gray-300 my-3"
        onChange={(e) => {
          setDetails({ ...details, email: e.target.value });
        }}
      />
      <p>Enter Phone</p>
      <input
        type="text"
        value={details.phone}
        placeholder="Eg 1234567890"
        className="border-2 w-full  p-2 rounded-sm border-gray-300 my-3"
        onChange={(e) => {
          setDetails({ ...details, phone: e.target.value });
        }}
      />
      <div className="w-full flex justify-end">
        <button
          className="bg-blue-500 p-1 px-4 border-none my-2 text-white rounded-md"
          onClick={() => {
            setUserData({ ...details });
            setModel(false);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default BasicDetails;
