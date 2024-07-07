'use client'

import { CreatePost } from "@/lib/posts";
import { Textarea } from "@nextui-org/input";
import { Spacer } from "@nextui-org/spacer";

export default function Page() {
  return (
    <form action={CreatePost}>
      <Textarea label="title" placeholder="記事のタイトルを入力" className="w-4/5 h-24 mx-auto" />
      <Spacer y={5} />
      <Textarea label="content" placeholder="記事本文を記入" className="w-4/5 h-96 mx-auto" />
    </form>
  );
}
