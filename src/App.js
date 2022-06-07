import React, { useState, useEffect } from "react";
import "./app.css";

import View from "./components/layout/View";
import Table from "./components/layout/Table";
import Heading from "./components/layout/Heading";
import ActionCTA from "./components/action/ActionCTA";

import useData from "./hooks/useData";
import useMarkets from "./hooks/useMarkets";
import useTickets from "./hooks/useTickets";

import { generateHeaders, generateRowsData } from "./utils";

const App = () => {
  const { data: ticketsData } = useTickets();
  const { data: marketsData } = useMarkets();
  const { data: pricingData } = useData();

  const [tableRows, setTableRows] = useState([]);
  const [tableHeaders, setTableHeaders] = useState([]);

  useEffect(() => {
    const headersData = generateHeaders(marketsData);
    const formattedRowsData = generateRowsData(
      ticketsData,
      headersData,
      pricingData
    );
    setTableHeaders(headersData);
    setTableRows(formattedRowsData);
  }, [pricingData, ticketsData, marketsData]);

  return (
    <View>
      <Heading level={1} title={"Pricing Matrix"} />
      <Table columns={tableHeaders} data={tableRows} />{" "}
      <ActionCTA change={() => alert("saved")}>Click me</ActionCTA>
    </View>
  );
};

export default App;
