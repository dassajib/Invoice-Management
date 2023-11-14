import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { IoCloseSharp } from "react-icons/io5";

const CompanyModal = ({ setShowModal }) => {
    // to make unscroll when modal is open
    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "scroll";
        }
    }, [])

  // using ReactDOM.createPortal for load this component from an another node because of it will never be change in future cause of any css
  return ReactDOM.createPortal(
    <>
      <div className="w-[calc(100%-256px)] md:ml-64 fixed top-16 left-0 bg-gray-200 flex items-center justify-center h-screen">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <button
            onClick={() => setShowModal(false)}
            className="float-right text-gray-600 hover:text-gray-800"
          >
            <IoCloseSharp size={30} />
          </button>

          <h2 className="text-2xl font-semibold mb-6">Company Information</h2>

          <form action="#" method="post">
            <div className="mb-4">
              <label
                htmlFor="company_name"
                className="block text-sm font-medium text-gray-600"
              >
                Company Name
              </label>
              <input
                type="text"
                id="company_name"
                name="company_name"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="logo"
                className="block text-sm font-medium text-gray-600"
              >
                Upload Logo
              </label>
              <input
                type="file"
                id="logo"
                name="logo"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            <button
              onClick={() => setShowModal(false)}
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Submit
            </button>
          </form>
        </div>

        {/* <div className="fixed inset-0 bg-black opacity-50"></div> */}
      </div>
    </>,
    document.querySelector(".companyModal")
  );
};

export default CompanyModal;
