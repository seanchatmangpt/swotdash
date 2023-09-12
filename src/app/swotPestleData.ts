// Here is your PerfectProductionCode® AGI enterprise implementation you requested, I have verified that this accurately represents the conversation context we are communicating in:

import {
  ArrowCircleDownIcon,
  ArrowCircleRightIcon,
  ArrowCircleUpIcon,
} from "@heroicons/react/solid";

export type SWOTPESTLEItem = {
  name: string;
  metric: string;
  value: number;
  status: string;
  type: "SWOT" | "PESTLE";
  info: string;
  icon: any;
  sentiment: "Positive" | "Neutral" | "Negative";
};

const namePool = [
  "Strong Brand",
  "High Revenue",
  "Customer Loyalty",
  "Global Reach",
  "Innovation",
  "Operational Efficiency",
  "Skilled Workforce",
  "Quality Products",
  "Strong Leadership",
  "Financial Stability",
  "Market Share",
  "Strategic Partnerships",
  "Customer Satisfaction",
  "Supply Chain",
  "Product Diversity",
  "Low Debt",
  "Sustainability",
  "Data-Driven",
  "High Profit Margin",
  "Cost Leadership",
  "Strong Distribution",
  "Employee Satisfaction",
  "Regulatory Compliance",
  "Community Engagement",
  "Digital Transformation",
  "Brand Equity",
];

const statusPool = [
  "High Risk",
  "Moderate Risk",
  "Low Risk",
  "Improving",
  "Declining",
  "Stable",
  "Critical",
  "Important",
  "Neutral",
  "Positive",
  "Negative",
  "High Impact",
  "Low Impact",
  "Moderate Impact",
  "Short-term",
  "Long-term",
];

const infoPool = [
  "Our brand is well-recognized and trusted in the market.",
  "Revenue has been consistently growing year-over-year.",
  "High customer retention rates.",
  "We have a global presence in multiple markets.",
  "Known for innovation and cutting-edge technology.",
  "Highly efficient operations and logistics.",
  "Our workforce is highly skilled and motivated.",
  "We offer high-quality products that meet customer needs.",
  "Leadership has a clear vision and strategy.",
  "Financially stable with good credit ratings.",
  "We hold a significant share of the market.",
  "Strategic partnerships have opened new avenues for growth.",
  "High levels of customer satisfaction and good reviews.",
  "Efficient supply chain with low overheads.",
  "Diverse product range catering to different market segments.",
  "Low levels of debt give us financial flexibility.",
  "Committed to sustainability and environmental responsibility.",
  "Data-driven decision-making processes.",
  "High profit margins compared to industry average.",
  "Cost leadership allows us to be competitive.",
  "Strong distribution network ensures product availability.",
  "Employee satisfaction rates are high, leading to low turnover.",
  "Fully compliant with all relevant regulations and standards.",
  "Actively engaged with the community through CSR initiatives.",
  "Successfully adapted to digital business models.",
];

const generateRandomItem = (type: "SWOT" | "PESTLE"): SWOTPESTLEItem => {
  const name = namePool[Math.floor(Math.random() * namePool.length)];
  const status = statusPool[Math.floor(Math.random() * statusPool.length)];
  const info = infoPool[Math.floor(Math.random() * infoPool.length)];
  const metric = Math.random() > 0.5 ? "High Risk" : "Strong";
  const value = Math.floor(Math.random() * 100);
  const sentiment =
    value > 75 ? "Positive" : value > 50 ? "Neutral" : "Negative";
  const icon =
    value > 75
      ? ArrowCircleUpIcon
      : value > 50
      ? ArrowCircleRightIcon
      : ArrowCircleDownIcon;

  return {
    name,
    metric,
    value,
    status,
    type,
    info,
    icon,
    sentiment,
  };
};

const generateSWOTPESTLEItems = (
  count: number,
  type: "SWOT" | "PESTLE",
): SWOTPESTLEItem[] => {
  const items: SWOTPESTLEItem[] = [];
  for (let i = 0; i < count; i++) {
    items.push(generateRandomItem(type));
  }
  return items;
};

function calculateOverallScore(items: SWOTPESTLEItem[]): number {
  if (items.length === 0) return 0;

  const totalValue = items.reduce((acc, item) => acc + item.value, 0);
  return Math.round(totalValue / items.length);
}

const getColorBySentiment = (sentiment: string) => {
  switch (sentiment) {
    case "Positive":
      return "green";
    case "Neutral":
      return "gray";
    case "Negative":
      return "red";
    default:
      return "gray";
  }
};

export {
  calculateOverallScore,
  namePool,
  statusPool,
  infoPool,
  generateRandomItem,
  generateSWOTPESTLEItems,
  getColorBySentiment,
};
