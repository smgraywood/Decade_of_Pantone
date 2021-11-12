import { render, waitFor } from "@testing-library/react";

import ColorCard from "../Tasks/ColorCard";

// Group test for a component
// undefined (failed) -> what happens if API just breaks
// test actually renders data => Set up intial value to be an empty []
// test does component load => With actual data

// Color Card unit test
test("Does render color card data", () => {
  let mockColorData = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  const { getByText, container } = render(
    <ColorCard colorCardData={mockColorData} />,
  );
  console.log(container.innerHtml);
  getByText("1");
  getByText("2");
  getByText("3");
});
