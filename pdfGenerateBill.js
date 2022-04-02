const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument();
async function generateBillPdf(payment) {
doc.pipe(fs.createWriteStream('myBill.pdf'));
  
doc
   
  .fontSize(27)
  .text('RPMS', 100, 100);
  
  
  doc.image('user_photos/623c2a2ba515db6907867c45.png', {
    fit: [300, 300],
    align: 'center',
    valign: 'center' 
  })
   
  doc
  .addPage()
  .fontSize(30)
  .fill('blue', 'even-odd')
  .text('RPMS', 30, 40)

  .fontSize(15)
  .fill('black', 'even-odd')
  .text('Street Address:',35, 115)
  .text('City,State,ZIP:', 35,135 )
  .text('phone:',35,155)
  .text('Email:',35, 175)
  .text('____________________________________________________________',35, 187)

  .fontSize(18)
  .fill('black', 'even-odd')
  .text('Billed To:',25, 225)

  .fill('grey', 'even-odd')
  .fontSize(15)
  .text('Tenant Name')
  .text('Property Street')
  .text('City,State,ZIP')
  .text('Phone')

  .fontSize(13)
  .fill('black', 'even-odd')
  .text('Date Issued:',410, 225)
  .text('Due Date:',427)
  .text('Lease Expiration Date:',353,)
  .text('Invoice Number:',389)

  .text('Property Address',130, 320)
  .text('Rent',290, 320)
  .text('Utilities',390, 318 )
  .text('Due',490, 320)

  .fill('grey', 'even-odd')
  .text('Rs 0.00',490, 350)
  .text('Rs 0.00',490, 390)
  .fill('black', 'even-odd')
  .text('TOTAL',400, 390)
  .fill('grey', 'even-odd')
  .text('Fee(s)',400, 370)
  .fill('black', 'even-odd')

  .fontSize(18)
  .text('Tearms and Conditions',100, 515)
  .text('______________________',100, 515)
    .fill('black', 'even-odd')
  .fontSize(14)
  .text('Payment Instructions:',105, 555)
  .text('Terms:',110, 590)
  .text('_______________________________________________________',100, 620)
  .text('Company Signature:_______________________________',110, 660)

  .fill('blue', 'even-odd')
  .text('[CREAT ACCOUNT]',118, 703)
  .fill('black', 'even-odd')
  .text('[CLEAR FORM]',275, 703)
  .text('[PRINT FORM]',400, 703)




doc
  .scale(0.6)
  .translate(470, -380)
  .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
  .fill('red', 'even-odd')
  .restore()
   
// Add some text with annotations
doc
  .addPage()
  .fillColor('blue')
  .text('The link for GeeksforGeeks website', 100, 100)
    
  .link(100, 100, 160, 27, 'https://www.geeksforgeeks.org/');
   
doc.end();


}
module.exports = {
  generateBillPdf
};


