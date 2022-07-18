type customer = {
  first_name?: string;
  last_name?: string;
  phone?: {
    area_code?: number;
    phone_number?: number;
  };
  identification?: {
    type?: string;
    identification_number?: number;
  };
  default_address?: string;
  address?: {
    id?: number;
    street_name?: string;
    street_number?: number;
    zip_code?: number;
  };
  description?: string;
  default_card?: string;
  id?: number;
};

export default customer;
