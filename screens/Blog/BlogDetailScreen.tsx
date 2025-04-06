"use client";

import React from "react";
import BlogDetail from "@/components/Blog/BlogDetail";

interface BlogDetailScreenProps {
  id: string;
}

export default function BlogDetailScreen({ id }: BlogDetailScreenProps) {
  return <BlogDetail id={id} />;
} 