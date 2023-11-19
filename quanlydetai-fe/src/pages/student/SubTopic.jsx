import React from "react";
import {
  Autocomplete,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import MainLayout from "../../components/layout/MainLayout";
import { DataGrid } from "@mui/x-data-grid";

const listTeacher = [
  { label: "Teacher1" },
  { label: "Teacher1" },
  { label: "Teacher1" },
];

const listType = [{ label: "CNTT" }, { label: "DTVT" }, { label: "ATTT" }];

const listSpec = [
  { label: "Lập trình nhúng" },
  { label: "Lập trình di động" },
  { label: "Lập trình Game" },
];

const rows = [
  {
    id: 1,
    name: "Đề tài 1",
    teacher: "Teacher1",
    password: "123",
    type: "CNTT",
    spec: "Lập trình game",
  },
  {
    id: 2,
    name: "Đề tài 2",
    teacher: "Teacher2",
    type: "DTVT",
    spec: "Lập trình nhúng",
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
  { field: "teacher", headerName: "Giáo viên hướng dẫn", width: 150 },
  { field: "type", headerName: "Khoa", width: 150 },
  { field: "spec", headerName: "Ngành", width: 150 },
  {
    field: "",
    headerName: "Hành động",
    width: 250,
    renderCell: (params) => {
      return (
        <Box display={"flex"} gap={2} alignItems={"center"}>
          <Button variant="contained" size="small">
            Đăng kí
          </Button>
          <Button variant="contained" size="small" color="success">
            Chi tiết
          </Button>
        </Box>
      );
    },
  },
];

function SubTopic() {
  return (
    <MainLayout type="student">
      <Button fullWidth size="large" variant="contained">
        Đăng kí đề tài
      </Button>
      <Box mt={4}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={listTeacher}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Giáo viên hướng dẫn"
                  size="small"
                  fullWidth
                />
              )}
            />
          </Grid>

          <Grid item xs={6}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={listType}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Chuyên ngành"
                  size="small"
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={listSpec}
              renderInput={(params) => (
                <TextField {...params} label="Khoa" size="small" fullWidth />
              )}
            />
          </Grid>

          <Grid item xs={6}>
            <Box
              display={"flex"}
              gap={2}
              alignItems={"center"}
              justifyContent={"flex-end"}
            >
              <Button variant="outlined" color="error">
                Clear
              </Button>
              <Button variant="contained">Tìm kiếm</Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Typography variant="subtitle2" color={"error"} mt={4}>
        *Lưu ý: Sinh viên muốn đề xuất đề tài vui lòng liên hệ với GVHD
      </Typography>
      <Box height={300} width={"100%"} mt={2}>
        <DataGrid rows={rows} columns={columns} hideFooter={true} />
      </Box>
    </MainLayout>
  );
}

export default SubTopic;
