class ApiError extends Error {
  statusCode: number;
  data: any;
  message: string;
  success: boolean;
  errors: any;

  constructor(
    statusCode: number,
    message: string = 'Something went wrong',
    errors: any = []
  ) {
    super();
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;
  }
}

module.exports = ApiError;
