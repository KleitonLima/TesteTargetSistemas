import fs from 'fs/promises';

const invoiceCalculation = async () => {
  try {
    const data = await fs.readFile('./invoices.json', 'utf-8');
    const invoices = JSON.parse(data);

    const validInvoices = invoices.filter(
      (invoice) => parseFloat(invoice.valor) > 0
    );

    if (validInvoices.length === 0) {
      console.log('Nenhuma fatura válida encontrada.');
      return;
    }

    let highestInvoice = 0;
    let lowestInvoice = 0;
    let totalInvoice = 0;

    validInvoices.forEach((invoice) => {
      const value = parseFloat(invoice.valor);

      if (value > highestInvoice) highestInvoice = value;
      if (value < lowestInvoice || lowestInvoice === 0) lowestInvoice = value;

      totalInvoice += parseFloat(invoice.valor);
    });

    const averageInvoice = totalInvoice / validInvoices.length;

    const daysAboveAverage = validInvoices.filter(
      (invoice) => invoice.valor > averageInvoice
    ).length;

    console.log(`Maior valor: ${highestInvoice}`);
    console.log(`Menor valor: ${lowestInvoice}`);
    console.log(`Valor médio: ${averageInvoice}`);
    console.log(`Total de dias com faturamento: ${validInvoices.length}`);
    console.log('Dias com valor acima da média: ', daysAboveAverage);
    console.log(
      'Dias com valor abaixo da média: ',
      validInvoices.length - daysAboveAverage
    );
  } catch (error) {
    console.error('Erro ao ler o arquivo:', error);
  }
};

invoiceCalculation();

