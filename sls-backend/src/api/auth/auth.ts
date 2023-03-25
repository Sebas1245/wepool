import { APIGatewayEvent, Context } from "aws-lambda";
import { LambdaResponse } from "../lambdaResponse";

type AuthHandlerRequest = {
  name: string;
};

// To test this endpoint locally, try sending a POST request to http://localhost:3000/dev/auth?name=<YourName>
export const authHandler = async (
  event: APIGatewayEvent & { queryStringParameters: AuthHandlerRequest },
  _: Context
) => {
  const { name } = event.queryStringParameters;
  const response: LambdaResponse = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello ${name} from auth handler lambda!`,
    }),
  };
  return response;
};
