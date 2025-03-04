import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from "@mui/material";
import { useState } from "react";

interface RowData {
  id: number;
  nome: string;
  email: string;
  idade: number;
}

const rows: RowData[] = [
  { id: 1, nome: "João Silva", email: "joao@email.com", idade: 30 },
  { id: 2, nome: "Maria Oliveira", email: "maria@email.com", idade: 25 },
  { id: 3, nome: "Carlos Souza", email: "carlos@email.com", idade: 40 },
  { id: 4, nome: "Ana Santos", email: "ana@email.com", idade: 28 },
  { id: 5, nome: "Lucas Costa", email: "lucas@email.com", idade: 35 },
  { id: 1, nome: "João Silva", email: "joao@email.com", idade: 30 },
  { id: 2, nome: "Maria Oliveira", email: "maria@email.com", idade: 25 },
  { id: 3, nome: "Carlos Souza", email: "carlos@email.com", idade: 40 },
  { id: 4, nome: "Ana Santos", email: "ana@email.com", idade: 28 },
  { id: 5, nome: "Lucas Costa", email: "lucas@email.com", idade: 35 },
];

const TableComponent = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper} sx={{ width: "100%", mt: 3 }}>
      <Table size="small">
        <TableHead>
          <TableRow sx={{ backgroundColor: "#1976d2" }}>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>ID</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>Nome</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>Email</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>Idade</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow key={row.id} hover>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.nome}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.idade}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <TablePagination
        rowsPerPageOptions={[3, 5, 10]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export default TableComponent;
