const PDFDocument = require('pdfkit')
const fs = require('fs');

 const doc = new PDFDocument();

 doc.pipe(fs.createWriteStream('bill.pdf'));

 doc
 .fontSize(40)
 .fill('black', 'even-odd')
 .text('amazon',30, 40,)

 .fontSize(10)
 .text('Digitally Signed by DS amazon',30, 90)
 .text('Date: 14/05/2020 03:05 PM UTC')
 .text('Resoan: Invoice')

 .fontSize(20)
 .text('Sold By:',25, 135)
 .fontSize(13)
 .text('amazon')
 .text('36, Green Downtown, Golden Road, FL')

 .fontSize(13)
 .text('PAN NO: XCV967729L',25, 210)
 .text('GST Registation No: IX9879123TC')

 .text('Order Number: A-8934792734',25, 260)
 .text('Order Date: 19.06.2019')


 

 .text('Tax Invoice/Bill of Supply/Cash Memo',320, 50)
 .text('(Original for Reciplent)',408, 65)

 .text('Billing Address:',450, 150)
 .text('John Doe',480)
 .text('36, Green Downtown, Golden Road, FL',310)

 .text('Shipping Address:',432,210)
 .text('John Doe',480)
 .text('36, Green Downtown, Golden Road, FL',310)

 .text('Invoice Number: FLR978298',372, 260)
 .text('Invoice Details: FLR9898DKEFD',350, 280)
 .text('Invoice Date: 19.06.2019',392, 300)



 .fontSize(10)
 .text('SI.',30, 340)
 .text('No')
 .text('1')
 .text('Amount in Words:',30, 430)
 .text('forty seven')

 .text('Description',90, 345)
 .text('total',160, 380)
//  .text('Healthsense Forehead Thermometer with fast reading(with)B89978312')

 .text('Unit Price',  180, 345)
 .text('$43.50')

 .text('Qty',230, 345)
 .text('1')

 .text('Net Amount',255, 345)
 .text('$43.5')

 .text('Tax Rate',320, 345)
 .text('9.00%')

 .text('Tax Type',370, 345)
 .text('VAT')

 .text('Tax Amount',415, 345)
 .text('$3.92')
 .text('$3.92',415, 380)

 .text('Total Amount',475, 345)
 .text('$47')
 .text('$47.42',475, 380)
 .text('For Amazon:',475, 430)
 .text('Authorized Signatory',440, 450)











  .scale(0.6)
  .translate(470, -380)
  .path('M 250,75 L 323,301 131,161 369,161 177,301 z') 
  .fill('red', 'even-odd')
  .restore();
   



















  doc
  // .addPage()
  .fillColor('blue')
  .text("lastName sharma",  100, 100,)
  .link(100, 100, 160, 27, 'https://www.geeksforgeeks.org/');
   
// Finalize PDF file
doc.end();










// make photo

//  doc
   
//  .fontSize(20)
//  .text('This the article for GeeksforGeeks', 100, 100);
//  doc.image('user_photos/623acf7e1593745c7e3d3ac6.png', {
//     fit: [300, 300],
//     align: 'center',
//     valign: 'center'
//   });