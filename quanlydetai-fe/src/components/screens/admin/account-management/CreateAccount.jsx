import { Box, Button, Grid, TextField, Select, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { create } from "../../../../utils/api/user";
import { notify } from "../../../../utils/helpers/notify";

function CreateAccount({ setList }) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState(0);

  const handleReset = () => {
    setName("");
    setUsername("");
    setPassword("");
    setEmail("");
    setRole(0);
  };

  const handleCreateUser = async (e) => {
    try {
      e.preventDefault();
      const res = await create({ name, username, password, email, role });
      notify("success", "Thêm tài khoản thành công");
      setList((prev) => [{ ...res?.data, id: res?.data?._id }, ...prev]);
      handleReset();
    } catch (error) {
      notify("error", error?.response?.data?.message);
    }
  };

  return (
    <Box>
      <Button fullWidth size="large" variant="contained">
        Quản lý tài khoản
      </Button>
      <Box mt={2}>
        <Grid
          container
          spacing={2}
          component={"form"}
          onSubmit={handleCreateUser}
        >
          <Grid item xs={6}>
            <TextField
              fullWidth
              size="small"
              label="Họ tên"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              size="small"
              label="Tên đăng nhập"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              size="small"
              label="Mật khẩu"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              size="small"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <Select
              label="Vai trò"
              fullWidth
              size="small"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <MenuItem value={0}>Sinh Viên</MenuItem>
              <MenuItem value={1}>Giảng Viên</MenuItem>
              <MenuItem value={2}>Trường bộ môn</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6}>
            <Box
              display={"flex"}
              alignItems={"center"}
              gap={2}
              justifyContent={"center"}
              height={"100%"}
            >
              <Button variant="contained" type="submit">
                Thêm tài khoản
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default CreateAccount;
