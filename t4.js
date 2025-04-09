const monthlyInvoicing = [
  { distributor: 'SP', value: 67836.43 },
  { distributor: 'RJ', value: 36678.66 },
  { distributor: 'MG', value: 29229.88 },
  { distributor: 'ES', value: 27165.48 },
  { distributor: 'Outros', value: 19849.53 },
];

const totalInvoicing = monthlyInvoicing.reduce(
  (sum, state) => sum + state.value,
  0
);

monthlyInvoicing.forEach((invoice) => {
  const percentage = ((invoice.value / totalInvoicing) * 100).toFixed(2) + '%';

  console.log(`${invoice.distributor}: ${percentage}`);
});
