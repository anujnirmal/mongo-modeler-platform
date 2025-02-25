export class ApiResponse {
  data: any;
  statusCode: number;
  message: string;
  success: boolean;

  constructor(data: any = [], statusCode: number, message: string = 'success') {
    this.data = data;
    this.statusCode = statusCode;
    this.message = message;
    this.success = statusCode < 400;
  }
}
