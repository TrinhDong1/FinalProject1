import React from "react";
import { Button, Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import MainLayout from "../../components/layout/MainLayout";

const rows = [
  {
    id: 1,
    name: "Ronaldo",
    phone: "012345987",
    email: "ronaldo@gmail.com",
    type: "CNTT",
    role: "Trưởng khoa",
  },
  {
    id: 2,
    name: "Messi",
    email: "messi@gmail.com",
    phone: "012389987",
    type: "DTVT",
    role: "Phó khoa",
  },
];

const columns = [
  {
    field: "id",
    headerName: "STT",
    width: 50,
    valueGetter: (params) => {
      return params.value;
    },
  },
  { field: "name", headerName: "Họ tên", width: 150 },
  { field: "email", headerName: "Email", width: 150 },
  { field: "phone", headerName: "Số điện thoại", width: 150 },
  { field: "type", headerName: "Chuyên ngành", width: 150 },
  { field: "role", headerName: "Vai trò", width: 150 },
];

function GuestContact() {
  return (
    <MainLayout>
      <Button fullWidth size="large" variant="contained">
        Thông tin liên hệ
      </Button>
      <Box height={300} width={"100%"} mt={4}>
        <DataGrid rows={rows} columns={columns} />
      </Box>
    </MainLayout>
  );
}

export default GuestContact;
