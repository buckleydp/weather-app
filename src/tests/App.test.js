import { render, screen } from "@testing-library/react";
import App from "../components/App";

test.skip("renders Weaather App", () => {
  render(<App />);
  const linkElement = screen.getByText(/WeatherApp/i);
  expect(linkElement).toBeInTheDocument();
});