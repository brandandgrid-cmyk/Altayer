export type PageRoute = 
  | '/'
  | '/about-us'
  | '/products'
  | '/contact-us'
  | '/privacy-policy'
  | '/terms-and-conditions'
  | '/disclaimer'
  | '/cookie-policy';

export interface ProductCategory {
  id: string;
  serialNumber: number; // 1 to 19
  name: string;
  slug: string;
  description: string;
  iconName: string;
  image: string;
  subcategories: string[];
}

export interface ProductItem {
  id: string;
  code: string; // e.g. 'ALT-STL-01'
  itemNumber: string; // e.g. '1.1', '1.2', '2.1'
  name: string;
  categorySlug: string;
  categoryName: string;
  categorySerial: number; // 1 to 19
  description: string;
  applications: string[];
  specifications: Record<string, string>;
  image: string;
  featured?: boolean;
}

export interface QuoteFormData {
  name: string;
  companyName: string;
  phone: string;
  email: string;
  productRequired: string;
  quantity: string;
  deliveryLocation: string;
  message: string;
  fileAttachment?: File | null;
}

