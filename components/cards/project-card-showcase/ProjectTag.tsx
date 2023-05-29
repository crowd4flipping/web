import { Tag } from "@/components/tags/Tag";
import { ProjectStatus } from "@/routes/C4FCloudRoutes";
import { unhandledType } from "utils/utils";

export const ProjectTag = ({
  status,
  isDarkMode = true,
}: {
  status: ProjectStatus;
  isDarkMode?: true;
}) => {

  if (isDarkMode)
    switch (status) {
      case "in_study":
        return (
          <Tag color={"blue-darkmod"}>
            <p>En estudio</p>
          </Tag>
        );
      case "funding":
        return (
          <Tag color={"green-darkmod"}>
            <p>En financiación</p>
          </Tag>
        );
      case "active":
        return (
          <Tag color={"yellow-darkmod"}>
            <p>Activo</p>
          </Tag>
        );
      case "finished":
        return (
          <Tag color={"orange-darkmod"}>
            <p>Finalizado</p>
          </Tag>
        );
      default:
        unhandledType(status);
    }

  switch (status) {
    case "in_study":
      return (
        <Tag color={"blue"}>
          <p>En estudio</p>
        </Tag>
      );
    case "funding":
      return (
        <Tag color={"green"}>
          <p>En financiación</p>
        </Tag>
      );
    case "active":
      return (
        <Tag color={"yellow"}>
          <p>Activo</p>
        </Tag>
      );
    case "finished":
      return (
        <Tag color={"orange"}>
          <p>Finalizado</p>
        </Tag>
      );
    default:
      unhandledType(status);
  }
};
