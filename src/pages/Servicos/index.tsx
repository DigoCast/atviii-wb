import React, { useState, useMemo } from "react";
import SearchBar from "../../components/SearchBar";
import { Link } from "react-router-dom";

interface IServico {
  id: string;
  nomeServ: string;
  descricao: string;
  valor: number;
}

const Servico: React.FC = () => {
  const [servicos] = useState<IServico[]>([
    {
      id: "S1",
      nomeServ: "Corte Masculino",
      descricao: "Corte de cabelo padrão máquina",
      valor: 30,
    },
    {
      id: "S2",
      nomeServ: "Hidratação",
      descricao: "Hidratação de cabelo",
      valor: 79.99,
    },
    {
      id: "S3",
      nomeServ: "Limpeza de pele",
      descricao: "Limpeza de pele com máscaras de argila",
      valor: 50,
    },
  ]);

  const [filtro, setFiltro] = useState<string>("");

  const servicosFiltrados = useMemo(() => {
    if (!filtro) return servicos;
    return servicos.filter(
      (servico) =>
        servico.id.toLowerCase().includes(filtro.toLowerCase()) ||
        servico.nomeServ.toLowerCase().includes(filtro.toLowerCase())
    );
  }, [servicos, filtro]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiltro(e.target.value);
  };

  return (
    <div className="container-tipos">
      <div className="container-cli-pro-ser">
        <h2>Serviços</h2>
        <div className="search-session">
          <div className="search-bar">
            <SearchBar
              placeholder="Digite o ID ou nome do serviço"
              onChange={handleSearchChange}
            />
          </div>
          <Link to={"/cadastroservico"} style={{ color: "inherit" }}>
            <div className="button-cadastro">
              <span>Cadastrar Serviço</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="table-component" role="region" tabIndex={0}>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {servicosFiltrados.map((servico) => (
              <tr key={servico.id}>
                <td>{servico.id}</td>
                <td>{servico.nomeServ}</td>
                <td>{servico.descricao}</td>
                <td>R$ {servico.valor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Servico;
