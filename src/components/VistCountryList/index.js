import "./index.css";

const VisitCountryList = (props) => {
  const { countriesList, isActive } = props;
  const { name, id, isVisited } = countriesList;

  const onClickAdd = () => {
    isActive(id);
  };
  return (
    <li className="countries-list">
      <div className="country-container">
        <p className="country-name">{name}</p>
        {isVisited ? (
          <p className="Visited">Visited</p>
        ) : (
          <button onClick={onClickAdd} className="Visit" type="button">
            Visit
          </button>
        )}
      </div>
    </li>
  );
};
export default VisitCountryList;
