import { ReactNode } from "react";
import { Footer, Navbar } from "../_components";

// export const metadata: Metadata = {
//   title:
// };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
