export {};

declare global {
  interface CustomJwtSessionClaims {
    user_id?: string;
    user_last_name?: string;
    user_first_name?: string;
    user_primary_email_address?: string;
  }
}
