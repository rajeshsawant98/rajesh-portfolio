const defaultSiteUrl = "https://rajesh-portfolio-ten.vercel.app";

export function getSiteUrl() {
  const rawSiteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    defaultSiteUrl;

  const trimmedSiteUrl = rawSiteUrl.trim().replace(/\/+$/, "");

  if (/^https?:\/\//i.test(trimmedSiteUrl)) {
    return trimmedSiteUrl;
  }

  return `https://${trimmedSiteUrl}`;
}