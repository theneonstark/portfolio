const Links = () => {
  const item = ["Homepage", "Service", "Portfolio", "Contact", "About"];


  return (
    <div className="links">
      {item.map((items) => (
        <a href={`#${items}`} key={items}>
          {items}
        </a>
      ))}
    </div>
  );
};

export default Links;
