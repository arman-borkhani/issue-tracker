import { Skeleton } from "@/app/components";
import { Box, Card, Flex } from "@radix-ui/themes";

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
