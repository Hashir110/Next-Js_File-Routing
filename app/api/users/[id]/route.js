import { users } from "@/utilis/db";
import { NextResponse } from "next/server";

export function GET(request, content) {
  const userData = users.filter(
    (user) => user.id == parseInt(content.params.id)
  );
  if (userData.length === 0) {
    return NextResponse.json(
      { status: 404, message: "User not found" },
      { status: 404 }
    );
  } else {
    return NextResponse.json(userData, { status: 200 });
  }
}
