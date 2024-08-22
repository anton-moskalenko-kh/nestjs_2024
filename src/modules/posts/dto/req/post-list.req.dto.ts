export class PostListReqDto {
  page?: number;

  limit?: number;

  search?: string;

  sort?: string;

  order?: Order;

  orderBy?: string;
}

enum Order {
  ASC = 'asc',
  DESC = 'desc',
}
