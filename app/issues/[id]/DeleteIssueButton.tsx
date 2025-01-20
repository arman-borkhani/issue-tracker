"use client";

import { Button, Dialog, Flex } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  const router = useRouter();

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button color="red">Delete Issue</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Title>Confirm Deletion</Dialog.Title>
        <Dialog.Description mb="4">
          Are you sure you want to delete this issue? This action can not be
          undone.
        </Dialog.Description>
        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button
              onClick={async () => {
                await axios.delete("/api/issues/" + issueId);
                router.push("/issues");
                router.refresh();
              }}
              color="red"
            >
              Delete Issue
            </Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default DeleteIssueButton;
