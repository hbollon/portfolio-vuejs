import Cosmic from "cosmicjs";

const cosmic = Cosmic(process.env.VUE_APP_COSMICJS_TOKEN);
export const bucket = cosmic.bucket({
  slug: process.env.VUE_APP_COSMICJS_BUCKET_SLUG,
  read_key: process.env.VUE_APP_COSMICJS_BUCKET_READ_KEY,
  write_key: "",
});
