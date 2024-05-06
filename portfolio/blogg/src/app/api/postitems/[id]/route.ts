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

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const updatedItem = await request.json();
  try {
    const postItem = await PostItem.findByIdAndUpdate(params.id, {
      ...updatedItem,
    });

    if (!postItem) {
      return new Response(
        JSON.stringify({ message: "No item found for this id." }),
        {
          status: 404,
        }
      );
    }
    return new Response(JSON.stringify(postItem), {
      headers: {
        "Contents-Type": "application/json",
      },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Server Error." }), {
      status: 500,
    });
  }
}

// DELETE:
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {}
