import { Form, useLoaderData } from "react-router-dom";
import { getContacts, createContact } from "../Api/contacts";

export async function loader({ params }) {
  return getContacts(params.contactId);
}

export default function Contact() {
  const contact = useLoaderData();

  return (
    <div className="row pt-2" id="contact">
      <div className="col-3">
        <img
          key={contact.avatar}
          src={contact.avatar || null}
        />
      </div>

      <div className="col-3">
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}

        </h1>

        {contact.twitter && (
          <p>
            <a
              target="_blank"
              href={`https://twitter.com/${contact.twitter}`}
            >
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <div className="row">
            <div className="col-4">
              <Form action="edit">
                <button className="btn btn-primary" type="submit">Edit</button>
              </Form>
            </div>
            <div className="col-2">
              <Form
                method="post"
                action="destroy"
                onSubmit={(event) => {
                  if (
                    !window.confirm(
                      "Please confirm you want to delete this record."
                    )
                  ) {
                    event.preventDefault();
                  }
                }}
              >
                <button className="btn btn-danger" type="submit">Delete</button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Favorite({ contact }) {
  // yes, this is a `let` for later
  let favorite = contact.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={
          favorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
}