import { prisma } from "@/prisma/client";
import { Flex, Heading, Table } from "@radix-ui/themes";
import Link from "next/link";
import { IssueStatusBadge } from "./components";

const LatestIssues = async () => {
  const issues = await prisma.issue.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
  });
  return (
    <>
      <Heading size="6" mb="3">
        Lates Issues
      </Heading>
      <Table.Root mb="4" variant="surface">
        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.Cell>
                <Flex direction="column" align="start" gap="2">
                  <Link href={`/issues/${issue.id}`}>{issue.title}</Link>

                  <IssueStatusBadge status={issue.status} />
                </Flex>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </>
  );
};

export default LatestIssues;
