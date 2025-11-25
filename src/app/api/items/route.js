import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import clientPromise from "@/app/lib/mongodb";

const client = await clientPromise;
const db = client.db("nextJS-DB"); 
const itemsCollection = db.collection("items"); 

// GET route
export async function GET(req) {
  const url = new URL(req.url);
  const id = url.searchParams.get("id");
  const latest = url.searchParams.get("latest");

  try {
    if (id) {
      const item = await itemsCollection.findOne({ _id: new ObjectId(id) });
      return NextResponse.json(item);
    }

    if (latest === "3") {
      const items = await itemsCollection
        .find()
        .sort({ dateAdded: -1 })
        .limit(3)
        .toArray();
      return NextResponse.json(items);
    }

    // All items
    const items = await itemsCollection.find().toArray();
    return NextResponse.json(items);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const newItem = await req.json();
    newItem.dateAdded = new Date(); 
    const result = await itemsCollection.insertOne(newItem);
    return NextResponse.json(result);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// DELETE route
export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) return NextResponse.json({ error: "ID missing" }, { status: 400 });

    const result = await itemsCollection.deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount === 0)
      return NextResponse.json({ error: "Item not found" }, { status: 404 });

    return NextResponse.json({ message: "Item deleted successfully" });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}