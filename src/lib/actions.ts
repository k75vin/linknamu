"use server";

import { redirect } from "next/navigation";
import { getDb } from "@/lib/mongodb";

export async function recordLinkClick(linkId: string, href: string) {
  try {
    const db = await getDb();
    await db
      .collection("linkClicks")
      .updateOne(
        { linkId },
        { $inc: { count: 1 }, $set: { updatedAt: new Date() } },
        { upsert: true }
      );
  } catch (error) {
    console.error(`Failed to record click for "${linkId}":`, error);
  }

  redirect(href);
}
