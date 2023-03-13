import { APIGatewayEvent, Context } from "aws-lambda";
import { LambdaResponse } from "../types/lambdaResponse";

type AuthRequest = {
  name: string;
};

// To test this endpoint locally, create a POST request with http://localhost:3000/dev/auth?name=<your_name>
export const auth = async (
  event: APIGatewayEvent & { queryStringParameters: AuthRequest },
  _: Context
) => {
  const { name } = event.queryStringParameters;
  const response: LambdaResponse = {
    statusCode: 200,
    body: JSON.stringify({
      msg: `Hello ${name} from auth lambda!`,
    }),
  };
  return response;
};
