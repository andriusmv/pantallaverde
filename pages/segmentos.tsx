import { useState } from "react";
import { MantineProvider, Pagination } from "@mantine/core";
import { randomId } from "@mantine/hooks";
import { chunk } from "lodash";

const data = chunk(
  Array(30)
    .fill(0)
    .map((_, index) => ({ id: index, name: randomId() })),
  5
);

export default function Segmentos() {
  const [activePage, setPage] = useState(1);
  const items = data[activePage - 1].map((item) => (
    <div key={item.id}>
      id: {item.id}, name: {item.name}
    </div>
  ));
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      {items}
      <Pagination total={data.length} page={activePage} onChange={setPage} />
    </MantineProvider>
  );
}
