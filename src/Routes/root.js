import { Outlet, NavLink, Link, useLoaderData, Form, redirect, useNavigation, } from "react-router-dom";
import { getContacts, createContact } from "../Api/contacts";
import '../Assets/sidebar.css'

export async function loader() {
  const contacts = getContacts();
  console.log(contacts);
  return { contacts };
}

export default function Root() {
  const { contacts } = useLoaderData();
  const navigation = useNavigation();
  return (
    <>
      <div id="sidebar" className="sidebar">
        <div className="container text-center pt-3">
          <div className="row">
            <div className="col-7" >
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            </div>
            <div className="col-2">
              <Form method="post">
                <button className="btn btn-primary" type="submit">New</button>
              </Form>
            </div>
          </div>
        </div>
        <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <Link to={`contacts/${contact.id}`}>
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {contact.favorite && <span>★</span>}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div>
      <div
        id="detail"
        className="content"
      // className={
      //   navigation.state === "loading" ? "loading" : ""
      // }
      >
        <Outlet />
      </div>
    </>
  );
}


export async function action() {
  const contact = createContact();
  return redirect(`/contacts/${contact?.id}/edit`);
}