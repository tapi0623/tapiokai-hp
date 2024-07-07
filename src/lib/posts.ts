"use server";

import prisma from "@/lib/prisma";

interface CreatePostReq {
  title: string;
  content: string;
  thumbnail_path: string;
}

export async function CreatePost(req: CreatePostReq) {
  await prisma.post.create({
    data: {
      title: req.title,
      content: req.content,
      thumbnail_path: req.thumbnail_path,
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
