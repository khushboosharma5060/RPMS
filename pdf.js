const PDFDocument = require('pdfkit')
const fs = require('fs');

 const doc = new PDFDocument();

 doc.pipe(fs.createWriteStream('bill.pdf'));
 doc
   
 .fontSize(12)
 .text('This the article for GeeksforGeeks', 100, 100);
 doc.image('user_photos/623acf7e1593745c7e3d3ac6.png', {
    fit: [300, 300],
    align: 'center',
    valign: 'center'
  });
 doc
 .addPage()
 .fontSize(50)
 .fill('black', 'even-odd')
 .text('amazon')

 .fontSize(10)
 .text('resoan: invoice')
 .fontSize(20)
 .text('sold By:', 300, 100)
 .fontSize(15)
 .text('amazon')
 .fontSize(15)
 .text('PAN NO: XCV78786L')
   

  .scale(0.6)
  .translate(470, -380)
  .path('M 250,75 L 323,301 131,161 369,161 177,301 z') 
  .fill('red', 'even-odd')
  .restore();
   
  doc

  .addPage()
  .fillColor('blue')
  .text("lastName sharma",  100, 100,)
  .link(100, 100, 160, 27, 'https://www.geeksforgeeks.org/');
   
// Finalize PDF file
doc.end();


