import "./style.css";

export const Header = ({ text }) => {
  const { title, description } = text;

  return (
    <div className="Container_Header">
      <div className="Content_Header">
        <h1 className="Text_Header">{title}</h1>
        <p className="Desc_Header">{description}</p>
      </div>
    </div>
  );
};

export default Header;
