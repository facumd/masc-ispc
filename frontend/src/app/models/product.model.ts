export interface Product {
  id: string;
  title: string;
  slug: string;
  description: string;
  price: string;
  stock: number;
  image_link: string;
  image_file: string;
  subcategory: Category;
  created_by: CreatedBy;
  created_at: string;
  updated_at: string;
}

export interface CreatedBy {
  email: string;
  username: null;
  first_name: string;
  last_name: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  category?: Category;
  created_at: string;
  updated_at: string;
}
