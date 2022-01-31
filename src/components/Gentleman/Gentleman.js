import "./Gentleman.css";

const Gentleman = ({ gentlemanData }) => {
  const name = gentlemanData.name;
  let firstLetter = "";
  if (name === "The Farytale") {
    firstLetter = "F";
  } else {
    firstLetter = gentlemanData.name[0].toUpperCase();
  }

  const selected = gentlemanData.selected;
  let classSelected = "";
  if (selected === true) classSelected = "gentleman selected";
  else classSelected = "gentleman";

  return (
    <li className={classSelected}>
      <div className="gentleman__avatar-container">
        <img
          className="gentleman__avatar"
          src={gentlemanData.picture}
          alt={gentlemanData.alternativeText}
        />
        <span className="gentleman__initial">{firstLetter}</span>
      </div>
      <div className="gentleman__data-container">
        <h2 className="gentleman__name">{gentlemanData.name}</h2>
        <ul className="gentleman__data-list">
          <li className="gentleman__data">
            <span className="gentleman__data-label">Profession:</span>
            {gentlemanData.profession}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Status:</span>{" "}
            {gentlemanData.status}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Twitter:</span>{" "}
            {gentlemanData.twitter}
          </li>
        </ul>
      </div>
      <i className="icon gentleman__icon fas fa-check"></i>
      <i className="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
    </li>
  );
};

export default Gentleman;
