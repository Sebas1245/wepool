interface HeaderOption {
  "Access-Control-Allow-Origin": string;
}

export type LambdaResponse = {
  headers?: HeaderOption;
  statusCode: number;
  body: string;
};
