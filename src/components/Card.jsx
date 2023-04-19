export const Card = () => {
  return (
    <div className="card mx-3 my-2" style={{ width: 18 + `rem` }}>
      <img
        src="../src/assets/medicamento-tarja-vermelha-300x300.png"
        className="card-img-top"
        alt="Medicamento"
      />
      <div className="card-body">
        <h5 className="card-title">Nome do Medicamento</h5>
        <h6 className="fs-6">Laboratório</h6>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
          laboriosam sunt quos debitis quasi a id incidunt quis eveniet fuga
          cumque, inventore molestias dolor.
        </p>
        <a href="#" className="btn btn-primary">
          Mais informções
        </a>
      </div>
    </div>
  );
};
