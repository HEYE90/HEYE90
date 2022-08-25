
import React from 'react'
import CollapseIcon from "./CollapseIcon"
import DashboardIcon from "./DashboardIcon"
import EditIcon from "./EditIcon"
import MembersIcon from "./MembersIcon"
import MessageIcon from "./MessageIcon"
import ModulesIcon from "./ModulesIcon"
import NotificationIcon from "./NotificationIcon"
import PencilIcon from "./PencilIcon"
import PlusIcon from "./PlusIcon"
import ProjectsIcon from "./ProjectsIcon"
import ReportsIcon from "./ReportsIcon"
import SearchIcon from "./SearchIcon"
import SortIcon from "./SortIcon"

const icons = {
  CollapseIcon: <CollapseIcon />,
  DashboardIcon: <DashboardIcon />,
  EditIcon: <EditIcon />,
  MembersIcon: <MembersIcon />,
  MessageIcon: <MessageIcon />,
  ModulesIcon: <ModulesIcon />,
  NotificationIcon: <NotificationIcon />,
  PencilIcon: <PencilIcon />,
  PlusIcon: <PlusIcon />,
  ProjectsIcon: <ProjectsIcon />,
  ReportsIcon: <ReportsIcon />,
  SearchIcon: <SearchIcon />,
  SortIcon: <SortIcon />,
}

const Icon = (props) => {

  return (
    <>
        {icons[props.icon] }
    </>
  )
}

export default Icon
