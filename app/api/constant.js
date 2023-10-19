import { Resend } from "resend";

const RESEND_API_KEY='re_QXYe5X55_Kogpq9ecTNLXzfutZGhowM9R';
const VERCEL_BLOB_READ_WRITE_TOKEN='vercel_blob_rw_LXrLk65kmheamthX_I0mBchCxpEP5VH5PjKvKg8rgdZE5OG'
const EMAIL_RECIPIENT="in@leagueofsound.com"

const resend = new Resend(RESEND_API_KEY);

module.exports = {
    resend,
    EMAIL_RECIPIENT,
    VERCEL_BLOB_READ_WRITE_TOKEN
}