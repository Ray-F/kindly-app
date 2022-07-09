import { Request, Response } from 'express';

export enum HttpStatus {
  OK = 200,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  INTERNAL_SERVER_ERORR = 500,
}

interface PathReturnProps {
  statusCode: HttpStatus,
  message?: string,
  body?: object
}

export class RoutePath {

  private readonly request: Request;
  private readonly response: Response;

  constructor(request: Request, response: Response) {
    this.request = request;
    this.response = response;
  }

  respond(props: PathReturnProps) {
    if (!!props.message) {
      this.response.statusMessage = props.message;
    }

    if (!props.body) {
      this.response.sendStatus(props.statusCode);
    } else {
      this.response.status(props.statusCode).json(props.body);
    }
  }
}