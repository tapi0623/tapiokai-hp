"use server";

import prisma from "@/lib/prisma";
import { z } from "zod";

export async function CreatePost(data: FormData) {
  const title = data.get("title");
  const content = data.get("content");
  const thumbnail_path = data.get("thumbnail_path");
  await prisma.post.create({
    data: {
      title,
      content,
      thumbnail_path,
    },
  });
}

interface ReadPostReq {
  id: number;
}

export async function ReadPost(req: ReadPostReq) {
  const res = await prisma.post.findUnique({
    where: {
      id: 1,
    },
  });
  return res;
}

interface UpdatePostReq {
  id: number;
  title?: string;
  content?: string;
  thumbnail_path?: string;
}

export async function UpdatePost(req: UpdatePostReq) {
  await prisma.post.update({
    where: {
      id: req.id,
    },
    data: {
      title: req.title,
      content: req.content,
      thumbnail_path: req.thumbnail_path,
    },
  });
}

interface DeletePostReq {
  id: number;
}

export async function DeletePost(req: DeletePostReq) {
  await prisma.post.delete({
    where: {
      id: req.id,
    },
  });
}
