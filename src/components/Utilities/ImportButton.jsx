import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function ImportButton() {
  return (
    <button className="flex gap-2" title="Important">
      <AiFillStar />
      {/* <AiOutlineStar /> */}
    </button>
  );
}
