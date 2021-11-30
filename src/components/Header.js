import { BsCardChecklist } from "react-icons/bs";

function Header({ title }) {
  return (
    <header className="header">
      <h1>
        Todo List
        <BsCardChecklist className="header-icon" />
      </h1>
    </header>
  );
}

export default Header;
