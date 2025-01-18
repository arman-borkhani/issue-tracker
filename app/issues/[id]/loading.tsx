import { Box, Card, Flex } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingIssueDetailPage = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton></Skeleton>
      <Flex gap="2" align="center" my="2">
        <Skeleton width="5rem"></Skeleton>
        <Skeleton width="8rem"></Skeleton>
      </Flex>
      <Card>
        <Skeleton count={3}></Skeleton>
      </Card>
    </Box>
  );
};

export default LoadingIssueDetailPage;
