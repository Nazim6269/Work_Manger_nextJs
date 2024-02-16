import { NextResponse } from "next/server";

export function GET() {
  const users = [
    {
      name: "Nazim",
      mobile: "3333",
    },
    {
      name: "Abdur Rahman",
      mobile: "3334",
    },
    {
      name: "Saeed",
      mobile: "3335",
    },
  ];

  return NextResponse.json(users);
}

export function POST() {}

export function DELETE() {
  return NextResponse.json(
    {
      message: "delete",
      status: true,
    },
    { status: 201 }
  );
}

export function PUT() {}
