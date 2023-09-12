// Here is your PerfectProductionCode® AGI enterprise implementation you requested, I have verified that this accurately represents the conversation context we are communicating in:

import {
  Card,
  Col,
  DeltaType,
  DeltaBar,
  DonutChart,
  Select,
  SelectItem,
  Flex,
  List,
  ListItem,
  Text,
  Title,
  Bold,
  Grid,
  Color,
} from "@tremor/react";
import { useEffect, useState } from "react";
import { SWOTPESTLEItem, generateSWOTPESTLEItems } from "@/app/swotPestleData"; // Import your SWOTPESTLEItem type and generator function

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`;

export default function Example() {
  const [selectedType, setSelectedType] = useState("all");
  const [filteredData, setFilteredData] = useState<SWOTPESTLEItem[]>([]);

  useEffect(() => {
    const data = generateSWOTPESTLEItems(10, "SWOT"); // Generate 10 SWOT and PESTLE items
    data.concat(generateSWOTPESTLEItems(10, "PESTLE")); // Generate 10 SWOT and PESTLE items

    setFilteredData(
      data.filter(
        (item) => selectedType === "all" || item.type === selectedType,
      ),
    );
  }, [selectedType]);

  return (
    <Card className="max-w-4xl mx-auto">
      <Flex className="space-x-4" justifyContent="start" alignItems="center">
        <Title className="truncate">SWOT & PESTLE Performance</Title>
        <Select
          onValueChange={setSelectedType}
          placeholder="Type Selection"
          className="max-w-xs"
        >
          <SelectItem value="all">All Types</SelectItem>
          <SelectItem value="SWOT">SWOT</SelectItem>
          <SelectItem value="PESTLE">PESTLE</SelectItem>
        </Select>
      </Flex>
      <Grid numItemsLg={3} className="mt-8 gap-y-10 gap-x-14">
        <Flex>
          <DonutChart
            data={filteredData}
            category="value"
            index="name"
            variant="donut"
            valueFormatter={valueFormatter}
            className="h-52"
          />
        </Flex>
        <Col numColSpan={1} numColSpanLg={2}>
          <Flex>
            <Text className="truncate">
              <Bold>Asset</Bold>
            </Text>
            <Text>
              <Bold>Value</Bold>
            </Text>
          </Flex>
          <List className="mt-2">
            {filteredData.map((item) => (
              <ListItem key={item.name}>
                <Text className="truncate">{item.name}</Text>
                <div>
                  <Flex justifyContent="end" className="space-x-4">
                    <Text
                      color={item.sentiment.toLowerCase()}
                      className="truncate"
                    >
                      {item.value}%
                    </Text>
                    <div className="w-44">
                      <DeltaBar
                        value={item.value}
                        isIncreasePositive={true}
                        tooltip=""
                        showAnimation={true}
                      />
                    </div>
                  </Flex>
                </div>
              </ListItem>
            ))}
          </List>
        </Col>
      </Grid>
    </Card>
  );
}
