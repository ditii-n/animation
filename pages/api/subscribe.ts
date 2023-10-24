import axios from "axios";

// Needed for cloudflare edge runtime
export const runtime = 'edge';

export default async function handler(req: any, res: any) {
  if (req.method === "PUT") {
    axios
      .put(
        "https://api.sendgrid.com/v3/marketing/contacts",
        {
          contacts: [{ email: `${req.body.mail}` }],
          list_ids: [`${process.env.SENDGRID_LISTID_TEST}`],
        },
        {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
          },
        }
      )
      .then((result) => {
        return res.status(200).send({
          message: "Your email has been successfully added to the mailing list. Welcome 👋!",
        });
      })
      .catch((err) => {
        return res.status(500).send({
          message: "There was a problem with your subscription, please try again or contact us.",
        });
      });
  }
}
