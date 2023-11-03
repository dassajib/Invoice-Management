import React, { useRef, useState } from "react";
import InvoiceInfo from "../InvoiceInfo/InvoiceInfo";
import CalculationTable from "../CalculationTable/CalculationTable";

const CreateInvoice = () => {
  const [logo, setLogo] = useState(null);
  const [showUploadButton, setShowUploadButton] = useState(true);
  const [date, setDate] = useState()

  const fileInputRef = useRef(null);

  // logo input function
  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    setLogo(URL.createObjectURL(file));
    setShowUploadButton(false);
  };

  // click button and it will trigger input file
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  // delete logo function
  const handleDeleteButton = () => {
    setLogo(null);
    setShowUploadButton(true);
  };

  // date
  const handleDateChange = (e) => {
    setDate(e.target.value)
  }

  return (
    <div className="p-6 w-[calc(100%-256px)] md:ml-64">
      <div className="mt-5">
        {/* download button */}
        <div className="flex justify-end">
          <button className="flex justify-end bg-purple-900 text-white px-4 py-2 rounded-xl hover:bg-gray-600 active:bg-red-700">
            Download as PDF
          </button>
        </div>
        <hr style={{ border: "2px solid blue", marginTop: "10px" }} />
        {/* invoice info and logo */}
        <div className="flex justify-between mt-5">
          <div className="">
            <div>
              <label
                htmlFor="small-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Invoice No :
              </label>
              <input
                type="text"
                id="small-input"
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>  
              <label
                htmlFor="small-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Invoice Date :
              </label>
              <input
                type="date"
                value={date}
                onChange={handleDateChange}
                id="small-input"
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          {/* logo section */}
          <div>
            <input
              onChange={handleLogoChange}
              ref={fileInputRef}
              className="hidden"
              type="file"
              accept="image/*"
            />
            {showUploadButton && (
              <button
                onClick={handleUploadClick}
                className="flex justify-end bg-purple-900 text-white px-4 py-2 rounded-xl hover:bg-gray-600 active:bg-red-700"
              >
                Upload Logo
              </button>
            )}
            {logo && (
              <div className="flex flex-col gap-4">
                <img
                  className="w-14 h-14 rounded-full object-cover"
                  src={logo}
                  alt="company logo"
                />
                <button
                  onClick={handleDeleteButton}
                  className="bg-purple-900 text-white px-4 py-2 rounded-xl hover:bg-gray-600 active:bg-red-700"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
        <hr style={{ border: "2px solid blue", marginTop: "10px" }} />
        <InvoiceInfo />
        <hr style={{ border: "2px solid blue", marginTop: "10px" }} />
        <CalculationTable />
      </div>
    </div>
  );
};

export default CreateInvoice;
