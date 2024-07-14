import { createClient } from "@sanity/client";

const config = {
  projectId: "8uv465dw",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-10-31",
};

export const client = createClient(config);
