"use client";

import { ErrorMessage } from "@/app/components";
import { createIssueSchema } from "@/app/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Callout,
  Spinner,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type IssueForm = z.infer<typeof createIssueSchema>;

const newIssuePage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema),
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsSubmitting(true);
      await axios.post("/api/issues", data);
      router.push("/issues");
    } catch (error) {
      setIsSubmitting(false);
      setError("An unexpected error occurred.");
    }
  });

  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}

      <form className="space-y-3" onSubmit={onSubmit}>
        <TextField.Root placeholder="Title" {...register("title")} />
        <ErrorMessage>{errors.title?.message}</ErrorMessage>

        <TextArea placeholder="Description" {...register("description")} />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>

        <Button disabled={isSubmitting}>
          Submit New Issue
          <Spinner loading={isSubmitting} />
        </Button>
      </form>
    </div>
  );
};

export default newIssuePage;
