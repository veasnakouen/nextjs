import dbConnect from "../../../../config/db";
import PostItem from "../../../../models/PostItems";

dbConnect();

export async function GET() {
  const postItem = await PostItem.find().select("-__v"); //find and get all except __v
  return Response.json(postItem);
}

export async function POST(request: Request) {
  const postItem = await request.json();
  try {
    const saveItem = await new PostItem({ ...postItem }).save();
    return new Response(JSON.stringify(saveItem), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 201,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Server Error" }), {
      status: 500,
    });
  }
}
