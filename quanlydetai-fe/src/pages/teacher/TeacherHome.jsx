import React from "react";
import { Autocomplete, Box, Button, TextField, Chip } from "@mui/material";
import MainLayout from "../../components/layout/MainLayout";
import { DataGrid } from "@mui/x-data-grid";

const rows = [
  {
    id: "05881",
    name: "Đề tài 1",
    student: "",
    status: 0,
  },
  {
    id: "59892",
    name: "Đề tài 2",
    student: "Student2",
    status: 1,
  },
  {
    id: "59893",
    name: "Đề tài 3",
    student: "Student3",
    status: 2,
  },
];

const columns = [
  {
    field: "id",
    headerName: "Mã đề tài",
    width: 150,
  },
  { field: "name", headerName: "Tên đề tài", width: 150 },
  { field: "student", headerName: "Khoa", width: 150 },
  {
    field: "status",
    headerName: "Trạng thái",
    width: 200,
    renderCell: (params) => {
      const label =
        params.row.status == 0
          ? "Chưa được phê duyệt"
          : params.row.status == 1
          ? "Chưa có người đăng kí"
          : "Đã có người đăng kí";
      const color =
        params.row.status == 0
          ? "error"
          : params.row.status == 1
          ? "primary"
          : "success";
      return <Chip label={label} color={color} />;
    },
  },
  {
    field: "",
    headerName: "Hành động",
    width: 250,
    renderCell: (params) => {
      return (
        <Box display={"flex"} gap={2} alignItems={"center"}>
          {params.row.status == 0 && (
            <Button variant="contained" size="small" color="error">
              Xóa
            </Button>
          )}

          {params.row.status == 2 && (
            <Button variant="contained" size="small" color="success">
              Phân công
            </Button>
          )}

          <Button variant="contained" size="small">
            Chi tiết
          </Button>
        </Box>
      );
    },
  },
];

function TeacherHome() {
  return (
    <MainLayout type="teacher">
      <Button fullWidth size="large" variant="contained">
        Quản lý đề tài
      </Button>
      <Box mt={4}>
        <Box
          display={"flex"}
          gap={2}
          alignItems={"center"}
          justifyContent={"flex-end"}
        >
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={[
              { label: "Chưa được phê duyệt" },
              { label: "Chưa có học viên đăng kí" },
              { label: "Đã có học viên đăng kí" },
            ]}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Trạng thái"
                size="small"
                fullWidth
              />
            )}
          />
          <Button variant="contained">Tìm kiếm</Button>
        </Box>
      </Box>
      <Box height={300} width={"100%"} mt={2}>
        <DataGrid rows={rows} columns={columns} hideFooter={true} />
      </Box>
    </MainLayout>
  );
}

export default TeacherHome;
