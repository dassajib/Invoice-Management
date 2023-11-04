import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const DownloadButton = ({ dataRef, isDataFilled }) => {
  const handleDownloadPDF = () => {
    // Replace id with the ID of the, root element of your app
    // const input = document.getElementById("main-content");

    // if input's are empty then download button wouldn't show
    if (isDataFilled) {
      const hideSections = dataRef?.current.querySelectorAll(".hide-section");
      hideSections?.forEach((section) => {
        section.style.display = "none";
      });

      const table = document.getElementById("calculation-table");
      const inputs = document.getElementsByTagName("input");

      // Hide table borders
      table.style.borderStyle = "none";

      // Hide input borders
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].style.border = "none";
      }

      html2canvas(dataRef?.current).then((canvas) => {
        const pdf = new jsPDF();
        // to covert canvas data to url
        const imgData = canvas.toDataURL("image/png");
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("invoice.pdf");

        // Restore table borders
        table.style.border = "";

        // Restore input borders
        for (let i = 0; i < inputs.length; i++) {
          inputs[i].style.border = "";
        }
      });

      setTimeout(() => {
        hideSections?.forEach((section) => {
          section.style.display = "block";
        });
      }, 1000);
    }
  };

  return (
    <button
      onClick={handleDownloadPDF}
      disabled={!isDataFilled}
      className="hide-section flex justify-end bg-purple-900 text-white px-4 py-2 rounded-xl hover:bg-gray-600 active:bg-red-700"
    >
      Download as PDF
    </button>
  );
};

export default DownloadButton;
