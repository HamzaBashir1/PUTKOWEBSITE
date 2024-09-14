"use client"
import React, { useRef } from 'react';
import { usePDF } from 'react-to-pdf';
import { PDFExport } from 'react-to-pdf'
const ProformaTemplate = () => {

    const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
    
    const ref = useRef(); // Reference for the component to be converted to PDF
    const options = {
      orientation: 'portrait',
      unit: 'in',
      format: 'A4',
    };
  

  return (

<div>
<button onClick={() => toPDF()}>Download PDF</button>


    <div className="p-8 bg-gray-50 " ref={targetRef}>
    
      {/* Header */}

      <div   className="flex items-center justify-between pb-4 mb-8 border-b-2">
        <div>
          <h1 className="text-2xl font-bold">Proforma Invoice</h1>
          <p className="text-sm">No. 72400249</p>
        </div>
        <div>
          <p className="text-sm text-right">Date of Issue: 14.9.2024</p>
          <p className="text-sm text-right">Delivery Date: 14.9.2024</p>
          <p className="text-sm text-right">Due Date: 14.9.2024</p>
        </div>
      </div>

      {/* Supplier and Customer Details */}
      <div className="grid grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-lg font-bold">Supplier</h2>
          <p>Putko, s. r. o.</p>
          <p>Továrenská 12</p>
          <p>811 09 Bratislava</p>
          <p>ID: 54566959</p>
          <p>Tax ID: 2121742337</p>
          <p>VAT ID: SK2121742337</p>
        </div>
        <div>
          <h2 className="text-lg font-bold">Customer</h2>
          <p>Hamza</p>
          <p>81103</p>
          <p>Bratislava</p>
          <p>Slovakia</p>
          <p>ID: 2122322323231223232</p>
          <p>Tax ID: 23323123</p>
          <p>VAT ID: 23232212</p>
        </div>
      </div>

      {/* Item Description */}
      <div className="mb-8">
        <h2 className="text-lg font-bold">Invoice Details</h2>
        <div className="py-2 border-t-2 border-b-2">
          <div className="flex justify-between">
            <p className="font-bold">Item</p>
            <p className="font-bold">Price (Excl. VAT)</p>
          </div>
        </div>
        <div className="py-2 border-b">
          <div className="flex justify-between">
            <p>Service "Profi 12 months"</p>
            <p>179€</p>
          </div>
        </div>
      </div>

      {/* Total Amount */}
      <div className="mb-8 text-right">
        <p className="text-lg">Total (Excl. VAT): 179€</p>
        <p className="text-lg">VAT (0%): —</p>
        <p className="text-lg font-bold">Total (Incl. VAT): 179€</p>
      </div>

      {/* Payment Information */}
      <div className="pt-4 text-left border-t-2">
        <h2 className="mb-2 text-lg font-bold">Payment Information</h2>
        <p>IBAN (TatraBanka): SK02 1100 0000 0029 4812 9713</p>
        <p>Variable Symbol: 72400249</p>
        <p className="text-lg font-bold">Total Amount: 179€</p>
      </div>

      {/* Footer Note */}
      <div className="mt-8 text-center">
        <p className="text-sm italic">This proforma invoice does not serve as a tax document.</p>
      </div>
    

    </div>
    </div>
  );
};

export default ProformaTemplate;