import {PDFDocument} from 'pdf-lib';

export const mergePDFs = async (firstPDF: Buffer, secondPDF: Buffer): Promise<string> => {
  const pdfDoc = await PDFDocument.load(firstPDF);
  const pdfDocSecond = await PDFDocument.load(secondPDF);
  const [firstPage] = await pdfDoc.copyPages(pdfDocSecond, [0]);
  pdfDoc.addPage(firstPage);
  return pdfDoc.saveAsBase64();
};
