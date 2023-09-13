const ContactDetails = () => {
  return (
    <div>
      <p>
        Instagram Link <span>( optional )</span>
      </p>
      <input
        type="text"
        placeholder="Eg ...instagram.com/username"
        className="border-2 w-full p-2 rounded-sm border-gray-300 my-3"
      />
      <p>
        Youtube Link <span>( optional )</span>
      </p>
      <input
        type="text"
        placeholder="Eg ...youtube.com/username"
        className="border-2 w-full  p-2 rounded-sm border-gray-300 my-3"
      />

      <div className="w-full flex justify-end">
        <button className=" p-1 px-4 border-2 my-2 mr-2 rounded-md">
          Back
        </button>
        <button className="bg-blue-500 p-1 px-4 border-none my-2 text-white rounded-md">
          Next
        </button>
      </div>
    </div>
  );
};
export default ContactDetails;
