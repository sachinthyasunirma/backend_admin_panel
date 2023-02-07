import MainLayout from "@/layouts/MainLayout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
