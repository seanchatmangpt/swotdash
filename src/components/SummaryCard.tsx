import {
  calculateOverallScore,
  getColorBySentiment,
  SWOTPESTLEItem,
} from "@/app/swotPestleData";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionList,
  Callout,
  Card,
  Flex,
  Metric,
  ProgressBar,
  Text,
} from "@tremor/react";

const SWOT_PESTLE_SummaryCards: React.FC<{
  label: string;
  data: SWOTPESTLEItem[];
}> = ({ label, data }) => {
  const overallScore = calculateOverallScore(data);
  return (
    <Card>
      <Metric>
        {label} Score: {overallScore}%
      </Metric>
      <Text className="mt-4">
        Summary of key {label} factors affecting the organization.
      </Text>
      <AccordionList className="mt-6">
        {data.map((item, idx) => (
          <Accordion key={item.name} defaultOpen={idx === 0 && true}>
            <AccordionHeader>
              <div className="space-y-2">
                <Flex>
                  <Text>{item.name}</Text>
                  <Text className="truncate">{`${item.metric} (${item.value}%)`}</Text>
                </Flex>
                <ProgressBar
                  value={item.value}
                  color={getColorBySentiment(item.sentiment)}
                />
              </div>
            </AccordionHeader>
            <AccordionBody>
              <Callout
                title={`${item.status} (${item.type})`}
                icon={item.icon}
                color={getColorBySentiment(item.sentiment)}
                className="mt-2"
              >
                {item.info}
              </Callout>
            </AccordionBody>
          </Accordion>
        ))}
      </AccordionList>
    </Card>
  );
};

export default SWOT_PESTLE_SummaryCards;
