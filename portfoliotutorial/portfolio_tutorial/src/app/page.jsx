import Image from "next/image";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import PdfViewer from "./components/Pdfviewer/Pdfviewer";

export default function Home() {
  return (
    <main>
      <HomeComponent />
      {/* <PdfViewer /> */}
    </main>
  );
}
