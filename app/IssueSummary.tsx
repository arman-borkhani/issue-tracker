import { Status } from "@prisma/client";
import { Box, Card, Flex, Grid, Text } from "@radix-ui/themes";
import Link from "next/link";

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}

const IssueSummary = ({ open, inProgress, closed }: Props) => {
  const containers: {
    label: string;
    value: number;
    status: Status;
  }[] = [
    { label: "Open Issues", value: open, status: "OPEN" },
    { label: "In Progress Issues", value: inProgress, status: "IN_PROGRESS" },
    { label: "Closed Issues", value: closed, status: "CLOSED" },
  ];

  return (
    <Grid columns={{ initial: "1", md: "3" }} gap="3">
      {containers.map((container) => (
        <Box key={container.label}>
          <Card>
            <Flex direction="column" gap="1">
              <Link
                className="text-sm font-medium"
                href={`/issues?status=${container.status}`}
              >
                {container.label}
              </Link>
              <Text size="5" className="font-bold">
                {container.value}
              </Text>
            </Flex>
          </Card>
        </Box>
      ))}
    </Grid>
  );
};

export default IssueSummary;
