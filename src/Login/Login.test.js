// Login.test.js
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from 'react-redux';
import { store } from '../_helpers';

import Login from "./Login";

test("rendering and submitting a basic Formik form", async () => {
  const handleSubmit = jest.fn();
  render(
    <Provider store={store}>
      <Login onSubmit={handleSubmit} />
    </Provider>
  );

  userEvent.type(screen.getByLabelText(/email/i), "admin@admin.com");
  userEvent.type(screen.getByLabelText(/password/i), "password");

  userEvent.click(screen.getByRole("button", { name: /submit/i }));

//   await waitFor(() =>
//     expect(handleSubmit).toHaveBeenCalledWith(
//       {
//         email: "admin@admin.com",
//         password: "password",
//       },
//       expect.anything()
//     )
//   );
});
