import React from "react";
import { Button, Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import MainLayout from "../../components/layout/MainLayout";

const rows = [
  {
    id: 1,
    name: "Ronaldo",
    year: "2018-2023",
  },
  {
    id: 2,
    name: "Messi",
    year: "2018-2023",
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
  { field: "name", headerName: "Người thực hiên", width: 200 },
  { field: "year", headerName: "Niên khóa", width: 200 },
  {
    field: "",
    headerName: "Action",
    width: 150,
    renderCell: (params) => {
      return (
        <Box display={"flex"} gap={2} alignItems={"center"}>
          <Button variant="contained" size="small">
            Báo cáo chi tiết
          </Button>
        </Box>
      );
    },
  },
];

function GuestPreference() {
  return (
    <MainLayout>
      <Button fullWidth size="large" variant="contained">
        Tài liệu tham khảo
      </Button>
      <Box height={300} width={"100%"} mt={4}>
        <DataGrid rows={rows} columns={columns} />
      </Box>
    </MainLayout>
  );
}

export default GuestPreference;
