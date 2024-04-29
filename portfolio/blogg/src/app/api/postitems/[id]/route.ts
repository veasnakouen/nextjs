import dbConnect from "../../../../../config/db";
import PostItem from "../../../../../models/PostItems";

dbConnect();

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const postItem = await PostItem.findById(params.id).select("-__v");
    //   return new Response(JSON.stringify(postItem), { status: 200 });
    return Response.json(postItem);
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "No Item found for this id" }),
      { status: 404 }
    );
  }
}
