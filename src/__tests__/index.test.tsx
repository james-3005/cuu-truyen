import { describe, vi, it, expect } from "vitest";
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import Banner from "@/components/home/Banner";
import { BrowserRouter } from "react-router-dom";
import Login from "@/components/Login";

const mock = vi.fn().mockReturnValue({ new: 1 });
describe("test suit 1", () => {
  it("should render success", () => {
    console.log(mock());
    render(<Banner />);
    // console.log(screen.getAllByText("Xem thông tin")[0]);
    expect(screen.getAllByText("Xem thông tin")[0]).toBeVisible();
  });
  it("render Login com", async () => {
    const { getByText } = await waitFor(() => {
      return render(
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      );
    });

    await act(async () => {
      const signText = getByText("Sign in with Github");
      fireEvent.click(signText);
      expect(signText).toBeVisible();
    });
  });
});

vi.mock("@auth0/auth0-react", () => ({
  useAuth0: () => ({
    user: {},
    getAccessTokenSilently: () => {},
    loginWithRedirect: () => {},
    isLoading: false,
  }),
}));
