
const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument();
  
doc.pipe(fs.createWriteStream('example.pdf'));
  
doc
   
  .fontSize(20)
  .text('This the article for GeeksforGeeks', 100, 100);
  

  
  doc.image('user_photos/623c2a2ba515db6907867c45.png', {
    fit: [300, 300],
    align: 'left',
    valign: 'left'
  });
  
  doc
  .addPage()
  .fontSize(50)
  .fill('black', 'even-odd')
  .text('amazon')

  .fontSize(10)
  .text('resoan: invoice')
  .fontSize(20)
  .text('sold By:')
  .fontSize(15)
  .text('amazon')
  .fontSize(15)
  .text('PAN NO: XCV78786L')
  .fontSize(15)
  .text('GST Registation NO: IX984564656TC')




  



  

  

doc
  .scale(0.6)
  .translate(470, -380)
  .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
  .fill('red', 'even-odd')
  .restore();
   

doc
  .addPage()
  .fillColor('red')
  .text('The link for GeeksforGeeks website', 100, 100)
    
  .link(100, 100, 160, 27, 'https://www.geeksforgeeks.org/');
   

doc.end();
























