import { AiFillCheckSquare, AiFillCloseSquare, AiFillEdit } from "react-icons/ai";

function Icons({ todo, update, remove, onToggle }) {
  return (
    <div className="icons">
      <AiFillCheckSquare onClick={() => onToggle(todo.id)} style={{ color: "green", cursor: "pointer" }} size="1.6rem" />
      <AiFillEdit onClick={() => update(todo)} style={{ color: "blue", cursor: "pointer" }} size="1.6rem" />
      {/* <RiStarLine /> */}
      <AiFillCloseSquare onClick={() => remove(todo.id)} style={{ color: "red", cursor: "pointer" }} size="1.6rem" />
    </div>
  );
}

export default Icons;
