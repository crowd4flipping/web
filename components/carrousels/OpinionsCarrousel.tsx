import { Opinion } from "./types/Opinion";
import { Opinions } from "./Opinions";

export const OpinionsCarrousel = ({ data }: { data: Opinion[] }) => {
  return <Opinions data={data} />;
};
