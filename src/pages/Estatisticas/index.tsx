import React, { useState } from "react";
import "./style.css";

interface MaisConsumiramCliente {
  id: number;
  nome: string;
  cpf: string;
  produto: string;
  servico: string;
}

const EstatisticaPage: React.FC = () => {
  const [clientesMaisConsumiramQnt] = useState<MaisConsumiramCliente[]>([
    {
      id: 1,
      nome: "João Silva",
      cpf: "123.456.789-00",
      produto: "34",
      servico: "18",
    },
    {
      id: 2,
      nome: "Teste da Silva",
      cpf: "123.456.092-00",
      produto: "23",
      servico: "11",
    },
    {
      id: 3,
      nome: "Teste da Silva",
      cpf: "123.456.092-00",
      produto: "15",
      servico: "10",
    },
    {
      id: 4,
      nome: "Diego Castilho",
      cpf: "123.456.092-00",
      produto: "12",
      servico: "9",
    },
  ]);

  const [clientesMaisConsumiramValor] = useState<MaisConsumiramCliente[]>([
    {
      id: 1,
      nome: "João Silva",
      cpf: "123.456.789-00",
      produto: "R$ 4040,99",
      servico: "R$ 1200,99",
    },
    {
      id: 2,
      nome: "Teste da Silva",
      cpf: "123.456.092-00",
      produto: "R$ 3900,89",
      servico: "R$ 900,99",
    },
    {
      id: 3,
      nome: "Teste da Silva",
      cpf: "123.456.092-00",
      produto: "R$ 2400,79",
      servico: "R$ 857,99",
    },
    {
      id: 4,
      nome: "Diego Castilho",
      cpf: "123.456.092-00",
      produto: "R$ 1004,99",
      servico: "R$ 700,99",
    },
  ]);

  return (
    <div className="container-estatisticas">
      <h2>Estatísticas e Listagens</h2>

      <div className="title-top-10">
        <p>
          10 clientes que mais consumiram produtos ou serviços,{" "}
          <b>em quantidade.</b>
        </p>
      </div>
      <div className="table-component-listagem" role="region" tabIndex={0}>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>CPF</th>
              <th>
                <div className="dropdown-filter">
                  Produtos
                  <select className="genero-dropdown">
                    <option value="Ascendente">Ascendente</option>
                    <option value="Decrescente">Decrescente</option>
                  </select>
                </div>
              </th>
              <th>
                <div className="dropdown-filter">
                  Serviços
                  <select className="genero-dropdown">
                    <option value="Ascendente">Ascendente</option>
                    <option value="Decrescente">Decrescente</option>
                  </select>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {clientesMaisConsumiramQnt.map((cliente) => (
              <tr key={cliente.id}>
                <td>{cliente.nome}</td>
                <td>{cliente.cpf}</td>
                <td>{cliente.produto}</td>
                <td>{cliente.servico}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="title-top-10-valor">
        <p>
          Listagem dos 5 clientes que mais consumiram <b>em valor.</b>
        </p>
      </div>

      <div className="table-component-listagem" role="region" tabIndex={0}>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>CPF</th>
              <th>Produtos</th>
              <th>Serviços</th>
            </tr>
          </thead>
          <tbody>
            {clientesMaisConsumiramValor.map((cliente) => (
              <tr key={cliente.id}>
                <td>{cliente.nome}</td>
                <td>{cliente.cpf}</td>
                <td>{cliente.produto}</td>
                <td>{cliente.servico}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EstatisticaPage;
