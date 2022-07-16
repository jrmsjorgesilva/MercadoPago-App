type customer = {
  first_name: string;
  last_name: string;
  address: {
    id: number;
    street_name: string;
    street_number: number;
    zip_code: number;
  };
  zip_code: number;
  _id: number;
};

export default customer;
