const PDFDocument = require('pdfkit')
const fs = require('fs');

const generateBillPdf = (payment) => {

}
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
    .text('RPMS')

    .fontSize(10)
    .text('clientid: 623acf7e1593745c7e3d3ac6')
    .fontSize(20)
    .text('sold By:')
    .fontSize(15)
    .text('amazon')
    .fontSize(15)
    .text('PAN NO: XCV78786L', 70, 200)
    .text('GST Registration No: ix45454TC')
    .text('Order Number:A-564654677', 70, 250)
    .text('Order Date: 19.06.2022')

    .text('Tax Invoice/Bill /Cash ', 370, 80)
    .text('(Original for Reciplent)')
    .text('Billing Address:')
    .text('unit_id')
    .text('Description', 50, 350)

    .fontSize(12)
    .text('unit Price, Qty, nate Amount, tax Rate, tax Amount, total Amount',160,350)
    .text(' Rs 43.7     3   Rs 43.3       9.00%    Rs 3.92      Rs 47.9')
    .fontSize(14)
    .text('tax Amount',360, 450)
    .text('Rs 3.92')
    .text('total Amount',450, 450)
    .text('Rs 47.9')
    .fontSize(20)
    .text('total', 150, 450)
    .fontSize(9)
    .text('amount in word:',50, 420)
    .text('forty seven') 

    .fontSize(15)
    .text('For RPMS:',470, 500)





    .scale(0.6)
    .translate(470, -380)
    .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
    .fill('red', 'even-odd')
    .restore();

doc

    .addPage()
    .fillColor('blue')
    .text("khushboo sharma", 100, 100,)
    .link(100, 100, 160, 27, 'https://www.geeksforgeeks.org/');

// Finalize PDF file
doc.end();


