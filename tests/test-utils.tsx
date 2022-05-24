import {render} from "@testing-library/react";

import "@testing-library/jest-dom";
import ClientOnly from "../components/ClientOnly";

const ClientOnlyRender: React.FC = ({children}) => {
  return <ClientOnly>{children}</ClientOnly>;
};

const customRender = (ui: any, options?: any) =>
  render(ui, {
    wrapper: ClientOnlyRender,
    ...options,
  });

export * from "@testing-library/react";
export {customRender as render};
