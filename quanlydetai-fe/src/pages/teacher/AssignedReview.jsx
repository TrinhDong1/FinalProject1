import { Button, Box } from "@mui/material";
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import MainLayout from "../../components/layout/MainLayout";

const rows = [
  {
    id: "025981",
    teacher: "Ronaldo",
    title: "Đề tài 1",
    date: "13/11/2023",
  },
  {
    id: "962682",
    teacher: "Messi",
    title: "Đề tài 2",
    date: "13/11/2023",
  },
];

function AssignedReview() {
  const columns = [
    {
      field: "id",
      headerName: "Mã đề tài",
      width: 150,
      valueGetter: (params) => {
        return params.value;
      },
    },
    { field: "title", headerName: "Tiêu đề", width: 150 },
    { field: "date", headerName: "Thời gian phản biện", width: 150 },
    {
      field: "",
      headerName: "Action",
      width: 300,
      renderCell: (params) => {
        return (
          <Box display={"flex"} gap={2} alignItems={"center"}>
            <Button variant="contained" size="small">
              Chi tiết
            </Button>
          </Box>
        );
      },
    },
  ];
  return (
    <MainLayout type="teacher">
      <Button fullWidth size="large" variant="contained">
        Đề tài được phân công phản biện
      </Button>
      <Box height={300} width={"100%"} mt={4}>
        <DataGrid rows={rows} columns={columns} />
      </Box>
    </MainLayout>
  );
}

export default AssignedReview;
