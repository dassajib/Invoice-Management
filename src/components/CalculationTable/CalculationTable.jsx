import React, { useState } from "react";

const CalculationTable = () => {
  const [products, setProducts] = useState([
    { productName: "", quantity: 0, unitPrice: 0, total: 0 },
  ]);
  const [vatTax, setVatTax] = useState(0);
  const [discount, setDiscount] = useState(0);

  const handleProductChange = (index, field, value) => {
    const updatedProducts = [...products];
    updatedProducts[index][field] = value;

    const { quantity, unitPrice } = updatedProducts[index];
    updatedProducts[index].total = quantity * unitPrice;

    setProducts(updatedProducts);
  };

  const handleAddRow = () => {
    setProducts([
      ...products,
      { productName: "", quantity: 0, unitPrice: 0, total: 0 },
    ]);
  };

  const handleRemoveRow = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };

  const calculateSubTotal = () => {
    return products.reduce((total, product) => total + product.total, 0);
  };

  const calculateFinalTotal = () => {
    const finalTotal =
      calculateSubTotal() + calculateVAT() - calculateDiscount();
    return finalTotal.toFixed(2);
  };

  const calculateVAT = () => {
    const subTotal = calculateSubTotal();
    // Replace 0.01 with the VAT/Tax percentage entered by the user
    return subTotal * (vatTax / 100);
  };

  const calculateDiscount = () => {
    // Use the discount amount entered by the user directly
    return discount;
  };

  return (
    <div>
      <table id="calculation-table" className="table-auto mt-4 w-full">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Total</th>
            <th className="hide-section">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td style={{ padding: 0, borderStyle: "hidden" }}>
                <input
                  id="default-input"
                  className="mt-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  value={product.productName}
                  onChange={(e) =>
                    handleProductChange(index, "productName", e.target.value)
                  }
                />
              </td>
              <td style={{ padding: 0, borderStyle: "hidden" }}>
                <input
                  id="default-input"
                  className="mt-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="number"
                  value={product.quantity}
                  onChange={(e) =>
                    handleProductChange(
                      index,
                      "quantity",
                      parseInt(e.target.value)
                    )
                  }
                />
              </td>
              <td style={{ padding: 0, borderStyle: "hidden" }}>
                <input
                  id="default-input"
                  className="mt-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="number"
                  value={product.unitPrice}
                  onChange={(e) =>
                    handleProductChange(
                      index,
                      "unitPrice",
                      parseFloat(e.target.value)
                    )
                  }
                />
              </td>
              <td style={{ borderStyle: "hidden" }}>{product.total}</td>
              <td  className="hide-section" style={{ borderStyle: "hidden", padding: 4 }}>
                {index === products.length - 1 && (
                  <button
                    type="button"
                    className="px-2 py-1 m-1 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    style={{ padding: "2px 10px", marginRight: "2px" }}
                    variant="success"
                    onClick={handleAddRow}
                  >
                    +
                  </button>
                )}
                {index > -1 && (
                  <button
                    type="button"
                    className="px-2 py-1 m-1 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    style={{ padding: "2px 12px" }}
                    variant="danger"
                    onClick={() => handleRemoveRow(index)}
                  >
                    -
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="grid gap-4 mt-5 mb-20">
        <div className="grid grid-cols-3">
          <div></div>
          <div></div>
          <div>
            <form>
              <div className="flex justify-between">
                <label>Sub Total :</label>
                <input
                  className="border-0 w-36"
                  type="number"
                  readOnly
                  value={calculateSubTotal()}
                />
              </div>
              <div className="flex justify-between">
                <label>VAT/Tax (%) :</label>
                <input
                  className="border-0 w-36"
                  type="number"
                  value={vatTax}
                  onChange={(e) => setVatTax(parseFloat(e.target.value))}
                />
              </div>
              <div className="flex justify-between">
                <label>Discount :</label>
                <input
                  className="border-0 w-36"
                  type="number"
                  value={discount}
                  onChange={(e) => setDiscount(parseFloat(e.target.value))}
                />
              </div>
              <div className="flex justify-between">
                <label>Final Total :</label>
                <input
                  className="border-0 w-36"
                  type="number"
                  readOnly
                  value={calculateFinalTotal()}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculationTable;
