import React, { useState, useMemo } from "react";
import SearchBar from "../../components/SearchBar";
import { Link } from "react-router-dom";

interface IProduto {
  id: string;
  nomeProd: string;
  descricao: string;
  valor: number;
}

const Produto: React.FC = () => {
  const [produtos] = useState<IProduto[]>([
    {
      id: "P1",
      nomeProd: "Locao Capilar",
      descricao: "Locao para deixar os cabelos mais sedosos.",
      valor: 35.99,
    },
    {
      id: "P2",
      nomeProd: "Creme Hidratante",
      descricao: "Creme hidratante para passar no rosto, maos e corpo.",
      valor: 20.45,
    },
  ]);

  const [filtro, setFiltro] = useState<string>("");

  const produtosFiltrados = useMemo(() => {
    if (!filtro) return produtos;
    return produtos.filter(
      (produto) =>
        produto.id.toLowerCase().includes(filtro.toLowerCase()) ||
        produto.nomeProd.toLowerCase().includes(filtro.toLowerCase())
    );
  }, [produtos, filtro]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiltro(e.target.value);
  };

  return (
    <div className="container-tipos">
      <div className="container-cli-pro-ser">
        <h2>Produtos</h2>
        <div className="search-session">
          <div className="search-bar">
            <SearchBar
              placeholder="Digite o ID ou o nome do produto"
              onChange={handleSearchChange}
            />
          </div>
          <Link to={"/cadastroproduto"} style={{ color: "inherit" }}>
            <div className="button-cadastro">
              <span>Cadastrar Produto</span>
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
            {produtosFiltrados.map((produto) => (
              <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.nomeProd}</td>
                <td>{produto.descricao}</td>
                <td>R$ {produto.valor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Produto;
