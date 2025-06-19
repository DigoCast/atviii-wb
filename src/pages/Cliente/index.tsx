import React, { useState, useMemo } from "react";
import "./style.css";
import SearchBar from "../../components/SearchBar";
import { Link } from "react-router-dom";

interface ICliente {
  id: number;
  nome: string;
  genero: string;
  cpf: string;
  rg: string;
  telefone: string;
}

const Cliente: React.FC = () => {
  const [clientes] = useState<ICliente[]>([
    {
      id: 1,
      nome: "João Silva",
      genero: "Masculino",
      cpf: "123.456.789-00",
      rg: "12.345.678-9",
      telefone: "(11) 99999-9999",
    },
    {
      id: 2,
      nome: "Maria Souza",
      genero: "Feminino",
      cpf: "987.654.321-00",
      rg: "98.765.432-1",
      telefone: "(11) 98888-8888",
    },
    {
      id: 3,
      nome: "Carlos Oliveira",
      genero: "Masculino",
      cpf: "456.789.123-00",
      rg: "45.678.912-3",
      telefone: "(11) 97777-7777",
    },
    {
      id: 4,
      nome: "Diego Castilho",
      genero: "Masculino",
      cpf: "123.456.092-00",
      rg: "12.231.421-9",
      telefone: "(11) 99999-9999",
    },
  ]);

  const [filtro, setFiltro] = useState<string>("");
  const [filtroGenero, setFiltroGenero] = useState<string>("Todos");

  const clientesFiltrados = useMemo(() => {
    return clientes.filter((cliente) => {
      const matchNomeCpf =
        cliente.cpf.includes(filtro) ||
        cliente.nome.toLowerCase().includes(filtro.toLowerCase());
      const matchGenero =
        filtroGenero === "Todos" || cliente.genero === filtroGenero;
      return matchNomeCpf && matchGenero;
    });
  }, [clientes, filtro, filtroGenero]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiltro(e.target.value);
  };

  const handleGeneroChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFiltroGenero(e.target.value);
  };

  return (
    <div className="container-tipos">
      <div className="container-cli-pro-ser">
        <h2>Clientes</h2>
        <div className="search-session">
          <div className="search-bar">
            <SearchBar
              placeholder="Digite o CPF ou nome do cliente"
              onChange={handleSearchChange}
            />
          </div>
          <Link to={"/cadastrocliente"} style={{ color: "inherit" }}>
            <div className="button-cadastro">
              <span>Cadastrar Cliente</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="table-component" role="region" tabIndex={0}>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>
                <div className="dropdown-filter">
                  Gênero
                  <select
                    value={filtroGenero}
                    onChange={handleGeneroChange}
                    className="genero-dropdown"
                  >
                    <option value="Todos">Todos</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                  </select>
                </div>
              </th>
              <th>CPF</th>
              <th>RG</th>
              <th>Telefone</th>
            </tr>
          </thead>
          <tbody>
            {clientesFiltrados.map((cliente) => (
              <tr key={cliente.id}>
                <td>{cliente.nome}</td>
                <td>{cliente.genero}</td>
                <td>{cliente.cpf}</td>
                <td>{cliente.rg}</td>
                <td>{cliente.telefone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cliente;
