import { useParams } from "react-router-dom";
import LayoutPages from "../Layout/Pages/LayoutPages";

export default function TaskCategory() {
  const params = useParams();

  console.log(params);

  return <LayoutPages title={`${params}`} />;
}
