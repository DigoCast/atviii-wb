import React from "react";
import "./style.css";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import userIcon from "../../assets/images/user.png";
import productsIcon from "../../assets/images/products-icon.png";
import servicesIcon from "../../assets/images/servico-icon.png";
import Estatistica from "../../components/Estatistica";

const Home: React.FC = () => {
  return (
    <div className="container-home">
      <Banner />
      <div className="session-cards">
        <h2>Serviços Disponíveis</h2>
        <div className="cards-container">
          <div className="card-div">
            <Card
              title="Clientes"
              image={userIcon}
              descricao="Adicione, atualize ou exclua um cliente ao sistema para gerenciar suas informações e consumo."
              link="/cliente"
            />
          </div>
          <div className="card-div">
            <Card
              title="Produtos"
              image={productsIcon}
              descricao="Adicione, atualize ou exclua um produto ao sistema para gerenciar suas informações e consumo."
              link="/produto"
            />
          </div>
          <div className="card-div">
            <Card
              title="Serviços"
              image={servicesIcon}
              descricao="Adicione, atualize ou exclua um serviço ao sistema para gerenciar suas informações e consumo."
              link="/servico"
            />
          </div>
        </div>
      </div>
      <Estatistica />
    </div>
  );
};

export default Home;
