import { vi } from "vitest";
import "@testing-library/jest-dom";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    //@ts-ignore
    ...actual,
    useParams: () => ({ name: "mock-project", id: "mock-id" }),
    useNavigate: () => vi.fn(),
  };
});
