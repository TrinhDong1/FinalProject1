import AccountManagement from "../pages/admin/AccountManagement";
import Login from "../pages/guest/Login";
import StudentHome from "../pages/student/StudentHome";
import StudentInfo from "../pages/student/StudentInfo";
import SubTopic from "../pages/student/SubTopic";
import StatusTopic from "../pages/student/StatusTopic";
import TeacherHome from "../pages/teacher/TeacherHome";
import ManagementApproveSubTopic from "../pages/management/ManagementApproveSubTopic";
import ProviderCodeTopic from "../pages/management/ProviderCodeTopic";
import ManagementInfo from "../pages/management/ManagementInfo";
import AssignTeacherReview from "../pages/management/AssignTeacherReview";
import GuestMessage from "../pages/guest/GuestMessage";
import GuestInstruction from "../pages/guest/GuestInstruction";
import GuestPreference from "../pages/guest/GuestPreference";
import GuestContact from "../pages/guest/GuestContact";
import MajorManagement from "../pages/admin/MajorManagement";
import TopicManagement from "../pages/management/TopicManagement";
import StudentCodeTopic from "../pages/student/StudentCodeTopic";
import TeacherSubTopic from "../pages/teacher/TeacherSubTopic";
import AssignedReview from "../pages/teacher/AssignedReview";
import TeacherInfo from "../pages/teacher/TeacherInfo";

export const listRouter = {
  admin: [
    { path: "/", element: <AccountManagement /> },
    { path: "/major-management", element: <MajorManagement /> },
  ],
  management: [
    {
      path: "/",
      element: <TopicManagement />,
    },
    {
      path: "/management-info",
      element: <ManagementInfo />,
    },
    {
      path: "/management-approve-sub-topic",
      element: <ManagementApproveSubTopic />,
    },
    {
      path: "/provider-code-topic",
      element: <ProviderCodeTopic />,
    },
    {
      path: "/assign-teacher-review",
      element: <AssignTeacherReview />,
    },
  ],
  teacher: [
    { path: "/", element: <TeacherHome /> },
    { path: "/teacher-info", element: <TeacherInfo /> },
    { path: "/assigned-review", element: <AssignedReview /> },
    { path: "/teacher-sub-topic", element: <TeacherSubTopic /> },
  ],
  student: [
    { path: "/student-code-topic", element: <StudentCodeTopic /> },
    { path: "/", element: <StudentHome /> },
    { path: "/student-info", element: <StudentInfo /> },
    { path: "/sub-topic", element: <SubTopic /> },
    { path: "/status-topic", element: <StatusTopic /> },
  ],
  guest: [
    { path: "/", element: <GuestMessage /> },
    { path: "/login", element: <Login /> },
    { path: "/guest-instruction", element: <GuestInstruction /> },
    { path: "/guest-preference", element: <GuestPreference /> },
    { path: "/guest-contact", element: <GuestContact /> },
  ],
};
