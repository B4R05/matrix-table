export const generateHeaders = (data) => {
  const INITIAL_HEADER = { key: "header", label: "Ticket" };
  return [
    INITIAL_HEADER,
    ...data.map(({ market_id, title }) => ({ key: market_id, label: title })),
  ];
};

export const generateRowsData = (ticketsData, headersData, pricingData) => {
  const INITIAL_HEADER_INDEX = 0;
  const FALLBACK_PRICING_VALUE = 0;

  return ticketsData.map(({ ticket_id, title }) => {
    let rowData = { ticket_id, header: title };
    headersData.forEach((country, index) => {
      if (index !== INITIAL_HEADER_INDEX) {
        const pricingWithNonZeroValue = pricingData.find(
          (pricing) =>
            pricing.ticket_id === ticket_id && pricing.market_id === country.key
        );
        rowData = {
          ...rowData,
          [country.key]: pricingWithNonZeroValue?.value
            ? pricingWithNonZeroValue.value
            : FALLBACK_PRICING_VALUE,
        };
      }
    });

    return rowData;
  });
};
