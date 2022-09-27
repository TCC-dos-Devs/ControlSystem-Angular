export interface ProdutoDTO {
  id: number;
  categoria: string;
  name: string;
  validade: number;
  sabor: string;
  quantidade: number;
  descricao: string;
}

// json-server --watch db.json
