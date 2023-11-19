import { Button, Box, Grid, Typography, TextField } from "@mui/material";
import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import MainLayout from "../../components/layout/MainLayout";
import ModalUpdate from "../../components/common/ModalUpdate";

const rows = [
  {
    id: "035891",
    teacher: "Ronaldo",
    title: "Đề tài 1",
    status: "Đã được phê duyệt",
  },
  {
    id: "253696",
    teacher: "Messi",
    title: "Đề tài 2",
    status: "Đã được phê duyệt",
  },
];

function AssignTeacherReview() {
  const [isOpenModal, setIsOpenMdal] = useState(false);
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
    { field: "teacher", headerName: "Giáo viên HD", width: 150 },
    { field: "status", headerName: "Trạng thái", width: 200 },
    {
      field: "",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <Box display={"flex"} gap={2} alignItems={"center"}>
            <Button
              variant="contained"
              size="small"
              onClick={() => setIsOpenMdal(true)}
            >
              Phân công
            </Button>
          </Box>
        );
      },
    },
  ];
  return (
    <MainLayout>
      <Button fullWidth size="large" variant="contained">
        Phân công hội đồng phản biện
      </Button>
      <Box height={300} width={"100%"} mt={4}>
        <DataGrid rows={rows} columns={columns} />
      </Box>
      <ModalUpdate
        open={isOpenModal}
        handleClose={() => setIsOpenMdal(false)}
        title={"Phân công hội đồng phản biện"}
      >
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Typography variant="subtitle2">Giáo viên phản biện:</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField fullWidth size="small" />
          </Grid>
        </Grid>
        <Grid container spacing={2} mt={2}>
          <Grid item xs={4}>
            <Typography variant="subtitle2">Mã số cán bộ:</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField fullWidth size="small" />
          </Grid>
        </Grid>
        <Grid container spacing={1} mt={2}>
          <Grid item xs={4}>
            <Typography variant="subtitle2">Ngày phản biện:</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField fullWidth size="small" type="date" />
          </Grid>
        </Grid>
      </ModalUpdate>
    </MainLayout>
  );
}

export default AssignTeacherReview;
