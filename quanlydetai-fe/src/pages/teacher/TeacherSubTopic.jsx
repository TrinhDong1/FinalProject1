import React from "react";
import { Box, Button, Checkbox, FormControlLabel, FormGroup, Grid, TextField, Typography } from "@mui/material";
import MainLayout from "../../components/layout/MainLayout";

function TeacherSubTopic(){
    return (
        <MainLayout tye ="teacher">
        <Button fullWidth size ="large" variant="contained">Đăng ký đề tài</Button>
        <Box p={4}>

        <Grid container spacing={1} mt={1}>
        <Grid item xs={2}>
        <Typography variant="subtitle2">Tên đề tài:</Typography>
        </Grid>
        <Grid item xs={10}>
        <TextField fullWidth size="small"/>
        </Grid>
        </Grid>

       
        <Grid container spacing={1} mt={1}>
        <Grid item xs={2}>
        <Typography variant="subtitle2">Mô tả đề tài:</Typography>
        </Grid>
        <Grid item xs={10}>
        <TextField multiline rows={3} fullWidth/>
        </Grid>
        </Grid>

        
        <Grid container spacing={1} mt={1}>
        <Grid item xs={2}>
        <Typography variant="subtitle2">Chuyên ngành:</Typography>
        </Grid>
        <Grid item xs={10}>
        <TextField fullWidth size="small"/>
        </Grid>
        </Grid>

        
        <Grid container spacing={1} mt={1}>
        <Grid item xs={2}>
        <Typography variant="subtitle2">Khoa:</Typography>
        </Grid>
        <Grid item xs={10}>
        <TextField fullWidth size="small"/>
        </Grid>
        </Grid>

        
        <Grid container spacing={1} mt={1}>
        <Grid item xs={2}>
        <Typography variant="subtitle2">Lĩnh vực nghiên cứu:</Typography>
        </Grid>
        <Grid item xe={10}>
        <FormGroup row> 
        <FormControlLabel control={<Checkbox size="small"/>}
        label="Giáo dục"/>
        <FormControlLabel control={<Checkbox size="small"/>}
        label="Y tế"/>
        <FormControlLabel control={<Checkbox size="small"/>}
        label="Môi trường"/>
        <FormControlLabel control={<Checkbox size="small"/>}
        label="Khoa học"/>
        </FormGroup>
    
        </Grid>
        </Grid>
        <Box display={"flex"} justifyContent={"center"} gap={2} mt={2}>
        <Button variant="outlined" color="error">Xóa</Button>
        <Button variant="Contained">Đăng ký</Button>
        </Box>
        </Box>
        </MainLayout>
    )

}
export default TeacherSubTopic;