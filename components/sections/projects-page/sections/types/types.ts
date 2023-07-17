import { ProjectStatus } from "@/routes/C4FCloudRoutes";

type ProjectMedia = {
  link: string;
};

/**
 * @description Used to decouple the data given from cloud
 */
export type ProjectLegacy = {
  id: string;
  name: string;
  address: {
    city: string;
    state: string;
  };
  details: {
    type: string;
  };
  fund: {
    quantityFunded: number;
    quantityToFund: number;
    estimatedRentability: number;
    finalProfit: number;
  };
  phase: "crowd" | "in_study" | "finished" | "in_progress";
  projectMedia: ProjectMedia[];
};

/**
 * @description Used into the front end
 */
export type ProjectData = {
  id: string;
  city: string;
  state: string;
  businessModel: string;
  currentAmount: number;
  totalAmount: number;
  profitability: number;
  status: ProjectStatus;
  images: string[];
};
