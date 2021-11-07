import { BsCardChecklist } from "react-icons/bs";

function Header({ title }) {
  return (
    <header className="header">
      <h1>
        Todo List <BsCardChecklist size="2.5rem" />
      </h1>
    </header>
  );
}

export default Header;
