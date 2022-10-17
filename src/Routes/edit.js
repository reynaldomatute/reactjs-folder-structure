import { Form, useLoaderData, redirect, } from "react-router-dom";
import { updateContact } from "../Api/contacts";

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateContact(params.contactId ?? 0, updates);
  return redirect('/')
  //return redirect(`/contacts/${params.contactId}`);
}

export default function EditContact() {
  const contact = useLoaderData();

  return (
    <Form className="pt-2" method="post" id="contact-form">
      <div className="row">
        <div className="col-1">
          <label className="col-form-label">Name</label>
        </div>
        <div className="col-2">
          <input
            className="form-control"
            placeholder="First"
            aria-label="First name"
            type="text"
            name="first"
            defaultValue={contact?.first}
          />
        </div>
        <div className="col-2">
          <input
            className="form-control"
            placeholder="Last"
            aria-label="Last name"
            type="text"
            name="last"
            defaultValue={contact?.last}
          />
        </div>
      </div>
      <div className="row pt-2">
        <div className="col-1">
          <label>Twitter</label>
        </div>
        <div className="col-2">
          <input
            className="form-control"
            type="text"
            name="twitter"
            placeholder="@jack"
            defaultValue={contact?.twitter}
          />
        </div>
      </div>

      <div className="row pt-2">
        <div className="col-1">
          <span>Avatar URL</span>
        </div>
        <div className="col-2">
          <input
            className="form-control"
            placeholder="https://example.com/avatar.jpg"
            aria-label="Avatar URL"
            type="text"
            name="avatar"
            defaultValue={contact?.avatar}
          />
        </div>
      </div>
      <div className="row pt-2">
        <div className="col-1">
          <span>Notes</span>
        </div>
        <div className="col-2">
          <textarea
            className="form-control"
            name="notes"
            defaultValue={contact?.notes}
            rows={6}
          />
        </div>
      </div>
      <div className="row pt-2">
        <div className="col-1"></div>
        <div className="col-2">
          <button className="btn btn-primary" type="submit">Save</button>
          <button className="btn btn-secondary" type="button">Cancel</button>
        </div>
      </div>

    </Form>
  );
}