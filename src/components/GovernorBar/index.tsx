import "./styles.css";

export const GovernorBar = () => {
  return (
    <div className="governor-bar" role="tabpanel" tabIndex={0}>
      <h1 className="governor-bar__title">Nicolás Garcia Bustos</h1>
      <span className="governor-bar__separator" />
      <h2 className="governor-bar__subtitle">Gobernador</h2>
    </div>
  );
};
