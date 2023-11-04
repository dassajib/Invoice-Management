import InvoiceInfo from "../InvoiceInfo/InvoiceInfo";
import CalculationTable from "../CalculationTable/CalculationTable";
import DownloadButton from "../DownloadButton/DownloadButton";
import InvoiceLogoDate from "../InvoiceLogoDate/InvoiceLogoDate";
import { useRef, useState } from "react";

const CreateInvoice = () => {
  // state's declare for invoice input's info and passing to it's component
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [customerName, setCustomerName] = useState("");

  const [invoiceForm, setInvoiceForm] = useState("");

  const dataRef = useRef();

  const isDataFilled = invoiceNumber && customerName && invoiceForm;

  return (
    <div ref={dataRef} className="p-6 w-[calc(100%-256px)] md:ml-64">
      <div className="mt-5">
        {/* download button */}
        <div className="flex justify-end">
          <DownloadButton isDataFilled={isDataFilled} dataRef={dataRef} />
        </div>
        <hr style={{ border: "2px solid blue", marginTop: "10px" }} />
        {/* invoice info and logo */}
        <InvoiceLogoDate
          dataRef={dataRef}
          setInvoiceNumber={setInvoiceNumber}
        />
        <hr style={{ border: "2px solid blue", marginTop: "10px" }} />
        {/* Invoice sender and receiver info */}
        <InvoiceInfo
          dataRef={dataRef}
          setCustomerName={setCustomerName}
          setInvoiceForm={setInvoiceForm}
        />
        <hr style={{ border: "2px solid blue", marginTop: "10px" }} />
        {/* Calculation functionality */}
        <CalculationTable dataRef={dataRef} />
      </div>
    </div>
  );
};

export default CreateInvoice;
