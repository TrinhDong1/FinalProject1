import React from "react";
import { Button, Box, Typography, TextField, Grid } from "@mui/material";
import MainLayout from "../../components/layout/MainLayout";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function StudentHome() {
  return (
    <MainLayout type="student">
      <Button fullWidth size="large" variant="contained">
        Quản lý đề tài
      </Button>
      <Box mt={4}>
        <Typography variant="subtitle2">
          Đề tài: Lập trình hệ thống đăng kí đề tài
        </Typography>
        <Box mt={4}>
          <Timeline
            sx={{
              [`& .${timelineOppositeContentClasses.root}`]: {
                flex: 0.2,
              },
            }}
          >
            <TimelineItem>
              <TimelineOppositeContent color="textSecondary">
                14/11/2023
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Giai đoạn 1: Khởi tạo dự án</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box mt={4}>
                      <Typography
                        variant="subtitle1"
                        textAlign={"center"}
                        fontWeight={"bold"}
                      >
                        Báo cáo tiến độ
                      </Typography>
                      <Grid container mt={4}>
                        <Grid item xs={3}>
                          <Typography variant="subtitle2">
                            Nộp báo cáo:
                          </Typography>
                        </Grid>
                        <Grid item xs={8}>
                          <TextField type="file" size="small" fullWidth />
                        </Grid>
                      </Grid>
                      <Grid container mt={4}>
                        <Grid item xs={3}>
                          <Typography variant="subtitle2">Tiến độ:</Typography>
                        </Grid>
                        <Grid item xs={8}>
                          <TextField size="small" fullWidth />
                        </Grid>
                      </Grid>
                      <Box display={"flex"} justifyContent={"center"} mt={2}>
                        <Button variant="contained" size="small">
                          Cập nhật
                        </Button>
                      </Box>
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color="textSecondary">
                24/11/2023
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Giai đoạn 2: Xây dựng sản phẩm</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box mt={4}>
                      <Typography
                        variant="subtitle1"
                        textAlign={"center"}
                        fontWeight={"bold"}
                      >
                        Báo cáo tiến độ
                      </Typography>
                      <Grid container mt={4}>
                        <Grid item xs={3}>
                          <Typography variant="subtitle2">
                            Nộp báo cáo:
                          </Typography>
                        </Grid>
                        <Grid item xs={8}>
                          <TextField type="file" size="small" fullWidth />
                        </Grid>
                      </Grid>
                      <Grid container mt={4}>
                        <Grid item xs={3}>
                          <Typography variant="subtitle2">Tiến độ:</Typography>
                        </Grid>
                        <Grid item xs={8}>
                          <TextField size="small" fullWidth />
                        </Grid>
                      </Grid>
                      <Box display={"flex"} justifyContent={"center"} mt={2}>
                        <Button variant="contained" size="small">
                          Cập nhật
                        </Button>
                      </Box>
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color="textSecondary">
                30/11/2023
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
              </TimelineSeparator>
              <TimelineContent>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Giai đoạn 3: Kết thúc dự án</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box mt={4}>
                      <Typography
                        variant="subtitle1"
                        textAlign={"center"}
                        fontWeight={"bold"}
                      >
                        Báo cáo tiến độ
                      </Typography>
                      <Grid container mt={4}>
                        <Grid item xs={3}>
                          <Typography variant="subtitle2">
                            Nộp báo cáo:
                          </Typography>
                        </Grid>
                        <Grid item xs={8}>
                          <TextField type="file" size="small" fullWidth />
                        </Grid>
                      </Grid>
                      <Grid container mt={4}>
                        <Grid item xs={3}>
                          <Typography variant="subtitle2">Tiến độ:</Typography>
                        </Grid>
                        <Grid item xs={8}>
                          <TextField size="small" fullWidth />
                        </Grid>
                      </Grid>
                      <Box display={"flex"} justifyContent={"center"} mt={2}>
                        <Button variant="contained" size="small">
                          Cập nhật
                        </Button>
                      </Box>
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Box>
      </Box>
    </MainLayout>
  );
}

export default StudentHome;
