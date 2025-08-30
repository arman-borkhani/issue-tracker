import { prisma } from "@/prisma/client";
import { Box, Flex, Grid } from "@radix-ui/themes";
import IssueChart from "./IssueChart";
import IssueSummary from "./IssueSummary";
import LatestIssues from "./LatestIssues";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

const Home = async () => {
  const open = await prisma.issue.count({ where: { status: "OPEN" } });
  const inProgress = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });
  const closed = await prisma.issue.count({ where: { status: "CLOSED" } });

  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
      <Box>
        <Flex direction="column" gap="5">
          <IssueSummary open={open} inProgress={inProgress} closed={closed} />
          <IssueChart open={open} inProgress={inProgress} closed={closed} />
        </Flex>
      </Box>
      <Box>
        <LatestIssues />
      </Box>
    </Grid>
  );
};

export const metadata: Metadata = {
  title: "Issue Tracker - Dashboard",
  description: "View a summary of project issues",
};

export default Home;
