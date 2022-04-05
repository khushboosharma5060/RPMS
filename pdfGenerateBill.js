const PDFDocument = require('pdfkit');
const fs = require('fs');
const {getUserCollection} = require('./mongodb');
const { ObjectId } = require('mongodb');
const {getPropertyCollection} = require('./mongodb')
const {getUnitCollection} = require('./mongodb')


const doc = new PDFDocument();
async function generateBillPdf(payment) { 
  // console.log(payment)
  const user = await getUserCollection().findOne({_id:new ObjectId(payment.user_id)})
  // console.log(user)
  const unit = await getUnitCollection().findOne({ _id: new ObjectId(payment.unit_id) });
  console.log(unit)
  const property = await getPropertyCollection().findOne({ _id: new ObjectId(unit.property)});
  // console.log(property)

  doc.pipe(fs.createWriteStream('my_bill.pdf'));

doc
 
    // .addPage()
    .image('unit_photos/bill_image.jpg',385,74, {
      fit: [150, 100],
      align: 'center',
      valign: 'center'
    })
    .fontSize(35)
    .fill('blue', 'even-odd')
    .text('RPMS', 30, 40)

    .fontSize(13)
    .fill('black', 'even-odd')
    .text(`Address : ${property.Adress}`, 35, 115)
    .text(`Name : ${user.name}`, 35, 135)
    .text(`phone : ${user.Phone}`, 35, 155)
    .text(`Email : ${user.email}`, 35, 175)
    .text('____________________________________________________________', 35, 187)

    .fontSize(18)
    .fill('black', 'even-odd')
   .text(`Billed To:`, 25, 225)
 
    .fill('grey', 'even-odd')
    .fontSize(13)
    .text(` ${user.name}`)
    .text(`Add : ${property.Adress}`)
    .text(`Ph : ${user.Phone}`)

    .fontSize(13)
    .fill('blue', 'even-odd')
    .text('Date' , 380, 210)
    .fill('black', 'even-odd')
    .text(`: ${payment.created}`,  410, 225)
    
    .text('Property Address', 290, 318)
    .text('Rent', 490, 320)

    .fill('grey', 'even-odd')
    .text(`Rs : ${unit.rentel_amount}`, 475, 390)
    .fill('black', 'even-odd')
    .text('TOTAL', 400, 390)
    .fill('grey', 'even-odd')
    .text('Fee(s)', 400, 370)
    .fill('black', 'even-odd')

    .fontSize(18)
    .text('Tearms and Conditions', 100, 515)
    .text('______________________', 100, 515)
    .fill('black', 'even-odd')
    .fontSize(14)
    .text('Payment Instructions:', 105, 555)
    .text('Terms:', 110, 590)
    .text('_______________________________________________________', 100, 620)
    .text('Company Signature:_______________________________', 110, 660)

    .fill('blue', 'even-odd')
    .text('[CREAT ACCOUNT]', 118, 703)
    .fill('black', 'even-odd')
    .text('[CLEAR FORM]', 275, 703)
    .text('[PRINT FORM]', 400, 703)




  doc
    .scale(0.6)
    .translate(470, -380)
    .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
    .fill('red', 'even-odd')
    .restore()

  doc.end();


}
module.exports = {
  generateBillPdf
};
