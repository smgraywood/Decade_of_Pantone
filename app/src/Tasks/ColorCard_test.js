import { render, waitFor } from "@testing-library/react";

import fetchColorData from "./index.js";

test("api_load", async () => {
  const { getByText, findByText } = render(<fetchColorData />);

  getByText("Stuff:");

  // Our service just returns a thing named "fuzzy wuzzy".
  // On the initial render the value is not there, because the
  // `useEffect` hasn't run yet. But if we use `waitFor`, it
  // will show up...
  await waitFor(() => findByText("data.result"));
});

// Tell jest to "mock" all the objects within this `import`ed file.
// It's a little confusing, but this actually mocks out the calls that our
// component under test, Tile, is using. The calls it makes are re-routed
// to our mock.
jest.mock("./index.js");

test("loading tile", async () => {
  // As the test begins, change the behavior of our service.
  mockGetter.mockImplementation(() =>
    Promise.resolve(`rgb(${c[0]}, ${c[1]}, ${c[2]}`),
  );

  // Then write a regular test, noting the data is coming from our mock.
  const { getByText, findByText } = render(<fetchColorData />);

  // This is drawn on the initial render of the component, so it's here already.
  getByText("Stuff:");

  // A call of `findByText('Candelabra')` will fail, because the data has not been fetched yet.
  // In order to make this work, we need a `waitFor` construct (or equivalent).

  await waitFor(() => findByText("Old Clothes"));
  await findByText("Candelabra");
});
