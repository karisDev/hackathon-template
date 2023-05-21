import { Navigate, Route, Routes } from "react-router-dom";
import Heading from "@/components/Heading";

const Main = () => {
  return (
    <>
      <Heading />
      <Routes>
        <Route index element={<h1>Index</h1>} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default Main;
